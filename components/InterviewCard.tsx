import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("YYYY-MM-DD");

  return (
    <div className="bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33] p-0.5 rounded-2xl min-h-96">
      <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl min-h-full flex flex-col p-6 relative overflow-hidden gap-10 justify-between">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="text-sm font-semibold capitalize">{normalizedType}</p>
          </div>

          <Image
            src={getRandomInterviewCover()}
            width={90}
            height={90}
            alt="cover image"
            className="rounded-full object-fit size-[90px]"
          />

          <h3 className="mt-5 capitalize">{role} 面試</h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "尚未參加此面試。立即開始練習，提升技巧。"}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />

          <Button className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full px-5 cursor-pointer min-h-10">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "查看回饋" : "查看面試"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
