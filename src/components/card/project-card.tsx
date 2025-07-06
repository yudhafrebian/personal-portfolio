"use client";
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
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = () => {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 3000 })]}
      id="portfolio"
    >
      <CarouselContent>
        {projects.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/3">
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
                  <h3 className="text-[#1F2937] dark:text-white font-semibold mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  {item.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link href={item.link} target="_blank">
                  <ExternalLink width={16} />
                  </Link>
                  <Link href={item.github} target="_blank">
                  <Github width={16} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ProjectCard;
