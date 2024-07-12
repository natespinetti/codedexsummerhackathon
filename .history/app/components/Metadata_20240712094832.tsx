import { Metadata } from "next";

interface Props {
  seoTitle: string;
  seoDescription?: string;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Sip & Play",
    default: "Sip & Play",
  },
  description: "Your Ultimate Board Game Cafe",
  metadataBase: new URL("http://localhost:3000/"),
};

// export default function Metadataa({
//   seoTitle,
//   seoDescription = "Your Ultimate Board Game Cafe",
// }: Props) {
//   return (
//     <>
//       <title>{seoTitle} | Sip & Play</title>
//       <meta name="description" content={seoDescription} />
//     </>
//   );
// }
