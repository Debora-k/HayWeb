import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";

export default function PaymentPage() {
  return (
    <div>
      <Hero title="Our Hay" subtitle="Our bunny loves this!" />

      <Button className="w-full">Checkout</Button>
    </div>
  );
}
