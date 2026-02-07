import "../styles/globals.css";

export const metadata = {
  title: "Seabrook Realty Pattaya",
  description: "Client-first real estate services in Pattaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
