import { redirect } from "react-router";
import type { Route } from "./+types/logout-page";
import { makeSSRClient } from "~/supa-client";

export const loader = async ({ request }: Route.ActionArgs) => {
  const { headers } = makeSSRClient(request);
  return redirect("/", { headers });
};
