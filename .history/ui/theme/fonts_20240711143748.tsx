import { Roboto, Lexend } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal"],
});

export const fonts = {
  heading: lexend.style.fontFamily,
  body: roboto.style.fontFamily,
};
