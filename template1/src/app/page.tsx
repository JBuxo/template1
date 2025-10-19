export default function Home() {
  return (
    <div style={{ backgroundColor: process.env.NEXT_PUBLIC_BRAND_COLOR }}>
      {" "}
      <h1>{process.env.NEXT_PUBLIC_BRAND_NAME}</h1>{" "}
      <p>Powered by {process.env.NEXT_PUBLIC_BRAND_TAGLINE}</p>{" "}
    </div>
  );
}
