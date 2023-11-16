import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full px-4 py-2 border-b shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <h1 className="hidden md:block text-xl font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          Trello
        </h1>

        <div className="space-x-2 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Trello For Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
