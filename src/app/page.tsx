import Navbar from "@/components/ui/Navbar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Home() {
  return (
    <div className="border w-[90%] h-screen mx-auto my-2 flex">
     
      <AppSidebar />

     
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Hello World</h1>
        </div>
      </div>
    </div>
  );
}
