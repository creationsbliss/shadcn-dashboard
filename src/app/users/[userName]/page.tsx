import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Jennifer Smith</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-4">
          <div className="bg-primary-foreground px-6 py-4 rounded-sm">
            <h1 className="leading-none font-semibold">Achievements</h1>
          </div>
          <div className="bg-primary-foreground px-6 py-4 rounded-sm">Info</div>
          <div className="bg-primary-foreground rounded-sm">
            <CardList title="Transaction History" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-4">
          <div className="bg-primary-foreground px-6 py-4 rounded-sm">
            User Card
          </div>
          <div className="bg-primary-foreground px-6 py-4 rounded-sm">
            Chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
