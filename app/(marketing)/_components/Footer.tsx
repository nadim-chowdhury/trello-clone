import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full px-4 py-2 border-t">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <h1 className="hidden md:block font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          &copy; 2024 All Rights Reserved by Nadim Chowdhury
        </h1>

        <div className="space-x-2 md:block md:w-auto flex items-center md:justify-between w-full">
          <Button size="sm" asChild variant="ghost">
            <Link href="https://github.com/nadim-chowdhury">GitHub</Link>
          </Button>
          <Button size="sm" asChild variant="ghost">
            <Link href="https://www.linkedin.com/in/nadim-chowdhury">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
