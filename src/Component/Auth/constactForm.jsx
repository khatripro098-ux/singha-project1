import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phone = "9779847210851";
    
    const text = `Name: ${name} Message: ${message}`;

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendToWhatsApp}>Send on WhatsApp</button>
    </div>
  );
}
