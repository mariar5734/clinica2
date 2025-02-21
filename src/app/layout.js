import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "Clínica IF",
  description: "Clínica",
  charset: 'UTF-8',
  author: 'Maria Ritha',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main" >
          {children}
        </main>
        {/* <Footer /> */}
      </body>

    </html>
  );
}