// Layout.tsx
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;
