import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-ubuntu",
});
