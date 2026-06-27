import { useState } from "react"
import { ArrowLeft, Save, Type, Hash, MapPin, Mail, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useToast } from "@/components/ui/ToastContext"

const FIELD_TYPES = [
  { type: "text", label: "Text Field", icon: Type },
  { type: "number", label: "Number Field", icon: Hash },
  { type: "email", label: "Email Field", icon: Mail },
  { type: "address", label: "Address Block", icon: MapPin },
]

export function FormEditor({ form, onBack, onSave }) {
  const [fields, setFields] = useState(form.fields || [])
  const { addToast } = useToast()

  const handleDragStart = (e, fieldType) => {
    e.dataTransfer.setData("fieldType", fieldType)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const fieldType = e.dataTransfer.getData("fieldType")
    if (fieldType) {
      const fieldDef = FIELD_TYPES.find(f => f.type === fieldType)
      const newField = {
        id: `field_${Date.now()}`,
        type: fieldType,
        label: `New ${fieldDef.label}`,
      }
      setFields([...fields, newField])
    }
  }

  const handleDeleteField = (id) => {
    setFields(fields.filter(f => f.id !== id))
  }

  const handleLabelChange = (id, newLabel) => {
    setFields(fields.map(f => f.id === id ? { ...f, label: newLabel } : f))
  }

  const handleSave = () => {
    onSave({ ...form, fields })
    addToast("Form saved successfully!")
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800 shrink-0">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-4 text-slate-500">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">{form.name}</h1>
            <p className="text-xs text-slate-500">{form.description}</p>
          </div>
        </div>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" /> Save Form
        </Button>
      </div>

      {/* Workspace */}
      <div className="flex flex-1 mt-6 gap-6 min-h-0">
        {/* Sidebar Palette */}
        <div className="w-64 shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col">
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">Available Fields</h3>
          <p className="text-xs text-slate-500 mb-4">Click or drag into the canvas.</p>
          <div className="space-y-2">
            {FIELD_TYPES.map((field) => (
              <div
                key={field.type}
                draggable
                onDragStart={(e) => handleDragStart(e, field.type)}
                onClick={() => {
                  const newField = {
                    id: `field_${Date.now()}`,
                    type: field.type,
                    label: `New ${field.label}`,
                  }
                  setFields([...fields, newField])
                }}
                className="flex items-center p-3 border border-slate-200 dark:border-slate-800 rounded-md cursor-grab active:cursor-grabbing hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <field.icon className="h-4 w-4 mr-3 text-slate-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{field.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div 
          className="flex-1 bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 overflow-y-auto"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {fields.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <p>Drag and drop fields here to build your form</p>
            </div>
          ) : (
            <div className="space-y-4 max-w-2xl mx-auto bg-white dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm min-h-full">
              {fields.map((field) => (
                <div key={field.id} className="group relative border border-transparent hover:border-slate-200 dark:hover:border-slate-800 p-3 rounded-md transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <input 
                      type="text" 
                      value={field.label}
                      onChange={(e) => handleLabelChange(field.id, e.target.value)}
                      className="font-medium text-sm text-slate-900 dark:text-white bg-transparent border-b border-transparent hover:border-slate-300 focus:border-primary focus:outline-none px-1 py-0.5"
                    />
                    <button 
                      onClick={() => handleDeleteField(field.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Field Preview */}
                  <div className="opacity-70 pointer-events-none">
                    {field.type === 'text' && <input type="text" className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3" placeholder="Text input..." disabled />}
                    {field.type === 'number' && <input type="number" className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3" placeholder="0" disabled />}
                    {field.type === 'email' && <input type="email" className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3" placeholder="example@email.com" disabled />}
                    {field.type === 'address' && (
                      <textarea className="w-full h-20 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 resize-none" placeholder="Enter full address..." disabled></textarea>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
