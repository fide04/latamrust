import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Cpu, Memory, Monitor } from 'lucide-react';

const requirements = [
  { component: "OS", min: "Windows 10 64bit", rec: "Windows 11 64bit" },
  { component: "Processor", min: "Intel Core i7-4790K / AMD Ryzen 5 1600", rec: "Intel Core i7-7700K / AMD Ryzen 5 2600X" },
  { component: "Memory", min: "10 GB RAM", rec: "16 GB RAM" },
  { component: "Graphics", min: "NVIDIA GTX 970 / AMD R9 290", rec: "NVIDIA GTX 1070 / AMD RX 580" },
  { component: "Storage", min: "25 GB available space", rec: "25 GB available space (SSD)" },
];

export function Requirements() {
  return (
    <section id="requirements" className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          System Requirements
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ensure your rig is ready for the challenge.
        </p>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] font-semibold text-base">Component</TableHead>
                <TableHead className="font-semibold text-base">Minimum</TableHead>
                <TableHead className="font-semibold text-base">Recommended</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requirements.map((req) => (
                <TableRow key={req.component}>
                  <TableCell className="font-medium text-foreground">{req.component}</TableCell>
                  <TableCell className="text-muted-foreground">{req.min}</TableCell>
                  <TableCell className="text-muted-foreground">{req.rec}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
