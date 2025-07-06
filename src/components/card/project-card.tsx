import { projects } from "@/utils/dummy-data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <Carousel>
      <CarouselContent>
        {projects.map((item) => (
          <CarouselItem key={item.id} className="basis-1/3">
            <Card className="pt-0">
              <CardHeader className="p-0">
                <div className="relative w-full h-[192px]">
                  <Image
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="text-[#1F2937] dark:text-white font-semibold mb-2.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCard;
