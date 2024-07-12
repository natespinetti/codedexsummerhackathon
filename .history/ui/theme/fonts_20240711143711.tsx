import { Roboto, Roboto_Slab, Shadows_Into_Light_Two } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal"],
});

export const fonts = {
  heading: robotoSlab.style.fontFamily,
  body: roboto.style.fontFamily,
  accent: robotoSlab.style.fontFamily,
};
