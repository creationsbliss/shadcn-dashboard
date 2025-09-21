"use client";

import {
  BadgeCheckIcon,
  CandyIcon,
  FileCheck2Icon,
  MedalIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

const SingleUserPage = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="bg-primary-foreground px-6 py-6 rounded-sm">
            <h1 className="leading-none text-xl font-semibold">Achievements</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheckIcon
                    size={36}
                    className="rounded-full p-2 bg-chart-2/30 border-1 border-chart-2/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <h1 className="font-bold mb-2">Verified Profile</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified and is trusted by our platform.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <ShieldCheckIcon
                    size={36}
                    className="rounded-full p-2 bg-chart-2/30 border-1 border-chart-2/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    This admin has been recognized as an official platform
                    leader.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <MedalIcon
                    size={36}
                    className="rounded-full p-2 bg-chart-2/30 border-1 border-chart-2/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <h1 className="font-bold mb-2">Honored</h1>
                  <p className="text-sm text-muted-foreground">
                    She was honored with the Employee of the Month award.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <CandyIcon
                    size={36}
                    className="rounded-full p-2 bg-chart-2/30 border-1 border-chart-2/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    He&apos;s a popular admin, trusted and respected by the
                    team.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <FileCheck2Icon
                    size={36}
                    className="rounded-full p-2 bg-chart-2/30 border-1 border-chart-2/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <h1 className="font-bold mb-2">Certified</h1>
                  <p className="text-sm text-muted-foreground">
                    This account is officially certified by our system.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <div className="bg-primary-foreground px-6 py-6 rounded-sm">
            <div className="flex items-center justify-between">
              <h1 className="leading-none text-xl font-semibold">User Info</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground text-sm">
                Profile completion
              </p>
              <Progress value={progress} className="mt-2" />
            </div>

            <div className="space-y-2 pt-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">Username:</span>
                <span>Jennifer Smith</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span>jennifersmith@one.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span>+1234 5678</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Role:</span>
                <Badge>Admin</Badge>
              </div>

              <p className="text-muted-foreground text-sm pt-2">
                Joined on 21.12.2026
              </p>
            </div>
          </div>

          <div className="bg-primary-foreground rounded-sm">
            <CardList title="Transaction History" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-4">
          <div className="bg-primary-foreground px-6 py-6 rounded-sm">
            User Card
          </div>
          <div className="bg-primary-foreground px-6 py-6 rounded-sm">
            Chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
