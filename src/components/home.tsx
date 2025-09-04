import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";

const Home = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setSubmitted(true);
      form.reset();
    }
  };

  const logoTitles = [
    "Topryz Project Brand Identity",
    "Vento Project",
    "Redkoar Project Brand Identity",
    "Be Masculine Project Brand Identity",
    "Spotbook Project Logo",
    "Shay Haq Project Logo",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4">
              Hello, I&apos;m Shahab Uddin —{" "}
              <span className="text-[#FFC300]">Graphic Designer</span>
            </h1>
            <p className="text-lg text-[#2B2B2B] mb-6">
              Creative Visual Storyteller | Branding & Digital Design |
              Final-Year IT Student
            </p>
            <p className="text-base text-[#2B2B2B] mb-8">
              I specialize in Graphic Design, Logo Design, Branding & Identity,
              Video Editing, Image Editing, Thumbnails, and Digital Design.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Logo",
                "Branding",
                "Video",
                "Thumbnails",
                "Digital Design",
              ].map((service) => (
                <Badge
                  key={service}
                  className="bg-[#F9F9F9] text-[#2B2B2B] hover:bg-[#FFD43B]"
                >
                  {service}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#FFC300] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#FFC300]"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#FFC300] hover:text-[#1E1E1E] hover:border-[#FFC300]"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#FFF6D6] to-[#FFE680] flex items-center justify-center p-8">
          <motion.div
            className="relative rounded-full p-1 bg-white shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="rounded-full overflow-hidden h-80 w-80 md:h-96 md:w-96 bg-[#FFE680] shadow-inner">
              <img
                src="https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359843/Image_1_xgpnth.png"
                alt="Shahab Uddin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#FFC300] opacity-10 blur-md -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-8 bg-[#F9F9F9]" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC300]"></span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden max-h-[340px] sm:max-h-[380px] md:max-h-[420px]">
                <img
                  src="https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359835/Graphic_Designer_eyy6n4.png"
                  alt="Shahab Uddin workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg mb-6 text-[#2B2B2B]">
                I&apos;m Shahab Uddin, a passionate graphic designer with 3
                years of experience crafting impactful visuals. I spent 2 years
                at Design Dreamscape, building a strong foundation in branding,
                logo design, and digital visuals.
              </p>
              <p className="text-lg mb-8 text-[#2B2B2B]">
                Over time, I&apos;ve expanded into video editing, thumbnails,
                and visual storytelling. I love turning ideas into identities,
                campaigns, and experiences that connect.
              </p>

              <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Canva",
                  "Photoshop",
                  "Illustrator",
                  "CapCut",
                  "After Effects",
                  "Premiere Pro",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFC300] flex items-center justify-center text-[#1E1E1E]">
                      <span className="text-sm">{skill.charAt(0)}</span>
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8 bg-white" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block">
            My Portfolio
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC300]"></span>
          </h2>

          <Tabs defaultValue="logo" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger
                value="logo"
                className="data-[state=active]:bg-[#FFC300] data-[state=active]:text-[#1E1E1E] px-6"
              >
                Logo Design & Branding
              </TabsTrigger>
              <TabsTrigger
                value="video"
                className="data-[state=active]:bg-[#FFC300] data-[state=active]:text-[#1E1E1E] px-6"
              >
                Video & Thumbnails
              </TabsTrigger>
              <TabsTrigger
                value="image"
                className="data-[state=active]:bg-[#FFC300] data-[state=active]:text-[#1E1E1E] px-6"
              >
                Image Editing
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="data-[state=active]:bg-[#FFC300] data-[state=active]:text-[#1E1E1E] px-6"
              >
                Digital Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logo" className="mt-8">
              <div className="mb-6">
                <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                  Logos and branding projects that represent businesses with
                  clarity and creativity.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005085/Topryz_Brand_wlkiin.png",
                  "/brands/vento-brand.png",
                  "/brands/redkoar-brand.png",
                  "/brands/be-masculine-brand.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_1_oip5et.webp",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359810/Black_White_Yellow_Simple_Initial_Name_Logo_wk8ek6.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_3_psj0gm.jpg",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/Redkoar_logo_u3w0fi.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_2_blzfqc.jpg",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Logo_y6qvhr.jpg",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359820/Creative_Color_Brushstroke_Lettering_Logo_ieg1wm.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359854/Untitled_design_5_aekv1g.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360790/spotbook4_fswojl.jpg",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360120/Redkoar_1_usa6lw.png",
                ].map((src, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                      <img
                        src={src}
                        alt={`Logo design ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        {logoTitles[idx] ?? `Brand Identity ${idx + 1}`}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Logo design and brand identity for client project.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-8">
              <div className="mb-6">
                <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                  Dynamic edits and engaging thumbnails designed to grab
                  attention.
                </p>
              </div>

              {/* Featured: Long YouTube Videos (Be Masculine) - Primary view */}
              <h3 className="text-xl font-semibold mb-4 text-center">
                Featured: Be Masculine (Long Videos)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  "https://www.youtube.com/embed/zIacPXe-uss",
                  "https://www.youtube.com/embed/hFZZn3qh16Q",
                  "https://www.youtube.com/embed/5vIqh9UhfWw",
                ].map((embed, idx) => (
                  <Card
                    key={`yt-${idx}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                      <iframe
                        src={embed}
                        title={`Featured video ${idx + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Be Masculine — Long Video {idx + 1}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Primary featured video.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Short Videos edited for Clients */}
              <h3 className="text-xl font-semibold mb-4 text-center">
                Short Videos edited for Clients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  "https://res.cloudinary.com/dv5kwhrj9/video/upload/v1756575514/Captains_shield_bwqfee.mp4",
                  "https://res.cloudinary.com/dv5kwhrj9/video/upload/v1756575586/hulk_before_vs_After_ctxjgb.mp4",
                  "https://res.cloudinary.com/dv5kwhrj9/video/upload/v1756575670/Achieve_anything_kxprfv.mp4",
                ].map((src, idx) => (
                  <Card
                    key={`short-${idx}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden bg-[#F9F9F9]">
                      <video
                        src={src}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Short Video {idx + 1}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Edited for clients.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Existing thumbnails (kept below the new featured and short videos) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360123/video_2_gsdltn.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/video_1_ge3dqt.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360086/masculine_1_seawrk.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360123/video_3_tlj4vu.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360087/masculine_2_u3eaof.png",
                ].map((src, idx) => (
                  <Card
                    key={`thumb-${idx}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                      <img
                        src={src}
                        alt={`Video thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Video Project {idx + 1}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Thumbnail design and video editing for YouTube channel.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="image" className="mt-8">
              <div className="mb-6">
                <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                  Transforming raw photos into polished visuals with clean
                  retouching and creative edits.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359856/img_9_bqkyks.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359857/img_4_bwwojj.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_7_uykgow.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359850/img_3_fg425s.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359849/Image_2_g7jvit.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359851/img_5_b20n3g.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_6_bnrntq.png",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_8_u3cgop.png",
                ].map((src, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square w-full overflow-hidden bg-[#F9F9F9]">
                      <img
                        src={src}
                        alt={`Image editing ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Image Retouching {idx + 1}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Professional photo editing and retouching.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-8">
              <div className="mb-6">
                <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                  Posters, banners, and creative digital visuals made to inspire
                  and engage.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Illustration_cvizrl.webp",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Social_media_aybmqt.webp",
                  "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359820/Creative_Color_Brushstroke_Lettering_Logo_ieg1wm.png",
                ].map((src, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                      <img
                        src={src}
                        alt={`Digital design ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Digital Design {idx + 1}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]">
                        Creative digital artwork and design for marketing.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-8 bg-[#F9F9F9]" id="case-studies">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block">
            Case Studies
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC300]"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Case Study 1 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    "/brands/redkoar-brand.png",
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/Redkoar_logo_u3w0fi.png",
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360120/Redkoar_1_usa6lw.png",
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360121/Redkoar_2_w99rq0.png",
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005260/Redkoar_Brand_2_uh8k48.png",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
                  ].map((src, i) => (
                    <CarouselItem key={i}>
                      <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                        <img
                          src={src}
                          alt={`Redkoar image ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Redkoar</h3>
                <p className="text-[#2B2B2B] mb-4">
                  Developed full branding and identity for Redkoar, operating in
                  Pakistan, UAE, and Europe — created brand name, logo, product
                  pictures, and more.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Photoshop", "Illustrator", "Canva"].map((tool) => (
                    <Badge key={tool} className="bg-[#FFC300] text-[#1E1E1E]">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#1E1E1E] hover:bg-[#FFC300] hover:text-[#1E1E1E]">
                      View Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Redkoar — Brand Identity System</DialogTitle>
                      <DialogDescription>
                        A comprehensive identity for a multi-market brand, built
                        for clarity, scalability, and impact.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Overview</h4>
                        <p className="text-sm text-[#2B2B2B]">
                          Scope included brand naming, logo system, color
                          palette, typography, packaging mockups, social
                          templates, and product photography direction. The
                          visual language balances boldness with simplicity to
                          remain versatile across channels.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-1">Role</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Brand Designer, Art Direction
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Timeline</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            4 weeks — Discovery, Design, Delivery
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Deliverables</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Logo suite, guidelines, social kit, packaging
                            visuals
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Results</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Unified brand across 3 regions, improved recall and
                            consistency
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Highlights</h4>
                        <ul className="list-disc pl-5 text-sm text-[#2B2B2B] space-y-1">
                          <li>
                            Modular logo system for packaging and digital use
                          </li>
                          <li>
                            Contrast-forward yellow/charcoal palette for high
                            visibility
                          </li>
                          <li>
                            Template library for social and ads to accelerate
                            content
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Gallery</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "/brands/redkoar-brand.png",
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/Redkoar_logo_u3w0fi.png",
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360120/Redkoar_1_usa6lw.png",
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360121/Redkoar_2_w99rq0.png",
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005260/Redkoar_Brand_2_uh8k48.png",
                            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
                            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
                          ].map((src, i) => (
                            <div
                              key={i}
                              className="aspect-video overflow-hidden rounded-md bg-[#F9F9F9]"
                            >
                              <img
                                src={src}
                                alt={`Redkoar gallery ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    {
                      src: "/brands/be-masculine-brand.png",
                      aspect: "video",
                    },
                    {
                      src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360086/masculine_1_seawrk.png",
                      aspect: "video",
                    },
                    {
                      src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359854/Untitled_design_5_aekv1g.png",
                      aspect: "square",
                    },
                    {
                      src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360087/masculine_2_u3eaof.png",
                      aspect: "video",
                    },
                  ].map((item, i) => (
                    <CarouselItem key={`bm-img-${i}`}>
                      <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                        <img
                          src={item.src}
                          alt={`Be Masculine image ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Be Masculine</h3>
                <p className="text-[#2B2B2B] mb-4">
                  Built the full brand for Be Masculine (motivation &
                  discipline). Designed channel name, logo, edited videos,
                  created thumbnails, and branding visuals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Canva", "CapCut", "Illustrator"].map((tool) => (
                    <Badge key={tool} className="bg-[#FFC300] text-[#1E1E1E]">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#1E1E1E] hover:bg-[#FFC300] hover:text-[#1E1E1E]">
                      View Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        Be Masculine — Content Brand System
                      </DialogTitle>
                      <DialogDescription>
                        End-to-end channel identity and content toolkit for a
                        motivation and discipline brand.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Overview</h4>
                        <p className="text-sm text-[#2B2B2B]">
                          Delivered a complete visual system for YouTube/shorts:
                          logo, thumbnail system, motion templates,
                          lower-thirds, title cards, and cover art. The design
                          emphasizes contrast, quick readability, and repeatable
                          layouts for fast production.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-1">Role</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Brand Designer, Video Editor
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Timeline</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            3 weeks — Identity, System, Kits
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Deliverables</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Logo, thumbnail pack, intro/outro, title templates
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Outcomes</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Higher CTR with bold thumbnail patterns; faster
                            editing workflow
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Gallery</h4>
                        <div className="grid grid-cols-1 gap-3 mb-6">
                          {[
                            "https://www.youtube.com/embed/zIacPXe-uss",
                            "https://www.youtube.com/embed/hFZZn3qh16Q",
                            "https://www.youtube.com/embed/5vIqh9UhfWw",
                          ].map((embed, idx) => (
                            <div
                              key={`bm-long-${idx}`}
                              className="aspect-video overflow-hidden rounded-md bg-[#F9F9F9]"
                            >
                              <iframe
                                src={embed}
                                title={`Be Masculine long video embed ${idx + 1}`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              ></iframe>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            {
                              src: "/brands/be-masculine-brand.png",
                              aspect: "video",
                            },
                            {
                              src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360086/masculine_1_seawrk.png",
                              aspect: "video",
                            },
                            {
                              src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359854/Untitled_design_5_aekv1g.png",
                              aspect: "square",
                            },
                            {
                              src: "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360087/masculine_2_u3eaof.png",
                              aspect: "video",
                            },
                          ].map((item, idx) => (
                            <div
                              key={`bm-img-${idx}`}
                              className={`${item.aspect === "square" ? "aspect-square" : "aspect-video"} overflow-hidden rounded-md bg-[#F9F9F9]`}
                            >
                              <img
                                src={item.src}
                                alt={`Be Masculine image ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005085/Topryz_Brand_wlkiin.png",
                    "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005263/Topryz_Brand_2_isgnvr.png",
                  ].map((src, i) => (
                    <CarouselItem key={`topryz-${i}`}>
                      <div className="aspect-video w-full overflow-hidden bg-[#F9F9F9]">
                        <img
                          src={src}
                          alt={`Topryz image ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">
                  Topryz — eCommerce Brand Identity
                </h3>
                <p className="text-[#2B2B2B] italic mb-3">
                  &quot;Top Deals, Top Trust.&quot;
                </p>
                <p className="text-[#2B2B2B] mb-4">
                  I created a complete brand identity kit for Topryz, an
                  emerging eCommerce brand. The goal was to design a modern,
                  trustworthy, and professional brand presence that communicates
                  reliability and appeals to online shoppers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Illustrator", "Photoshop", "Canva"].map((tool) => (
                    <Badge key={tool} className="bg-[#FFC300] text-[#1E1E1E]">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#1E1E1E] hover:bg-[#FFC300] hover:text-[#1E1E1E]">
                      View Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        Topryz — eCommerce Brand Identity Design
                      </DialogTitle>
                      <DialogDescription>
                        A bold and trustworthy identity built for modern online
                        retail.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Tagline</h4>
                        <p className="text-sm text-[#2B2B2B]">
                          &quot;Top Deals, Top Trust.&quot;
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Overview</h4>
                        <p className="text-sm text-[#2B2B2B]">
                          The Topryz Brand Kit establishes a confident,
                          professional look and feel for a growing eCommerce
                          business. The visual language focuses on clarity,
                          reliability, and consistency across digital
                          touchpoints.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-1">Role</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Brand Designer
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Timeline</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            3 weeks — Identity & System
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Color Palette</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Neon green + deep blue — innovation and credibility
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Typography</h5>
                          <p className="text-sm text-[#2B2B2B]">
                            Professional, highly readable system
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Deliverables</h4>
                        <ul className="list-disc pl-5 text-sm text-[#2B2B2B] space-y-1">
                          <li>Logo Design — clean, bold, and modern</li>
                          <li>Brand Color Palette — neon green + deep blue</li>
                          <li>Typography System — for digital and print</li>
                          <li>
                            Business Collaterals — business cards, website
                            favicon, social media mockups, banner/flag design
                          </li>
                          <li>
                            Brand Pattern — repeating pattern derived from the
                            logo mark
                          </li>
                          <li>
                            Visual Mockups — web, app, merchandise, and
                            marketing material
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Outcome</h4>
                        <p className="text-sm text-[#2B2B2B]">
                          The Topryz Brand Kit positioned the company as a
                          reliable eCommerce brand with strong visual
                          consistency. The tagline &quot;Top Deals, Top
                          Trust&quot; anchors the messaging and reinforces value
                          and credibility.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Gallery</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005085/Topryz_Brand_wlkiin.png",
                            "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1757005263/Topryz_Brand_2_isgnvr.png",
                          ].map((src, idx) => (
                            <div
                              key={`topryz-g-${idx}`}
                              className="aspect-video overflow-hidden rounded-md bg-[#F9F9F9]"
                            >
                              <img
                                src={src}
                                alt={`Topryz gallery ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-[#1E1E1E] text-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let&apos;s Work Together.
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Available for freelance collaborations and design projects
            worldwide. Reach out to bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#FFC300]" size={20} />
                  <span>shopnline330@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#FFC300]" size={20} />
                  <span>+92 328 2360529</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#FFC300]" size={20} />
                  <span>Karachi, Pakistan (Remote Available)</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/shahab-uddin-4967b5380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC300] hover:text-[#1E1E1E] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/shahab_baloch97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC300] hover:text-[#1E1E1E] transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-white/5 border border-white/20 rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-[#FFC300] mb-2">
                    Thank you!
                  </p>
                  <p className="text-white/80">
                    Your message has been sent. I will get back to you soon.
                  </p>
                  <Button
                    className="mt-6 bg-white/10 text-white hover:bg-[#FFC300] hover:text-[#1E1E1E] w-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/shopnline330@gmail.com"
                  method="POST"
                  className="space-y-4"
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#FFC300]"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#FFC300]"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#FFC300] min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#FFC300] text-[#1E1E1E] hover:bg-[#FFD43B] hover:text-[#1E1E1E] w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          <Separator className="my-12 bg-white/20" />

          <p className="text-center text-[#FFC300] font-medium">
            Design that speaks, visuals that connect.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
