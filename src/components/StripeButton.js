import React from "react";
import "../main.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrize = price * 1000;
  const publishableKey = "pk_test_k8MhohMYCNECOeodCnW5QsdV00yTRvUO1L";

  const onToken = (token) => {
    console.log(token);
    alert("payment succesfull");
  };
  return (
    <StripeCheckout
      currency="CZK"
      label="pay now"
      name="AnetaCamo"
      billingAddress
      shippingAddress
      description={`Your total is $${price} dollars`}
      amount={stripePrize}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
