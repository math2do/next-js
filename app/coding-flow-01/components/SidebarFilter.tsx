"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { jobTypes } from "../utils/job-types";
import { Checkbox } from "@/components/ui/checkbox";
import { JobFilterValues, jobFilterSchema } from "../utils/validation";
import { SubmitFormAction } from "../action";
import { wait } from "@/lib/utils";

interface SidebarFilterProps {
  distinctLocations: string[];
  defaultValuesProps: JobFilterValues;
}

const AllJobTypes = ["All", ...jobTypes];

const SidebarFilter = ({
  distinctLocations,
  defaultValuesProps,
}: SidebarFilterProps) => {
  distinctLocations = ["All", ...distinctLocations];
  // 1. Define your form.
  const form = useForm<JobFilterValues>({
    resolver: zodResolver(jobFilterSchema),
    defaultValues: {
      q: defaultValuesProps.q || "",
      type: defaultValuesProps.type || "",
      location: defaultValuesProps.location || "",
      remote: defaultValuesProps.remote || false,
    },
  });

  // 2. Define a submit handler.
  const handleSubmit = async (values: JobFilterValues) => {
    const { q, type, location, remote } = values;
    const searchParams = new URLSearchParams({
      ...(q && { q: q.trim() }),
      ...(type && { type: type.trim() }),
      ...(location && { location: location.trim() }),
      ...(remote && { remote: "true" }),
    });

    // for testing loading state
    // await wait(2000);

    SubmitFormAction(`/coding-flow-01/?${searchParams.toString()}`);
  };

  return (
    <aside className="h-fit rounded-lg border bg-background p-2 md:sticky md:top-0 md:w-64">
      {/* Following form is inspired from: https://ui.shadcn.com/docs/components/form */}
      <Form {...form}>
        <form
          noValidate
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col space-y-4"
        >
          <FormField
            control={form.control}
            name="q"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Title, company, etc."
                    {...field}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {AllJobTypes.map((type) => {
                      return (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location Type</FormLabel>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {distinctLocations.map((location) => {
                      return (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remote"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={field.onChange}
                      defaultChecked={field.value}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">Remote Jobs</FormLabel>
                </FormItem>
              );
            }}
          />

          <Button
            disabled={form.formState.isSubmitting || !form.formState.isValid}
            type="submit"
            variant="default"
            className="w-full tracking-widest"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Filter Jobs
          </Button>
        </form>
      </Form>
    </aside>
  );
};

export default SidebarFilter;
