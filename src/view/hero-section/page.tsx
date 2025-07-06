import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="text-center py-48 dark:border-b" id="home">
      <h1 className="text-6xl text-[#1F2937] dark:text-white mb-7 font-bold">
        Ananda Yudha Frebiansyah
      </h1>
      <p className="text-muted-foreground text-2xl mb-5">FULLSTACK DEVELOPER</p>
      <p className="text-muted-foreground text-lg w-3/4 mx-auto mb-8">
        a Junior Fullstack Developer with a passion for building scalable and
        efficient web applications. I specialize in JavaScript, Next.js, and
        Node.js, creating seamless user experiences from front-end to back-end.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href={"/CV - Ananda Yudha.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size={"lg"}>View CV</Button>
        </Link>
        <Button variant={"outline"} size={"lg"}>
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
