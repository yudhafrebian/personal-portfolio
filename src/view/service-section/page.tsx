import ServiceCard from "../../components/card/services-card"

const MyServiceSection = () => {
    return (
        <section className="px-6 py-16 md:px-36 md:py-20 dark:border-b" id="services">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#1F2937] dark:text-white mb-5">
                    What I Can Do for You
                </h2>
                <p className="text-muted-foreground">I offer solutions to help you build modern and scalable web experiences.</p>
            </div>
            <ServiceCard />
        </section>
    )
}

export default MyServiceSection