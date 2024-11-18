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

export const formSchema = z.object({
  goal: z.string().min(2, {
    message: "Goal title must be at least 5 characters.",
  }),
  context: z.string(),
  target: z.string(),
  timeline: z.date(),
  status: z.string(),
});

export default function MyForm({
  onSubmit,
}: {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 ">
          {/* Goal Field */}
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="text-start" htmlFor="name">
                  Your Goal
                </FormLabel>
                <FormControl>
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
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="context" className=" text-start">
                  Context
                </FormLabel>
                <FormControl>
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
            control={form.control}
            name="target"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="target" className="text-start">
                  Target
                </FormLabel>
                <FormControl>
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
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
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
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-start">Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
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
