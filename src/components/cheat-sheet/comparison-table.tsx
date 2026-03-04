import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Monitor, Terminal } from "lucide-react";

const rows = [
  {
    feature: "Interface",
    desktop: "Visual app with sidebar, file tree, and chat",
    cli: "Terminal-based text interface",
  },
  {
    feature: "Setup",
    desktop: "Download the app and sign in",
    cli: "Install via npm, configure API key",
  },
  {
    feature: "Best for",
    desktop: "Most users — visual, intuitive, integrated",
    cli: "Developers comfortable with the terminal",
  },
  {
    feature: "File editing",
    desktop: "See changes inline with visual diffs",
    cli: "Changes shown as text patches",
  },
  {
    feature: "Project context",
    desktop: "Select a project folder from the UI",
    cli: "Run from your project directory",
  },
  {
    feature: "MCP & Extensions",
    desktop: "Built-in support, easy to configure",
    cli: "Same capabilities, manual config",
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[140px] font-semibold">Feature</TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-primary" />
                Desktop App
                <Badge variant="default" className="ml-1 text-[10px]">
                  We use this today
                </Badge>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                CLI
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature}>
              <TableCell className="font-medium text-foreground">
                {row.feature}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {row.desktop}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {row.cli}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
