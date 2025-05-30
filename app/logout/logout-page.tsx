import { redirect } from "react-router";

export const loader = async () => {
  return redirect("/");
};

export default function LogoutPage() {}
