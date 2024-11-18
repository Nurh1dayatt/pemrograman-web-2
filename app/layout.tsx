import Link from "next/link";
import "./globals.css";

// import fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"
export const metadata = {
  title: "Nurhidayat",
  description: "Made with love by Choky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* area header */}
        <header>
          {/* area image/banner */}
          <img src="../images/logo.png" alt="Logo UTI" />

          {/* area menu */}
          <nav className="text-center my-5 flex justify-center">
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-black 
            rounded-full px-5 py-2.5 mr-3 w-52"
            >
              Data Mahasiswa
            </Link>
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-black 
            rounded-full px-5 py-2.5 ml-3 w-52"
            >
              Log Data Mahasiswa
            </Link>
          </nav>
        </header>

        {/* area content */}
        <section className="m-5">
        {children}
        </section> 

        {/* area footer */}
        <footer className="flex justify-center  bg-color1 text-color2 py-15X">
          Copyright &copy; 2024 - Nurhidayat
        </footer>
      </body>
    </html>
  );
}
