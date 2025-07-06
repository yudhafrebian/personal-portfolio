import ProjectCard from "@/components/card/project-card";

const ProjectSection = () => {
    return (
        <section className="px-6 py-16 md:px-36 md:py-20 dark:border-b bg-[#F9FAFB] dark:bg-background">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1F2937] dark:text-white mb-5">Featured Projects</h2>
                <p className="text-muted-foreground">A selection of my recent work showcasing different technologies and design approaches.</p>
            </div>
            <ProjectCard />
        </section>
    )
};

export default ProjectSection;