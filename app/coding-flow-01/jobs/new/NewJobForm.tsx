"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import React from "react";
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
import { jobTypes, locationTypes } from "../../utils/job-types";

import { createJobSchema, createJobValues } from "../../utils/validation";
import LocationInput from "../../components/LocationInput";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import RichTextEditor from "../../components/RichTextEditor";
import { draftToMarkdown } from "markdown-draft-js";
import LoadingButton from "../../components/LoadingButton";
import { createJobPosting } from "../../action";

const NewJobForm = () => {
  const form = useForm<createJobValues>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  const handleSubmit = async (values: createJobValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    // call server action
    try {
      await createJobPosting(formData);
    } catch (err) {
      alert("Something went wrong. Please try again");
    }
  };

  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-xl font-extrabold capitalize tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
          Find your perfect developer
        </h1>
        <p className="mt-2 text-muted-foreground">
          Get your job postings seen by thousands of job seekers.
        </p>
      </div>

      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Job Details</h2>
          <p className="text-muted-foreground">
            Provide a job description and details
          </p>
        </div>

        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col space-y-4"
          >
            {/* Enter Job Title  */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.title && "text-foreground"}`}
                  >
                    Job Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Frontend Developer"
                      {...field}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Select Job Type  */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.type && "text-foreground"}`}
                  >
                    Job Type
                  </FormLabel>
                  <Select
                    {...field}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobTypes.map((type) => {
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

            {/* Company Name  */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.companyName && "text-foreground"}`}
                  >
                    Company
                  </FormLabel>
                  <FormControl>
                    <Input {...field} defaultValue={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Upload company Logo  */}
            <FormField
              control={form.control}
              name="companyLogo"
              render={({ field: { value, ...fieldValues } }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.companyLogo && "text-foreground"}`}
                  >
                    Company Logo
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...fieldValues}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        // accept only single file
                        const file = e.target.files?.[0];
                        fieldValues.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Location type  */}
            <FormField
              control={form.control}
              name="locationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.locationType && "text-foreground"}`}
                  >
                    Location Type
                  </FormLabel>
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locationTypes.map((type) => {
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

            {/* Location input  */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.location && "text-foreground"}`}
                  >
                    Office Location
                  </FormLabel>
                  <FormControl>
                    <LocationInput
                      onLocationSelected={field.onChange}
                      ref={field.ref}
                    />
                  </FormControl>
                  {form.watch("location") && (
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          form.setValue("location", "", {
                            shouldValidate: true,
                          });
                        }}
                      >
                        <X size={20} />
                      </button>
                      <span className="text-sm">{form.watch("location")}</span>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              {/* How to Apply  */}
              <FormLabel
                htmlFor="applicationEmail"
                className={`${form.formState.errors.applicationEmail && "text-foreground"}`}
              >
                How To Apply
              </FormLabel>

              {/* Email Input */}
              <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="applicationEmail"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormControl>
                        <div className="flex items-center">
                          <Input
                            placeholder="Email"
                            {...field}
                            defaultValue={field.value}
                          />
                          <span className="mx-2">or</span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Website input  */}
                <FormField
                  control={form.control}
                  name="applicationUrl"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormControl>
                        <Input
                          placeholder="Website"
                          type="url"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("applicationEmail");
                          }}
                          defaultValue={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Descrition Layout  */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label onClick={() => form.setFocus("description")}>
                    Description
                  </Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Salary Input  */}
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${form.formState.errors.salary && "text-foreground"}`}
                  >
                    Salary
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      defaultValue={field.value}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit the form  */}
            <LoadingButton type="submit" loading={form.formState.isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default NewJobForm;
