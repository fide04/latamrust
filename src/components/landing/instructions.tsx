import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, PackageCheck, Play } from "lucide-react";

const instructions = [
  {
    icon: Download,
    title: "Step 1: Download the Launcher",
    content: "Click the prominent download button on our homepage to get the latest version of the LatamRust launcher installer.",
  },
  {
    icon: PackageCheck,
    title: "Step 2: Run the Installer",
    content: "Once downloaded, locate the file (e.g., 'LatamRust_Installer.exe') in your downloads folder and double-click to run it. Follow the on-screen prompts to complete the installation process.",
  },
  {
    icon: Play,
    title: "Step 3: Launch and Play",
    content: "After installation, a shortcut will be placed on your desktop. Open the LatamRust Launcher, log in with your credentials, and dive straight into the unforgiving world of Rust!",
  },
];

export function Instructions() {
  return (
    <section id="instructions" className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          Installation Guide
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Getting started is easy. Follow these simple steps.
        </p>
      </div>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {instructions.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <item.icon className="h-6 w-6 text-primary" />
                <span>{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pl-14">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
