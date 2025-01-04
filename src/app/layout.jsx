
import "./globals.css";

export const metadata = {
  title: "Qizhy",
  description: "",
  icons: {
    icon: '/logo.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-openSans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
