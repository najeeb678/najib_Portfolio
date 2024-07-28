import Hero from "@/components/Hero";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <>
    <main className=" relative flex justify-center items-center  flex-screen flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <Hero />
       
      </div>
    </main>
     <ThemeSwitch /></>
  );
}
