const app = require('./app');
const prisma = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const chatService = require('./modules/communication/chat.service');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    const server = http.createServer(app);
    
    // Initialize Socket.IO
    const io = new Server(server, {
      cors: {
        origin: "*", // allow all for dev
        methods: ["GET", "POST"]
      }
    });

    // Socket Authentication Middleware
    io.use((socket, next) => {
      const token = socket.handshake.auth.token;
      if (!token) return next(new Error('Authentication error'));
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        socket.user = decoded;
        next();
      } catch (err) {
        next(new Error('Authentication error'));
      }
    });

    io.on('connection', (socket) => {
      console.log(`🔌 User connected: ${socket.user.userId}`);
      
      // Join a room specific to this user to receive direct messages
      socket.join(socket.user.userId);

      socket.on('send_message', async (data) => {
        try {
          const { receiverId, content } = data;
          const tenantId = socket.user.tenantId;
          const senderId = socket.user.userId;

          // Save to DB
          const message = await chatService.saveMessage(tenantId, senderId, receiverId, content);

          // Emit to receiver's room
          io.to(receiverId).emit('receive_message', message);
          
          // Also emit to sender's room to confirm
          io.to(senderId).emit('receive_message', message);
        } catch (error) {
          console.error("Socket send_message error:", error);
        }
      });

      socket.on('disconnect', () => {
        console.log(`🔌 User disconnected: ${socket.user.userId}`);
      });
    });

    server.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

startServer();
