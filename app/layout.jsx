import localFont from "next/font/local";
import "./globals.css";

export const poppins = localFont({
  src: [
    {
      path: "/fonts/Poppins-Regular.ttf",
      weight: "400", // Regular weight
      style: "normal",
    },
    {
      path: "/fonts/Poppins-Bold.ttf",
      weight: "700", // Bold weight
      style: "normal",
    },
  ],
  variable: "--font-poppins", // Custom variable for CSS
});

export const questrial = localFont({
  src: [
    {
      path: "/fonts/Questrial-Regular.ttf",
      weight: "400", // Regular weight
      style: "normal",
    },
  ],
  variable: "--font-questrial", // Custom variable for CSS
});

export const metadata = {
  title: "Microthinks.com | Grow your Hotels with our Marketing Services",
  description:
    "At Microthinks.com, we elevate your hotel’s online presence with innovative, customized solutions to enrich guests' experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${questrial.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
