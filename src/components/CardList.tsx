import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

const popularContent = [
  {
    id: 1,
    title: "Mastering TypeScript",
    badge: "Programming",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 5100,
  },
  {
    id: 2,
    title: "Cloud Computing Basics",
    badge: "Cloud",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 3,
    title: "Blockchain in 2025",
    badge: "Crypto",
    image:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
  {
    id: 4,
    title: "UI/UX Design Trends",
    badge: "Design",
    image:
      "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1600,
  },
  {
    id: 5,
    title: "Getting Started with Next.js",
    badge: "Web Dev",
    image:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1900,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Purchase: Premium Plan",
    badge: "Alice Green",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 2,
    title: "Freelance Project Payment",
    badge: "David Lee",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
  {
    id: 3,
    title: "Refund Issued",
    badge: "Sophia Turner",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 900,
  },
  {
    id: 4,
    title: "Invoice Paid",
    badge: "Ethan Carter",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4100,
  },
  {
    id: 5,
    title: "Purchase: Basic Plan",
    badge: "Olivia Brown",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
];

const CardList = ({ title }: { title: string }) => {
  const lists =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="pb-6">
      <div className="py-6 px-6 leading-none font-semibold text-xl">
        <h1>{title}</h1>
      </div>
      <div className="px-6 flex flex-col gap-2">
        {lists.map((list) => (
          <Card
            key={list.id}
            className="flex-row gap-4 p-4 items-center justify-between"
          >
            <div className="w-12 h-12 relative rounded-sm overflow-hidden">
              <Image
                src={list.image}
                alt={list.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-0 flex-1">
              <p className="text-sm font-medium">{list.title}</p>
              <Badge variant="secondary">{list.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{list.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
