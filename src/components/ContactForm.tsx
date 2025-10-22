import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_0xaetru",
        "template_wy2i6gu",
        form.current,
        "NiI6GqhRlGkMXQbaI"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Check console.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420, margin: "20px auto" }}>
      <input name="user_name" type="text" placeholder="Name" required style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }} />
      <input name="user_email" type="email" placeholder="Email" required style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }} />
      <input name="company" type="text" placeholder="Company (optional)" style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }} />
      <textarea name="message" placeholder="Message" required rows={4} style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }} />
      <button type="submit" style={{ padding: "10px 12px", borderRadius: 8, border: "none", background: "#111", color: "#fff", cursor: "pointer" }}>Send</button>
    </form>
  );
}
