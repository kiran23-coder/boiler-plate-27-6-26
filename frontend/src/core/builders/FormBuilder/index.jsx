import { useState } from "react"
import { FormBuilderList } from "./FormBuilderList"
import { FormEditor } from "./FormEditor"

const INITIAL_FORMS = [
  { 
    id: 1, 
    name: "Lead Capture", 
    description: "Form used to capture new leads from the website.",
    fields: [
      { id: "f1", type: "text", label: "Full Name" },
      { id: "f2", type: "email", label: "Email Address" },
      { id: "f3", type: "number", label: "Phone Number" }
    ]
  },
  { 
    id: 2, 
    name: "Customer Feedback", 
    description: "Post-purchase feedback survey.",
    fields: [
      { id: "f4", type: "text", label: "Order ID" },
      { id: "f5", type: "text", label: "Comments" }
    ]
  }
]

export function FormBuilder() {
  const [forms, setForms] = useState(INITIAL_FORMS)
  const [selectedForm, setSelectedForm] = useState(null)

  const handleSaveForm = (updatedForm) => {
    setForms(forms.map(f => f.id === updatedForm.id ? updatedForm : f))
    setSelectedForm(null) // Go back to list
  }

  if (selectedForm) {
    return (
      <FormEditor 
        form={selectedForm} 
        onBack={() => setSelectedForm(null)}
        onSave={handleSaveForm}
      />
    )
  }

  return (
    <FormBuilderList 
      forms={forms}
      onSelectForm={setSelectedForm}
    />
  )
}
