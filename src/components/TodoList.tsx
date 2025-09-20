import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  return (
    <div className="px-6 py-6">
      calender
      <ScrollArea className="max-h-[400px] overflow-y-auto pr-2">
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
  );
};

export default TodoList;
