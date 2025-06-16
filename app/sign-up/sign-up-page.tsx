import { Form, Link, redirect } from "react-router";
import { Button } from "~/common/components/ui/button";
import { z } from "zod";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "~/common/components/auth-button";
import type { Route } from "./+types/sign-up-page";
import { makeSSRClient } from "~/supa-client";

const formSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return {
      formErrors: error.flatten().fieldErrors,
    };
  }
  // const usernameExists = await checkUsernameExists(request, {
  //   username: data.username,
  // });
  // if (usernameExists) {
  //   return {
  //     formErrors: { username: ["Username already exists"] },
  //   };
  // }
  const { client, headers } = makeSSRClient(request);
  const { error: signUpError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
        username: data.username,
      },
    },
  });
  if (signUpError) {
    return {
      signUpError: signUpError.message,
    };
  }
  return redirect("/", { headers });
};

export default function SignUpPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant={"outline"} asChild className="absolute top-10 right-8">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full gap-10">
        <h1 className="text-4xl font-semibold">Create an account</h1>
        <Form className="w-full max-w-sm space-y-5" method="post">
          <InputPair
            id="name"
            label="Name"
            description="Enter your name"
            name="name"
            required
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            label="Username"
            description="Enter your username"
            name="username"
            required
            type="text"
            placeholder="e.g. john_doe"
          />
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="e.g. john@gmail.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <AuthButtons />
        </Form>
      </div>
    </div>
  );
}
