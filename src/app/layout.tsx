import type { Metadata } from "next";
import  "../styles/global.scss";

export const metadata: Metadata = {
  title: "Repurev meter",
  description: "Repurev meter is a tool to calculate your reputation in market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
