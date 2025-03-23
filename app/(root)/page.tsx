import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from "@/constants";

const Page = () => {
  return (
    <>
      <section className="flex items-center justify-between bg-gradient-to-b from-[#171532] to-[#08090D] rounded-3xl px-16 py-6 max-sm:px-4">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            透過 AI 練習與回饋，
            <br />
            快速準備面試沒煩惱！
          </h2>
          <p className="text-lg">練習真實面試題目並即時獲得回饋。</p>

          <Button
            asChild
            className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full px-5 cursor-pointer min-h-10 max-sm:w-full"
          >
            <Link href="/interview">開始面試</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          width={400}
          height={400}
          alt="robo-dude"
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>你的面試</h2>

        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>你還沒有參加任何面試</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>進行面試</h2>

        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>目前沒有可以參加的面試</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;
