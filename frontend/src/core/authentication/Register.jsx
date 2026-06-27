import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export function Register() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Create an account
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Start your 14-day free trial, no credit card required.
        </p>
      </div>

      <form action="#" method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Full name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Company name
          </label>
          <div className="mt-1">
            <input
              id="company"
              name="company"
              type="text"
              required
              className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center pt-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
            I agree to the <a href="#" className="text-primary hover:underline">Terms</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </label>
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-slate-500">Already have an account? </span>
        <Link to="/login" className="font-medium text-primary hover:text-primary/80">
          Sign in
        </Link>
      </div>
    </div>
  )
}
