import Hero from "@/components/Hero";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <>
      <main className=" relative flex justify-center items-center  flex-screen flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full">
        <div className=" absolute top-0 left-0  max-w-7xl w-full z-20 relative">
          <ThemeSwitch />
        </div>
          <Hero />
        </div>
      
      </main>
    </>
  );
}
