"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6 py-6">
      <h1 className="pb-6 leading-none font-semibold">Task Board</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <div>
        <ScrollArea className="max-h-[400px] overflow-y-auto pr-2 mt-2">
          <div className="flex flex-col gap-2">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <Label
                  htmlFor="item1"
                  className="tex-sm text-muted-foreground font-normal"
                >
                  Libero arcu donec ultricies accumsan ante in quisque.
                </Label>
              </div>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TodoList;
