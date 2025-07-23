import LogoMain from "@/components/logo";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next/types";
import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Lokblok | Login",
  description: "Login to get access your secured digital contents",
};

export default function Login() {
  return (
    <>
      <Card className="w-full max-w-md rounded-2xl gap-1 shadow-xl border-none dark-bg text-white p-12">
        <LogoMain />

        <CardHeader className="px-0 pt-0 pb-4">
          <CardTitle className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-white">Log in to your account</span>
          </CardTitle>
          <CardDescription className="text-center text-gray-300 text-base font-normal">Welcome back! Please enter your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground px-8 text-center text-sm my-2">
            By clicking login, you agree to our{" "}
            <a href="/terms" className="hover:text-primary underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="hover:text-primary underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
