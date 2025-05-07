import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
});

export default function SignUpPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant={"outline"} asChild className="absolute top-10 right-8">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full gap-10">
        <h1 className="text-4xl font-semibold">Create an account</h1>
        <Form className="w-full max-w-sm space-y-5" method="post"></Form>
      </div>
    </div>
  );
}
