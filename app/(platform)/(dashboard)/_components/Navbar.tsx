import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton, auth } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full border-b shadow-sm flex items-center px-4 py-2">
      <div className="flex items-center gap-x-4">
        <Button variant="primary" size="sm" className="hidden md:block">
          Create
        </Button>
        <Button variant="primary" size="sm" className="block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
