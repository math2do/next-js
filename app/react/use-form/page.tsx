"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// zod schema, which can be used in backend also to validate again
// This can be moved to separate file. So that while submitting backend can also import this type do the validation
const signUpScheme = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be of atleast 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpScheme>;

const UseFormHook = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({ resolver: zodResolver(signUpScheme) });

  const onSubmit = async (formData: SignUpSchema) => {
    console.log("Submitting Data:", JSON.stringify(formData));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Done!");

    reset();
  };

  return (
    <div className="mx-auto grid h-screen max-w-6xl place-content-center border-2">
      <div className="aspect-[2/3] w-96 max-w-full rounded-md border shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-y-8 p-2 md:p-6 lg:p-8"
        >
          <h1 className="text-2xl">
            <span className="underlined tracking-widest">Register</span>
          </h1>

          <div className="relative w-full">
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="text-md w-full"
            />
            {errors.email && (
              <p className="absolute -bottom-6 left-0 text-sm text-destructive">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="relative w-full">
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="text-md w-full"
            />
            {errors.password && (
              <p className="absolute -bottom-6 left-0 text-sm text-destructive">{`${errors.password.message}`}</p>
            )}
          </div>

          <div className="relative w-full">
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="text-md w-full"
            />
            {errors.confirmPassword && (
              <p className="absolute -bottom-6 left-0 text-sm text-destructive">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className="text-md mt-4 w-full tracking-widest"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UseFormHook;
