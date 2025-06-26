import { Button } from "~/common/components/ui/button";
import { Form, Link, redirect, useNavigation } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "~/common/components/auth-button";
import type { Route } from "./+types/login-page";
import { z } from "zod";
import { LoaderCircle } from "lucide-react";
import { makeSSRClient } from "~/supa-client";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | Hay" }];
};

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is invalid",
    })
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is invalid",
    })
    .min(8, "Password must be at least 8 characters long"),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return {
      loginError: null,
      formErrors: error.flatten().fieldErrors,
    };
  }

  const { email, password } = data;
  const { client, headers } = makeSSRClient(request);
  const { error: loginError } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    return {
      loginError: loginError.message,
      formErrors: null,
    };
  }
  return redirect("/", { headers });
};

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";
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
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Login"}
        </Button>
        {actionData && "loginError" in actionData && (
          <p className="text-red-500">{actionData.loginError}</p>
        )}
        <Button>Sign Up</Button>
        <AuthButtons />
      </Form>
    </div>
  );
}
