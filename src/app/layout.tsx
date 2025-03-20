import type { Metadata } from "next";
import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Frontend Developer",
  description: "Frontend Developer portfolio",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
