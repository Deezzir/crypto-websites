import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <head>
      <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ALON THE ALIEN" />
        <meta property="og:url" content="http://alonthealien.com/" />
        <meta property="og:title" content="Solana Token" />
        <meta
          property="og:description"
          content="Inspired by an IKEA toy, $ALON was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Alon, we will launch a series and NFTs about it. 
          Made wif love by Letto Dev Team"
        />
        <meta
          property="og:image"
          content="http://alonthealien.com/header.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ALONDEALIEN" />
        <meta name="twitter:url" content="http://alonthealien.com/" />
        <meta name="twitter:title" content="Solana Token" />
        <meta
          name="twitter:description"
          content="Inspired by an IKEA toy, $ALON was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Alon, we will launch a series and NFTs about it. 
          Made wif love by Letto Dev Team"
        />
        <meta
          name="twitter:image"
          content="http://alonthealien.com/header.png"
        />
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        {children}
      </body>
    </html>
  );
}
