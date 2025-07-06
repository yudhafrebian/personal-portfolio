import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-background dark:border-b px-36 py-20 flex justify-center items-center" id="about">
      <div>
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-white mb-7">
          About Me
        </h2>
        <div className="text-muted-foreground w-3/4 mb-8">
          <p className="mb-6">
            I’m a Junior Fullstack Developer, passionate about building
            responsive and modern web applications. My curiosity about how
            technology improves daily life drives me to keep learning and
            growing through real-world projects and industry trends.
          </p>
          <p>
            I value delivering high-quality work on time, with clean and
            maintainable code. I prioritize clear communication, believing that
            collaboration is key to successful projects.
          </p>
        </div>
        <div className="flex gap-10">
            <div>
                <p className="font-semibold text-[#1F2937] dark:text-white mb-3">Frontend</p>
                <ul className="text-muted-foreground ">
                    <li>HTML & CSS</li>
                    <li>JavaScript & TypeScript</li>
                    <li>React.js & Next.js</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[#1F2937] dark:text-white mb-3">Backend</p>
                <ul className="text-muted-foreground ">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Prisma ORM</li>
                    <li>Postgre SQL</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[#1F2937] dark:text-white mb-3">Tools</p>
                <ul className="text-muted-foreground ">
                    <li>Git & GitHub</li>
                    <li>Figma</li>
                    <li>VS Code</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="relative w-[500px] h-80 mr-20 rounded-2xl shadow-2xl">
        <Image src={"/profile-pic.jpeg"} alt="profile" fill className="rounded-2xl"/>
      </div>
    </section>
  );
};

export default AboutSection;
