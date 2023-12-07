import { notFound } from "next/navigation";

export const metadata = {
  title: "Page not found",
};
function page() {
  return notFound();
}

export default page;
