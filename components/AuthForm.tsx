"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import FormField from "@/components/FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-in" ? z.string().optional() : z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values", values);
    try {
      if (type === "sign-in") {
        toast.success("登入成功");
        router.push("/");
      } else {
        toast.success("帳號註冊成功，請登入。");
        router.push("/sign-in");
      }
    } catch (error) {
      console.error(error);
      toast.error(`發生錯誤：${error}`);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="p-0.5 rounded-2xl w-fit bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33] lg:min-w-[566px]">
      <div className="flex flex-col gap-6 bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl min-h-full py-14 px-10">
        <div className="flex gap-2 justify-center">
          <Image src="/logo.svg" width={32} height={38} alt="PrepWise" />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>

        <h3>使用 AI 進行求職面試練習</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4"
          >
            {!isSignIn && (
              <FormField
                name="name"
                control={form.control}
                label="使用者名稱"
                placeholder="請輸入使用者名稱"
              />
            )}

            <FormField
              name="email"
              control={form.control}
              label="帳號 (Email)"
              placeholder="請輸入帳號 (Email)"
              type="email"
            />

            <FormField
              name="password"
              control={form.control}
              label="密碼"
              placeholder="請輸入密碼"
              type="password"
            />

            <Button
              type="submit"
              className="w-full bg-primary-200 text-dark-100 hover:!bg-primary-200/80 rounded-full min-h-10 px-5 cursor-pointer"
            >
              {isSignIn ? "登入" : "註冊"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "還沒有帳號嗎? " : "已經有帳號了嗎?"}
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="font-bold text-primary ml-1"
          >
            {isSignIn ? "註冊 " : "登入"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
