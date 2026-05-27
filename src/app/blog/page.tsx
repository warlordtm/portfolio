import { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog - Godwin Bamisaye",
  description:
    "Developer insights, project breakdowns and engineering articles by Godwin Bamisaye.",
};

export default function Page() {
  return <BlogPage />;
}
