export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-8">
        <div className="w-64 shrink-0 hidden md:block"></div>
        {children}
      </div>
    </div>
  );
}
