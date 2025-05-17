import { Form } from "react-router";

export default function LoginPage() {
  return (
    <div className="flex items-center flex-col justify-center w-full gap-10">
      <h1 className="text-4xl font-semibold">Login to your account!</h1>
      <Form className="w-full max-w-sm space-y-5" method="post"></Form>
    </div>
  );
}
