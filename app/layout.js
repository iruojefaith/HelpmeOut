import "./globals.css";

export const metadata = {
  title: "HelpmeOut",
  description: "chrome screen record extension",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
