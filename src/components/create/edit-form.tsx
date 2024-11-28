"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { GoalData } from "@/data/goals-data";

export const formSchema = z.object({
  goal: z.string().min(2, {
    message: "Goal title must be at least 5 characters.",
  }),
  context: z.string(),
  target: z.string(),
  timeline: z.date(),
  status: z.string(),
});

export default function EditForm({
  goalData,
  onSubmit,
}: {
  goalData: GoalData;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  let statusDesc;
  if (goalData.status === 1) {
    statusDesc = "planned";
  } else if (goalData.status === 2) {
    statusDesc = "in-progress";
  } else {
    statusDesc = "done";
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 ">
          {/* Goal Field */}
          <FormField
            defaultValue={goalData.context}
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="text-start" htmlFor="name">
                  Your Goal
                </FormLabel>
                <FormControl className="bg-white text-black">
                  <Input
                    id="goal"
                    placeholder="Learn how to dance!"
                    type="text"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Context Field */}
          <FormField
            defaultValue={goalData.context}
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="context" className=" text-start">
                  Context
                </FormLabel>
                <FormControl className="bg-white text-black">
                  <Input
                    id="context"
                    placeholder="why do you aim for this goal?"
                    type="text"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Target Field */}
          <FormField
            defaultValue={goalData.target}
            control={form.control}
            name="target"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="target" className="text-start">
                  Target
                </FormLabel>
                <FormControl className="bg-white text-black">
                  <Input
                    id="target"
                    placeholder="what is the target you are looking to achieve"
                    type="text"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Timeline Field */}
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-start">Timeline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="bg-white text-black">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(new Date(goalData.timelineDate), "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Status Field */}
          <FormField
            defaultValue={statusDesc}
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-start">Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={statusDesc}
                >
                  <FormControl className="bg-white text-black">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status for your current goal" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="planned">Planned</SelectItem>
                    <SelectItem value="in-progress">In-progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
