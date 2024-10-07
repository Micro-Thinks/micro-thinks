// import localFont from "next/font/local";
// import "./globals.css";

// const poppins = localFont({
//   src: [
//     {
//       path: "/fonts/Poppins-Regular.ttf",
//       weight: "400", // Regular weight
//       style: "normal",
//     },
//     {
//       path: "/fonts/Poppins-Bold.ttf",
//       weight: "700", // Bold weight
//       style: "normal",
//     },
//   ],
//   variable: "--font-poppins", // Custom variable for CSS
// });

// const questrial = localFont({
//   src: [
//     {
//       path: "/fonts/Questrial-Regular.ttf",
//       weight: "400", // Regular weight
//       style: "normal",
//     },
//   ],
//   variable: "--font-questrial", // Custom variable for CSS
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={${poppins.variable} ${questrial.variable} antialiased}>
//         {children}
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
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

const questrial = localFont({
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
  title: "Create Next App",
  description: "Generated by create next app",
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
