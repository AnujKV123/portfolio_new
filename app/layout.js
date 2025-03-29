import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Anuj Verma - Software Engineer",
  description:
    "This is the portfolio of Anuj Verma.I'm a professional software developer with a proven track record of designing and building high-quality web applications. I thrive on quickly learning and proactively exploring new technologies to solve real-world challenges. I prioritize industry best practices, ensuring that my applications are secure, efficient, and reliable. Collaboration is key for me, I enjoy working closely with cross-functional teams to achieve business goals and create impactful solutions. My expertise lies primarily in the JavaScript tech stack, and I'm available for the opportunities that align with my skills and interests.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
