import "./globals.css";

export const metadata = {
  title: "Fatima Amreen Bridal — Bridal Couture, Karachi",
  description:
    "Fatima Amreen Bridal — handcrafted bridal wear, lehengas, gowns and sherwanis. V3G6+2J PECHS, Karachi, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
