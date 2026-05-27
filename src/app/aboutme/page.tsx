import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About - Godwin Bamisaye",
  description:
    "Learn more about Godwin Bamisaye, a full-stack developer - building modern, secure and scalable web applications.",
};

export default function Page() {
  return <AboutPage />;
}
