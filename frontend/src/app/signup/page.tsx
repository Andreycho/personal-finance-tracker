"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const signupFormSchema = z
  .object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).regex(passwordValidation, {
      message:
        "Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormProps = z.infer<typeof signupFormSchema>;

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SignupForm() {
  const form = useForm<SignupFormProps>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(formData: SignupFormProps) {
    form.clearErrors();
    // await sleep(2000);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ onSubmit ~ errorData:", errorData);
        throw new Error(
          errorData.message ||
            "There was a problem with your registration. Please try again."
        );
      }

      //   const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      //   console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: error.message,
      });
      form.setError("root", error.message);
    }
  }

  return (
    <Card className="m-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    {/* <Input type="password" {...field} /> */}
                    <PasswordInput
                      disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    {/* <Input type="password" {...field} /> */}
                    <PasswordInput
                      disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create an account
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Sign up with Facebook
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className={`underline ${
              form.formState.isSubmitting ? "pointer-events-none" : ""
            }`}
            aria-disabled={form.formState.isSubmitting}
            tabIndex={form.formState.isSubmitting ? -1 : undefined}
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
