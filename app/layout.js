import "./globals.css";
import { Modak } from "next/font/google";

const modak = Modak({
  family: "Modak",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Andy's Portfolio",
  description:
    "Welcome to Andy's Portfolio, where I showcase my journey and skills as I pursue a career in software engineering. Explore my projects, experiences, and expertise in front-end development, responsive design, and software engineering. This portfolio reflects my dedication to learning, innovation, and achieving excellence in the tech industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
