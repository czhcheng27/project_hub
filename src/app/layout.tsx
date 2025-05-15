import React from "react";

export const metadata = {
  title: "Project Hub",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
