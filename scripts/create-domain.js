import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.domains.create({
    name: "jonathanmendoza.dev",
    region: "us-east-1",
  });
  if (error) {
    console.error("❌", error);
    process.exit(1);
  }
  console.log("✅ Domain created:", data);
})();
