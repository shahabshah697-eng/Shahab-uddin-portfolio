import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlusCircle, Grid, Columns, LayoutGrid, Maximize2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  client?: string;
  date?: string;
}

interface ProjectGalleryProps {
  projects?: Project[];
  onAddProject?: () => void;
  onEditProject?: (project: Project) => void;
  onArrangeProjects?: (projects: Project[]) => void;
  layout?: "grid" | "masonry" | "carousel";
  onLayoutChange?: (layout: "grid" | "masonry" | "carousel") => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects = defaultProjects,
  onAddProject = () => {},
  onEditProject = () => {},
  onArrangeProjects = () => {},
  layout = "grid",
  onLayoutChange = () => {},
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#1E1E1E]">Project Gallery</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md p-1 bg-muted">
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 ${layout === "grid" ? "bg-background" : ""}`}
              onClick={() => onLayoutChange("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 ${layout === "masonry" ? "bg-background" : ""}`}
              onClick={() => onLayoutChange("masonry")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 ${layout === "carousel" ? "bg-background" : ""}`}
              onClick={() => onLayoutChange("carousel")}
            >
              <Columns className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={onAddProject}
            className="bg-[#FFC300] hover:bg-[#1E1E1E] hover:text-[#FFC300] text-[#1E1E1E]"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Project
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className={`grid gap-6 ${getLayoutClass(layout)}`}>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/80 hover:bg-white rounded-full h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditProject(project);
                  }}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-[#FFF6D6] text-[#1E1E1E] border-[#FFE680]"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="bg-[#F9F9F9]">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div>
                <h4 className="font-medium mb-1">Description</h4>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>

                {selectedProject.client && (
                  <div className="mb-2">
                    <span className="font-medium">Client:</span>{" "}
                    {selectedProject.client}
                  </div>
                )}

                {selectedProject.date && (
                  <div className="mb-4">
                    <span className="font-medium">Date:</span>{" "}
                    {selectedProject.date}
                  </div>
                )}

                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-[#FFF6D6] text-[#1E1E1E] border-[#FFE680]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => onEditProject(selectedProject)}
                    className="bg-[#FFC300] hover:bg-[#1E1E1E] hover:text-[#FFC300] text-[#1E1E1E]"
                  >
                    Edit Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const getLayoutClass = (layout: string) => {
  switch (layout) {
    case "masonry":
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max";
    case "carousel":
      return "grid-cols-1";
    case "grid":
    default:
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Redkoar Brand Identity",
    description:
      "Complete branding package for Redkoar e-commerce platform operating in Pakistan, UAE, and Europe.",
    category: "branding",
    tags: ["Logo Design", "Brand Identity", "E-commerce"],
    imageUrl:
      "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?w=800&q=80",
    client: "Redkoar",
    date: "March 2023",
  },
  {
    id: "2",
    title: "Be Masculine YouTube Channel",
    description:
      "Full brand identity and video thumbnails for a motivation and discipline focused YouTube channel.",
    category: "video",
    tags: ["YouTube", "Thumbnails", "Video Editing"],
    imageUrl:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    client: "Be Masculine",
    date: "January 2023",
  },
  {
    id: "3",
    title: "Product Photography Retouching",
    description:
      "Professional product photo retouching for an online fashion retailer.",
    category: "editing",
    tags: ["Retouching", "Product Photography", "E-commerce"],
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    client: "Fashion Hub",
    date: "April 2023",
  },
  {
    id: "4",
    title: "Summer Festival Poster",
    description:
      "Vibrant poster design for an annual summer music festival featuring local artists.",
    category: "digital",
    tags: ["Poster Design", "Event", "Digital Art"],
    imageUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    client: "City Events",
    date: "June 2023",
  },
  {
    id: "5",
    title: "Corporate Identity Package",
    description:
      "Complete corporate identity design including logo, business cards, letterheads and digital assets.",
    category: "branding",
    tags: ["Corporate", "Identity", "Stationery"],
    imageUrl:
      "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=800&q=80",
    client: "Tech Solutions Inc.",
    date: "February 2023",
  },
  {
    id: "6",
    title: "Social Media Campaign",
    description:
      "Series of coordinated social media graphics for product launch campaign.",
    category: "digital",
    tags: ["Social Media", "Campaign", "Digital Marketing"],
    imageUrl:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    client: "Wellness Products",
    date: "May 2023",
  },
];

export default ProjectGallery;
