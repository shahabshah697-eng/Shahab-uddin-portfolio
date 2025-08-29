import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Laptop,
  Tablet,
  Smartphone,
  Eye,
  Move,
  Plus,
  Trash2,
  Save,
} from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import StyleCustomizer from "./StyleCustomizer";

interface PortfolioEditorProps {
  onSave?: () => void;
  onPreview?: () => void;
  initialData?: any;
}

const PortfolioEditor = ({
  onSave = () => {},
  onPreview = () => {},
  initialData = {},
}: PortfolioEditorProps) => {
  const [activeTab, setActiveTab] = useState("hero");
  const [previewDevice, setPreviewDevice] = useState("desktop");
  const [isDragging, setIsDragging] = useState(false);
  const [showStylePanel, setShowStylePanel] = useState(false);

  // Default portfolio data
  const [portfolioData, setPortfolioData] = useState({
    hero: {
      title: "Hello, I'm Shahab Uddin",
      subtitle:
        "Graphic Designer | Creative Visual Storyteller | Branding & Digital Design",
      description:
        "I specialize in Graphic Design, Logo Design, Branding & Identity, Video Editing, Image Editing, Thumbnails, and Digital Design.",
      profileImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
      backgroundColor: "#FFF6D6",
      textColor: "#1E1E1E",
    },
    about: {
      title: "About Me",
      description:
        "I'm Shahab Uddin, a passionate graphic designer with 3 years of experience crafting impactful visuals. I spent 2 years at Design Dreamscape, building a strong foundation in branding, logo design, and digital visuals.\n\nOver time, I've expanded into video editing, thumbnails, and visual storytelling. I love turning ideas into identities, campaigns, and experiences that connect.",
      skills: [
        "Canva",
        "Photoshop",
        "Illustrator",
        "CapCut",
        "After Effects",
        "Premiere Pro",
      ],
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
    },
    projects: {
      title: "My Portfolio",
      categories: [
        {
          name: "Logo Design & Branding",
          description:
            "Logos and branding projects that represent businesses with clarity and creativity.",
        },
        {
          name: "Video Editing & Thumbnails",
          description:
            "Dynamic edits and engaging thumbnails designed to grab attention.",
        },
        {
          name: "Image Editing & Retouching",
          description:
            "Transforming raw photos into polished visuals with clean retouching and creative edits.",
        },
        {
          name: "Digital Design Projects",
          description:
            "Posters, banners, and creative digital visuals made to inspire and engage.",
        },
      ],
      items: [
        {
          id: "1",
          title: "Redkoar Branding",
          category: "Logo Design & Branding",
          image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
          description:
            "Full branding and identity for Redkoar e-commerce platform",
        },
        {
          id: "2",
          title: "Be Masculine Channel",
          category: "Video Editing & Thumbnails",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
          description: "YouTube channel branding and thumbnails",
        },
        {
          id: "3",
          title: "Product Retouching",
          category: "Image Editing & Retouching",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
          description: "Professional product photo retouching",
        },
        {
          id: "4",
          title: "Event Poster Design",
          category: "Digital Design Projects",
          image:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
          description: "Creative poster design for local events",
        },
      ],
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Available for freelance collaborations and design projects worldwide. Reach out to bring your vision to life.",
      email: "shahabshah697@gmail.com",
      phone: "+92 328 2360529",
      location: "Karachi, Pakistan (Remote Available)",
      social: {
        linkedin: "linkedin.com/in/shahab-uddin-4967b5380",
        instagram: "instagram.com/shahab_baloch97",
      },
    },
    style: {
      primaryColor: "#FFC300",
      textColor: "#1E1E1E",
      backgroundColor: "#FFFFFF",
      accentColor: "#3B82F6",
      fontFamily: "Inter",
      borderRadius: 8,
      animationSpeed: 0.5,
      enableParallax: true,
    },
  });

  const handleDataChange = (section: string, field: string, value: any) => {
    setPortfolioData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleStyleChange = (field: string, value: any) => {
    setPortfolioData((prev) => ({
      ...prev,
      style: {
        ...prev.style,
        [field]: value,
      },
    }));
  };

  const getPreviewClass = () => {
    switch (previewDevice) {
      case "tablet":
        return "w-[768px] h-[1024px] scale-[0.6] origin-top";
      case "mobile":
        return "w-[375px] h-[667px] scale-[0.7] origin-top";
      default:
        return "w-full h-full";
    }
  };

  return (
    <div className="flex h-full bg-background">
      {/* Editor Panel */}
      <div className="w-1/3 border-r border-border h-full flex flex-col">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-bold">Portfolio Editor</h2>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowStylePanel(!showStylePanel)}
            >
              {showStylePanel ? "Hide Styles" : "Edit Styles"}
            </Button>
            <Button size="sm" variant="outline" onClick={onPreview}>
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button size="sm" onClick={onSave}>
              <Save className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <div className="p-4 border-b border-border">
            <TabsList className="w-full">
              <TabsTrigger value="hero" className="flex-1">
                Hero
              </TabsTrigger>
              <TabsTrigger value="about" className="flex-1">
                About
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex-1">
                Projects
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex-1">
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4">
              <TabsContent value="hero" className="mt-0">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hero-title">Title</Label>
                      <Input
                        id="hero-title"
                        value={portfolioData.hero.title}
                        onChange={(e) =>
                          handleDataChange("hero", "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-subtitle">Subtitle</Label>
                      <Input
                        id="hero-subtitle"
                        value={portfolioData.hero.subtitle}
                        onChange={(e) =>
                          handleDataChange("hero", "subtitle", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-description">Description</Label>
                      <Textarea
                        id="hero-description"
                        value={portfolioData.hero.description}
                        onChange={(e) =>
                          handleDataChange(
                            "hero",
                            "description",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-image">Profile Image URL</Label>
                      <div className="flex gap-2">
                        <Input
                          id="hero-image"
                          value={portfolioData.hero.profileImage}
                          onChange={(e) =>
                            handleDataChange(
                              "hero",
                              "profileImage",
                              e.target.value,
                            )
                          }
                        />
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      {portfolioData.hero.profileImage && (
                        <div className="mt-2 relative w-24 h-24 rounded-full overflow-hidden border border-border">
                          <img
                            src={portfolioData.hero.profileImage}
                            alt="Profile preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about" className="mt-0">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="about-title">Title</Label>
                      <Input
                        id="about-title"
                        value={portfolioData.about.title}
                        onChange={(e) =>
                          handleDataChange("about", "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-description">Description</Label>
                      <Textarea
                        id="about-description"
                        rows={6}
                        value={portfolioData.about.description}
                        onChange={(e) =>
                          handleDataChange(
                            "about",
                            "description",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        {portfolioData.about.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-muted rounded-md px-3 py-1"
                          >
                            <span>{skill}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 ml-1"
                              onClick={() => {
                                const newSkills = [
                                  ...portfolioData.about.skills,
                                ];
                                newSkills.splice(index, 1);
                                handleDataChange("about", "skills", newSkills);
                              }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                        <div className="flex gap-2">
                          <Input
                            id="new-skill"
                            placeholder="Add skill"
                            className="w-32"
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && e.currentTarget.value) {
                                handleDataChange("about", "skills", [
                                  ...portfolioData.about.skills,
                                  e.currentTarget.value,
                                ]);
                                e.currentTarget.value = "";
                              }
                            }}
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              const input = document.getElementById(
                                "new-skill",
                              ) as HTMLInputElement;
                              if (input.value) {
                                handleDataChange("about", "skills", [
                                  ...portfolioData.about.skills,
                                  input.value,
                                ]);
                                input.value = "";
                              }
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-image">Image URL</Label>
                      <div className="flex gap-2">
                        <Input
                          id="about-image"
                          value={portfolioData.about.image}
                          onChange={(e) =>
                            handleDataChange("about", "image", e.target.value)
                          }
                        />
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      {portfolioData.about.image && (
                        <div className="mt-2 relative w-32 h-32 rounded-md overflow-hidden border border-border">
                          <img
                            src={portfolioData.about.image}
                            alt="About section preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="mt-0">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projects-title">Title</Label>
                      <Input
                        id="projects-title"
                        value={portfolioData.projects.title}
                        onChange={(e) =>
                          handleDataChange("projects", "title", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Categories</Label>
                      <div className="space-y-3">
                        {portfolioData.projects.categories.map(
                          (category, index) => (
                            <div
                              key={index}
                              className="border border-border rounded-md p-3 space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <Input
                                  value={category.name}
                                  onChange={(e) => {
                                    const newCategories = [
                                      ...portfolioData.projects.categories,
                                    ];
                                    newCategories[index].name = e.target.value;
                                    handleDataChange(
                                      "projects",
                                      "categories",
                                      newCategories,
                                    );
                                  }}
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="ml-2"
                                  onClick={() => {
                                    const newCategories = [
                                      ...portfolioData.projects.categories,
                                    ];
                                    newCategories.splice(index, 1);
                                    handleDataChange(
                                      "projects",
                                      "categories",
                                      newCategories,
                                    );
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <Textarea
                                placeholder="Category description"
                                value={category.description}
                                onChange={(e) => {
                                  const newCategories = [
                                    ...portfolioData.projects.categories,
                                  ];
                                  newCategories[index].description =
                                    e.target.value;
                                  handleDataChange(
                                    "projects",
                                    "categories",
                                    newCategories,
                                  );
                                }}
                              />
                            </div>
                          ),
                        )}
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            handleDataChange("projects", "categories", [
                              ...portfolioData.projects.categories,
                              {
                                name: "New Category",
                                description: "Category description",
                              },
                            ]);
                          }}
                        >
                          <Plus className="h-4 w-4 mr-2" /> Add Category
                        </Button>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <Label>Projects</Label>
                      <ProjectGallery
                        projects={portfolioData.projects.items}
                        categories={portfolioData.projects.categories.map(
                          (c) => c.name,
                        )}
                        onProjectsChange={(newProjects) =>
                          handleDataChange("projects", "items", newProjects)
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="mt-0">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-title">Title</Label>
                      <Input
                        id="contact-title"
                        value={portfolioData.contact.title}
                        onChange={(e) =>
                          handleDataChange("contact", "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-description">Description</Label>
                      <Textarea
                        id="contact-description"
                        value={portfolioData.contact.description}
                        onChange={(e) =>
                          handleDataChange(
                            "contact",
                            "description",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          value={portfolioData.contact.email}
                          onChange={(e) =>
                            handleDataChange("contact", "email", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone</Label>
                        <Input
                          id="contact-phone"
                          value={portfolioData.contact.phone}
                          onChange={(e) =>
                            handleDataChange("contact", "phone", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-location">Location</Label>
                      <Input
                        id="contact-location"
                        value={portfolioData.contact.location}
                        onChange={(e) =>
                          handleDataChange(
                            "contact",
                            "location",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Social Media</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="social-linkedin">LinkedIn</Label>
                          <Input
                            id="social-linkedin"
                            value={portfolioData.contact.social.linkedin}
                            onChange={(e) => {
                              setPortfolioData((prev) => ({
                                ...prev,
                                contact: {
                                  ...prev.contact,
                                  social: {
                                    ...prev.contact.social,
                                    linkedin: e.target.value,
                                  },
                                },
                              }));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="social-instagram">Instagram</Label>
                          <Input
                            id="social-instagram"
                            value={portfolioData.contact.social.instagram}
                            onChange={(e) => {
                              setPortfolioData((prev) => ({
                                ...prev,
                                contact: {
                                  ...prev.contact,
                                  social: {
                                    ...prev.contact.social,
                                    instagram: e.target.value,
                                  },
                                },
                              }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </div>

      {/* Preview Panel */}
      <div className="flex-1 flex flex-col h-full">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-bold">Preview</h2>
          <div className="flex gap-2">
            <Button
              variant={previewDevice === "desktop" ? "default" : "outline"}
              size="icon"
              onClick={() => setPreviewDevice("desktop")}
            >
              <Laptop className="h-4 w-4" />
            </Button>
            <Button
              variant={previewDevice === "tablet" ? "default" : "outline"}
              size="icon"
              onClick={() => setPreviewDevice("tablet")}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={previewDevice === "mobile" ? "default" : "outline"}
              size="icon"
              onClick={() => setPreviewDevice("mobile")}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 flex justify-center">
          <div
            className={`bg-white border border-border rounded-md overflow-hidden ${getPreviewClass()}`}
          >
            <div className="relative w-full h-full overflow-auto">
              {/* Hero Section Preview */}
              {activeTab === "hero" && (
                <div className="flex flex-col md:flex-row h-screen">
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h1
                      className="text-3xl md:text-4xl font-bold mb-4"
                      style={{ color: portfolioData.style.textColor }}
                    >
                      {portfolioData.hero.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-4 text-gray-700">
                      {portfolioData.hero.subtitle}
                    </h2>
                    <p className="mb-6 text-gray-600">
                      {portfolioData.hero.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        style={{
                          backgroundColor: portfolioData.style.primaryColor,
                          color: "#000",
                        }}
                      >
                        View My Work
                      </Button>
                      <Button variant="outline">Contact Me</Button>
                    </div>
                  </div>
                  <div
                    className="w-full md:w-1/2 flex items-center justify-center p-8"
                    style={{
                      backgroundColor: portfolioData.style.primaryColor + "33",
                    }} // Adding transparency
                  >
                    <motion.div
                      className="rounded-full overflow-hidden border-4 border-white shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <img
                        src={portfolioData.hero.profileImage}
                        alt="Profile"
                        className="w-64 h-64 object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* About Section Preview */}
              {activeTab === "about" && (
                <div className="min-h-screen p-8">
                  <h2
                    className="text-3xl font-bold mb-8 inline-block"
                    style={{
                      borderBottom: `3px solid ${portfolioData.style.primaryColor}`,
                    }}
                  >
                    {portfolioData.about.title}
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                      <div className="whitespace-pre-line text-gray-700">
                        {portfolioData.about.description}
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {portfolioData.about.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor:
                                  portfolioData.style.primaryColor,
                                color: "#000",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/3">
                      <motion.div
                        className="rounded-md overflow-hidden shadow-lg"
                        animate={{
                          y: portfolioData.style.enableParallax
                            ? [0, -10, 0]
                            : 0,
                        }}
                        transition={{ repeat: Infinity, duration: 5 }}
                      >
                        <img
                          src={portfolioData.about.image}
                          alt="About"
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Section Preview */}
              {activeTab === "projects" && (
                <div className="min-h-screen p-8">
                  <h2
                    className="text-3xl font-bold mb-8 inline-block"
                    style={{
                      borderBottom: `3px solid ${portfolioData.style.primaryColor}`,
                    }}
                  >
                    {portfolioData.projects.title}
                  </h2>

                  <div className="space-y-12">
                    {portfolioData.projects.categories.map(
                      (category, index) => (
                        <div key={index} className="space-y-4">
                          <h3
                            className="text-2xl font-semibold"
                            style={{ color: portfolioData.style.primaryColor }}
                          >
                            {category.name}
                          </h3>
                          <p className="text-gray-600">
                            {category.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioData.projects.items
                              .filter((item) => item.category === category.name)
                              .map((project, idx) => (
                                <div
                                  key={idx}
                                  className="border border-gray-200 rounded-md overflow-hidden shadow-md"
                                  style={{
                                    borderRadius: `${portfolioData.style.borderRadius}px`,
                                  }}
                                >
                                  <div className="h-48 overflow-hidden">
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="p-4">
                                    <h4 className="font-semibold mb-2">
                                      {project.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {project.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Contact Section Preview */}
              {activeTab === "contact" && (
                <div
                  className="min-h-screen p-8 text-white"
                  style={{ backgroundColor: "#1E1E1E" }}
                >
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                      {portfolioData.contact.title}
                    </h2>
                    <p className="mb-8">{portfolioData.contact.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Contact Information
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <span className="opacity-70">Email:</span>{" "}
                            {portfolioData.contact.email}
                          </p>
                          <p>
                            <span className="opacity-70">Phone:</span>{" "}
                            {portfolioData.contact.phone}
                          </p>
                          <p>
                            <span className="opacity-70">Location:</span>{" "}
                            {portfolioData.contact.location}
                          </p>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-lg font-medium mb-2">Connect</h4>
                          <div className="flex gap-4">
                            <a
                              href={`https://${portfolioData.contact.social.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="opacity-70 hover:opacity-100"
                            >
                              LinkedIn
                            </a>
                            <a
                              href={`https://${portfolioData.contact.social.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="opacity-70 hover:opacity-100"
                            >
                              Instagram
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Send a Message
                        </h3>
                        <div className="space-y-4">
                          <Input
                            placeholder="Name"
                            className="bg-gray-800 border-gray-700"
                          />
                          <Input
                            placeholder="Email"
                            className="bg-gray-800 border-gray-700"
                          />
                          <Textarea
                            placeholder="Your message"
                            rows={4}
                            className="bg-gray-800 border-gray-700"
                          />
                          <Button
                            style={{
                              backgroundColor: portfolioData.style.primaryColor,
                              color: "#000",
                            }}
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-800">
                      <p style={{ color: portfolioData.style.primaryColor }}>
                        Design that speaks, visuals that connect.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Style Customizer Panel */}
      {showStylePanel && (
        <div className="w-1/4 border-l border-border h-full">
          <StyleCustomizer
            style={portfolioData.style}
            onStyleChange={handleStyleChange}
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioEditor;
