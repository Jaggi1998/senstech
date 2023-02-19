import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HQ5F0Gs5oswpUcsyEhxY9hfEBHTM65PY6S7BsmavgL02qgIPLimsMkYeWMWv23m4y1hwO9Tjo2aI67ML1Ngu0S000qtrrpv86"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    </Elements>
  );
};

export default CheckoutForm;
