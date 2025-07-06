import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, Code, Figma, Gauge } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">Frontend Development <Code /></CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-muted-foreground">
              Build responsive, accessible, and elegant UI using React, Next.js,
              and Tailwind CSS.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">Performance Optimization <Gauge /></CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-muted-foreground">
              Improve page speed, reduce layout shift, and optimize user
              experience.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">Integration & API <Blocks /></CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-muted-foreground">
              Connect your frontend with REST or GraphQL APIs, CMS, or
              third-party services.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">UI/UX Implementation <Figma /></CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-muted-foreground">
              Convert Figma or design concepts into pixel-perfect, functional
              interfaces.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;