import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Check,
  ChevronDown,
  Palette,
  Type,
  Wand2,
  Layers,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";

interface StyleCustomizerProps {
  onStyleChange?: (styles: StyleOptions) => void;
}

interface StyleOptions {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    headingSize: number;
    bodySize: number;
  };
  animations: {
    enableTransitions: boolean;
    enableParallax: boolean;
    transitionSpeed: number;
  };
  layout: {
    spacing: number;
    borderRadius: number;
    containerWidth: string;
  };
}

const defaultStyles: StyleOptions = {
  colors: {
    primary: "#FFC300",
    secondary: "#1E1E1E",
    background: "#FFFFFF",
    text: "#2B2B2B",
    accent: "#3B82F6",
  },
  typography: {
    headingFont: "Poppins",
    bodyFont: "Inter",
    headingSize: 2.5,
    bodySize: 1,
  },
  animations: {
    enableTransitions: true,
    enableParallax: true,
    transitionSpeed: 0.3,
  },
  layout: {
    spacing: 16,
    borderRadius: 8,
    containerWidth: "1200px",
  },
};

const StyleCustomizer: React.FC<StyleCustomizerProps> = ({
  onStyleChange = () => {},
}) => {
  const [styles, setStyles] = useState<StyleOptions>(defaultStyles);
  const [activeTab, setActiveTab] = useState("colors");
  const [previewDevice, setPreviewDevice] = useState("desktop");

  const handleStyleChange = (
    category: keyof StyleOptions,
    property: string,
    value: any,
  ) => {
    const updatedStyles = {
      ...styles,
      [category]: {
        ...styles[category],
        [property]: value,
      },
    };
    setStyles(updatedStyles);
    onStyleChange(updatedStyles);
  };

  const colorPresets = [
    {
      name: "Yellow Primary",
      colors: {
        primary: "#FFC300",
        secondary: "#1E1E1E",
        background: "#FFFFFF",
        text: "#2B2B2B",
        accent: "#3B82F6",
      },
    },
    {
      name: "Yellow Gold",
      colors: {
        primary: "#FFD43B",
        secondary: "#1E1E1E",
        background: "#FFFFFF",
        text: "#2B2B2B",
        accent: "#FF6B6B",
      },
    },
    {
      name: "Sunshine",
      colors: {
        primary: "#FFE680",
        secondary: "#1E1E1E",
        background: "#FFF6D6",
        text: "#2B2B2B",
        accent: "#3B82F6",
      },
    },
  ];

  return (
    <Card className="w-full max-w-md bg-white border-gray-200 shadow-md">
      <CardHeader className="bg-[#FFC300] text-[#1E1E1E]">
        <CardTitle className="flex items-center justify-between">
          <span>Style Customizer</span>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${previewDevice === "desktop" ? "bg-white/20" : ""}`}
              onClick={() => setPreviewDevice("desktop")}
            >
              <Monitor size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${previewDevice === "tablet" ? "bg-white/20" : ""}`}
              onClick={() => setPreviewDevice("tablet")}
            >
              <Tablet size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${previewDevice === "mobile" ? "bg-white/20" : ""}`}
              onClick={() => setPreviewDevice("mobile")}
            >
              <Smartphone size={16} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 rounded-none">
            <TabsTrigger value="colors" className="flex items-center gap-1">
              <Palette size={14} />
              <span className="hidden sm:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-1">
              <Type size={14} />
              <span className="hidden sm:inline">Typography</span>
            </TabsTrigger>
            <TabsTrigger value="animations" className="flex items-center gap-1">
              <Wand2 size={14} />
              <span className="hidden sm:inline">Animations</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-1">
              <Layers size={14} />
              <span className="hidden sm:inline">Layout</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Color Presets</Label>
              <div className="flex flex-wrap gap-2">
                {colorPresets.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 h-8"
                    onClick={() => {
                      setStyles({
                        ...styles,
                        colors: preset.colors,
                      });
                      onStyleChange({
                        ...styles,
                        colors: preset.colors,
                      });
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: preset.colors.primary }}
                    />
                    <span className="text-xs">{preset.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                <Label htmlFor="primaryColor">Primary (Yellow)</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: styles.colors.primary }}
                  />
                  <Input
                    id="primaryColor"
                    type="text"
                    value={styles.colors.primary}
                    onChange={(e) =>
                      handleStyleChange("colors", "primary", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                <Label htmlFor="secondaryColor">Secondary (Black)</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: styles.colors.secondary }}
                  />
                  <Input
                    id="secondaryColor"
                    type="text"
                    value={styles.colors.secondary}
                    onChange={(e) =>
                      handleStyleChange("colors", "secondary", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                <Label htmlFor="backgroundColor">Background</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: styles.colors.background }}
                  />
                  <Input
                    id="backgroundColor"
                    type="text"
                    value={styles.colors.background}
                    onChange={(e) =>
                      handleStyleChange("colors", "background", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                <Label htmlFor="textColor">Text</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: styles.colors.text }}
                  />
                  <Input
                    id="textColor"
                    type="text"
                    value={styles.colors.text}
                    onChange={(e) =>
                      handleStyleChange("colors", "text", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                <Label htmlFor="accentColor">Accent</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: styles.colors.accent }}
                  />
                  <Input
                    id="accentColor"
                    type="text"
                    value={styles.colors.accent}
                    onChange={(e) =>
                      handleStyleChange("colors", "accent", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="p-4 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="headingFont">Heading Font</Label>
                <Select
                  value={styles.typography.headingFont}
                  onValueChange={(value) =>
                    handleStyleChange("typography", "headingFont", value)
                  }
                >
                  <SelectTrigger id="headingFont" className="w-full">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Poppins">Poppins</SelectItem>
                    <SelectItem value="Manrope">Manrope</SelectItem>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Montserrat">Montserrat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bodyFont">Body Font</Label>
                <Select
                  value={styles.typography.bodyFont}
                  onValueChange={(value) =>
                    handleStyleChange("typography", "bodyFont", value)
                  }
                >
                  <SelectTrigger id="bodyFont" className="w-full">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Poppins">Poppins</SelectItem>
                    <SelectItem value="Manrope">Manrope</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="headingSize">Heading Size</Label>
                  <span className="text-sm text-gray-500">
                    {styles.typography.headingSize}rem
                  </span>
                </div>
                <Slider
                  id="headingSize"
                  min={1}
                  max={5}
                  step={0.1}
                  value={[styles.typography.headingSize]}
                  onValueChange={([value]) =>
                    handleStyleChange("typography", "headingSize", value)
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="bodySize">Body Size</Label>
                  <span className="text-sm text-gray-500">
                    {styles.typography.bodySize}rem
                  </span>
                </div>
                <Slider
                  id="bodySize"
                  min={0.75}
                  max={1.5}
                  step={0.05}
                  value={[styles.typography.bodySize]}
                  onValueChange={([value]) =>
                    handleStyleChange("typography", "bodySize", value)
                  }
                />
              </div>

              <div className="pt-4">
                <div className="p-4 border rounded-md">
                  <h3
                    style={{
                      fontFamily: styles.typography.headingFont,
                      fontSize: `${styles.typography.headingSize}rem`,
                      color: styles.colors.secondary,
                    }}
                  >
                    Heading Preview
                  </h3>
                  <p
                    style={{
                      fontFamily: styles.typography.bodyFont,
                      fontSize: `${styles.typography.bodySize}rem`,
                      color: styles.colors.text,
                    }}
                  >
                    This is how your text will look with the current settings.
                    Adjust the fonts and sizes to match your design vision.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="animations" className="p-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="enableTransitions">Enable Transitions</Label>
                <Switch
                  id="enableTransitions"
                  checked={styles.animations.enableTransitions}
                  onCheckedChange={(checked) =>
                    handleStyleChange(
                      "animations",
                      "enableTransitions",
                      checked,
                    )
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="enableParallax">Enable Parallax Effects</Label>
                <Switch
                  id="enableParallax"
                  checked={styles.animations.enableParallax}
                  onCheckedChange={(checked) =>
                    handleStyleChange("animations", "enableParallax", checked)
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="transitionSpeed">Transition Speed</Label>
                  <span className="text-sm text-gray-500">
                    {styles.animations.transitionSpeed}s
                  </span>
                </div>
                <Slider
                  id="transitionSpeed"
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={[styles.animations.transitionSpeed]}
                  onValueChange={([value]) =>
                    handleStyleChange("animations", "transitionSpeed", value)
                  }
                  disabled={!styles.animations.enableTransitions}
                />
              </div>

              <div className="pt-2">
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-gray-500 mb-2">Animation Notes:</p>
                  <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                    <li>Transitions apply to all section changes</li>
                    <li>Parallax effects only on Home and About sections</li>
                    <li>Parallax will be disabled on mobile automatically</li>
                    <li>Smooth rotative storytelling between sections</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="p-4 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="spacing">Section Spacing</Label>
                  <span className="text-sm text-gray-500">
                    {styles.layout.spacing}px
                  </span>
                </div>
                <Slider
                  id="spacing"
                  min={8}
                  max={32}
                  step={4}
                  value={[styles.layout.spacing]}
                  onValueChange={([value]) =>
                    handleStyleChange("layout", "spacing", value)
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="borderRadius">Border Radius</Label>
                  <span className="text-sm text-gray-500">
                    {styles.layout.borderRadius}px
                  </span>
                </div>
                <Slider
                  id="borderRadius"
                  min={0}
                  max={20}
                  step={2}
                  value={[styles.layout.borderRadius]}
                  onValueChange={([value]) =>
                    handleStyleChange("layout", "borderRadius", value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="containerWidth">Container Width</Label>
                <Select
                  value={styles.layout.containerWidth}
                  onValueChange={(value) =>
                    handleStyleChange("layout", "containerWidth", value)
                  }
                >
                  <SelectTrigger id="containerWidth" className="w-full">
                    <SelectValue placeholder="Select width" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000px">Narrow (1000px)</SelectItem>
                    <SelectItem value="1200px">Standard (1200px)</SelectItem>
                    <SelectItem value="1400px">Wide (1400px)</SelectItem>
                    <SelectItem value="90%">Fluid (90%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <div
                  className="border rounded-md overflow-hidden"
                  style={{ borderRadius: `${styles.layout.borderRadius}px` }}
                >
                  <div className="p-3 bg-[#FFC300] text-[#1E1E1E] font-medium">
                    Layout Preview
                  </div>
                  <div
                    className="p-4 bg-white"
                    style={{ padding: `${styles.layout.spacing / 2}px` }}
                  >
                    <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
                      Container Width: {styles.layout.containerWidth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 border-t flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setStyles(defaultStyles);
              onStyleChange(defaultStyles);
            }}
          >
            Reset to Default
          </Button>
          <Button
            size="sm"
            className="bg-[#FFC300] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#FFC300]"
          >
            Apply Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StyleCustomizer;
