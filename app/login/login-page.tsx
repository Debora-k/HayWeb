import { Button } from "~/common/components/ui/button";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "~/common/components/auth-button";

export default function LoginPage() {
  return (
    <div className="flex items-center flex-col justify-center w-full gap-10">
      <Button variant={"outline"} asChild className="absolute top-10 right-8">
        <Link to="/auth/sign-up">Join</Link>
      </Button>
      <h1 className="text-4xl font-semibold">Login to your account!</h1>
      <Form className="w-full max-w-sm space-y-5" method="post">
        <InputPair
          id="email"
          label="Email"
          description="Enter your email"
          name="email"
          required
          type="email"
        />
        <InputPair
          id="password"
          label="Password"
          description="Enter your password"
          name="password"
          required
          type="password"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button>Sign Up</Button>
        <AuthButtons />
      </Form>
    </div>
  );
}
