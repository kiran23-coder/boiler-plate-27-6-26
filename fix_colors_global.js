const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('frontend/src');
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Regex to find className="..." containing dark:bg-slate-900 but missing dark:text-white
  // We'll replace it by appending dark:text-white text-slate-900 if they don't exist
  
  content = content.replace(/className="([^"]*dark:bg-slate-900[^"]*)"/g, (match, classes) => {
    let newClasses = classes;
    let modified = false;
    
    if (!newClasses.includes('dark:text-white') && !newClasses.includes('dark:text-slate-')) {
      newClasses += ' dark:text-white';
      modified = true;
    }
    
    if (!newClasses.includes('text-slate-') && !newClasses.includes('text-gray-') && !newClasses.includes('text-black')) {
      newClasses += ' text-slate-900';
      modified = true;
    }

    if (modified) {
      changed = true;
      return `className="${newClasses}"`;
    }
    
    return match;
  });

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
    count++;
  }
});

console.log('Total files fixed:', count);
