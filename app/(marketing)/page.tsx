import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center mb-4 p-4 border shadow-sm bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          <h2>No. 1 Task Management System</h2>
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-700 mb-6">
          Trello Help Team Move
        </h1>
        <h3 className="text-2xl md:text-5xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mb-4">
          Work Forward.
        </h3>
      </div>

      <h4 className="text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Trello.
      </h4>

      <Button className="mt-6" asChild>
        <Link href="/sign-up">Get Trello For Free</Link>
      </Button>
    </div>
  );
}
