import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";

export default function DeliveryPage() {
  return (
    <div>
      <h2>Delivery Info</h2>
      <div>
        <h4>We are offering delivery service within Calgary!</h4>
        <p>Minimum order $25 for free delivery</p>
        <p>If your area is in central of Calgary, then no minimum required</p>
      </div>
      <div>
        <Form className="w-full max-w-sm space-y-5" method="post">
          <InputPair
            id="address"
            label="Address"
            description="Enter your address"
            name="address"
            required
            type="address"
          />
          <Button type="submit" className="w-full">
            Confirm Delivery
          </Button>
        </Form>
      </div>
    </div>
  );
}
