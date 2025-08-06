import { AuthLayout } from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/features/auth/login-form";
import { Github, ScanFaceIcon } from "lucide-react";

const Login = () => {
  return (
    <AuthLayout title="Login">
      <div>
        <h1 className="text-4xl font-light text-zinc-900 dark:text-white">Welcome back</h1>
        <p className="mt-2 text-lg font-light text-zinc-400">Log in to your account</p>
      </div>

      <LoginForm
        onSuccess={() => console.log("login is a success")}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-zinc-500">Or continue with</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="h-12 flex-1 rounded-full">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button variant="outline" size="icon" className="h-12 flex-1 rounded-full">
          <ScanFaceIcon className="h-6 w-6" />
          <span className="sr-only">Face ID</span>
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-foreground/80">
          <span>Don't have an account?</span>
          <Button variant="link" size="sm">
            Sign up
          </Button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login