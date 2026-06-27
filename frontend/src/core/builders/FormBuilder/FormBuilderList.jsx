import { Plus, Edit2, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function FormBuilderList({ forms, onSelectForm }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
            <LayoutList className="mr-2 h-6 w-6 text-slate-400" /> Form Builder
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and customize dynamic forms across the application.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Form
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <div key={form.id} className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800/50">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{form.name}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{form.description}</p>
            </div>
            
            <div className="p-5 bg-slate-50/50 dark:bg-slate-900/20 flex-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400">Total Fields</span>
                <span className="font-medium text-slate-900 dark:text-white px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded-md">
                  {form.fields.length}
                </span>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 dark:border-slate-800/50 flex">
              <Button variant="outline" className="w-full text-sm" onClick={() => onSelectForm(form)}>
                <Edit2 className="mr-2 h-4 w-4" /> Edit Form
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
