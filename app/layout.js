import "./globals.css";

export const metadata = {
  title: "vAlpha | Maintenance",
  description: "vAlpha is currently under maintenance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
