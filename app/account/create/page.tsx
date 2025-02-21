import { CreateAccountForm } from "@/components/create-account-form"

export default function CreateAccountPage() {
  return (
    <div className="container py-10">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
          <p className="text-muted-foreground">Join our community of faith and fitness</p>
        </div>
        <CreateAccountForm />
      </div>
    </div>
  )
}

