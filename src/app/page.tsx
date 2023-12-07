import Footer from "@/components/Footer";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="flex flex-center justify-center flex-col min-h-[50vh] overflow-x-hidden max-w-screen w-[100%] overflow-hidden">
      <div className="bg-cp-color-3 w-screen min-h-screen h-max z-[-10] top-0 fixed"></div>
      <Landing/>
      <Footer />
    </div>
  );
}
