import React from "react";
// import Address from './Address.js'
import Envelope from "./components/Envelope.js";

export default function App() {
  const senderName = "Mrs. C";
  const senderAddress = (
    <>
      <p>123 Fake St.</p>
      <p>Boston, MA 02118</p>
    </>
  );

  const receiverName = "Mr. C";
  const receiverAddress = (
    <>
      <p>123 Fake St.</p>
      <p>San Francisco, CA 94101</p>
    </>
  );

  return (
    <div>
      <Envelope
        sender={senderName}
        receiver={receiverName}
        senderAddress={senderAddress}
        receiverAddress={receiverAddress}
      />
    </div>
  );
}
