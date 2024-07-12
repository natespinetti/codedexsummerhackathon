interface Props {
  seoTitle: string;
  seoDescription: string;
}

export default function Metadata({
  seoTitle,
  seoDescription = "Your Ultimate Board Game Cafe",
}: Props) {
  return (
    <>
      <title>{seoTitle} | Sip & Play</title>
      <meta name="description" content={seoDescription} />
    </>
  );
}
