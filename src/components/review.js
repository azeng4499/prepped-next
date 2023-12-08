import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { BsArrowRightSquareFill } from "react-icons/bs";
import Colors from "@/utils/colors";
import { useRouter } from "next/navigation";
import { IoIosSave } from "react-icons/io";
import Image from "next/image";
import LogoSVG from "../assets/full-logo-new.svg";

const ReviewComponent = ({
  transcription,
  url,
  strengthsPara,
  improvePara,
  rating,
  question,
}) => {
  const router = useRouter();

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div class="w-screen h-screen flex justify-center items-center flex lato flex-col">
        <div class="flex w-full h-full bg-zinc-900">
          <div class="h-screen w-2/3">
            <div class="h-1/6 w-full pt-10px pr-5px pb-5px pl-10px">
              <div class="no-scrollbar h-full w-full bg-black rounded-md text-white overflow-scroll flex flex-col justify-center items-center gap-20px pr-20px pl-20px">
                <div class="text-[1.5rem] w-full text-center">
                  <div>{question}</div>
                </div>
                <div
                  class="w-full flex justify-between items-center p-5px rounded-lg pl-20px pr-20px"
                  style={{ backgroundColor: Colors.neutral }}
                >
                  <div class="flex justify-center items-center gap-10px">
                    <MdCategory class="h-20px w-20px" />
                    Behavioral
                  </div>
                  <div class="flex justify-center items-center gap-10px select-none">
                    <CgTranscript class="h-20px w-20px" />
                    View Transcript
                  </div>
                  {/* <div class="flex justify-center items-center gap-10px">
                    <AiOutlineNumber class="h-20px w-20px" />
                    Attempt 4
                  </div> */}
                  <div class="flex justify-center items-center gap-10px">
                    <IoIosSave class="h-20px w-20px" />
                    Save Response
                  </div>
                </div>
              </div>
            </div>
            <div class="h-4/6 pt-5px pr-5px pb-10px pl-10px">
              <div class="h-full bg-black rounded-md flex justify-center align-center p-10px w-content">
                <video
                  controls
                  src={url}
                  class="border-black border-2 border-solid"
                />
              </div>
            </div>
            <div class="h-1/6 pt-5px pr-5px pb-10px pl-10px">
              <div class="h-full bg-black rounded-md flex justify-center align-center p-10px w-content">
                <amp-ad
                  width="100vw"
                  height="320"
                  type="adsense"
                  data-ad-client="ca-pub-8995864601122757"
                  data-ad-slot="8211868214"
                  data-auto-format="rspv"
                  data-full-width=""
                >
                  <div overflow=""></div>
                </amp-ad>
              </div>
            </div>
          </div>
          <div class="h-screen w-1/3">
            <div
              class="w-full pt-10px pr-10px pb-5px pl-5px"
              style={{ height: "calc(100vh * 1/10)" }}
            >
              <div
                class="h-full w-full bg-black rounded-md flex items-center text-white p-20px"
                style={{
                  justifyContent: "space-between",
                }}
              >
                {rating !== 0 ? (
                  <div class="flex gap-10px">
                    {[...Array(rating)].map((element) => {
                      return (
                        <AiFillStar
                          class="w-25px h-25px text-purple-500"
                          key={element + "fill"}
                        />
                      );
                    })}
                    {[...Array(5 - rating)].map((element) => {
                      return (
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={element + "outline"}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div class="flex gap-10px">
                    <AiOutlineStar class="w-25px h-25px" key={"outline 1"} />
                    <AiOutlineStar class="w-25px h-25px" key={"outline 2"} />
                    <AiOutlineStar class="w-25px h-25px" key={"outline 3"} />
                    <AiOutlineStar class="w-25px h-25px" key={"outline 4"} />
                    <AiOutlineStar class="w-25px h-25px" key={"outline 5"} />
                  </div>
                )}
                <button
                  class="flex justify-center items-center gap-10px border-solid border-white border-b pb-5px cursor-pointer select-none"
                  onClick={() => {
                    router.push("/home");
                  }}
                >
                  Return Home <BsArrowRightSquareFill />
                </button>
              </div>
            </div>
            <div
              class="w-full pt-5px pr-10px pb-5px pl-5px"
              style={{ height: "calc(100vh * 9/20)" }}
            >
              <div class="h-full w-full bg-black rounded-md p-15px">
                <div
                  class="font-bold w-full h-content text-[1.5rem] border-solid border-b border-white mb-20px text-white pb-5px flex"
                  style={{ gap: "10px" }}
                >
                  <AiFillPlusCircle
                    class="w-25px h-25px mt-5px"
                    color={Colors.success}
                  />
                  Strengths
                </div>
                <div
                  class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1rem]"
                  style={{
                    height: "calc(100% - 60px)",
                  }}
                >
                  {!strengthsPara ? (
                    <Skeleton count={8} />
                  ) : (
                    <div class="text-white">{strengthsPara}</div>
                  )}
                </div>
              </div>
            </div>
            <div
              class="w-full pt-5px pr-10px pb-10px pl-5px"
              style={{
                height: "calc(100vh * 9/20)",
              }}
            >
              <div class="h-full w-full bg-black rounded-md p-15px">
                <div
                  class="font-bold w-full h-content text-[1.5rem] border-solid border-b border-white mb-20px text-white pb-5px flex"
                  style={{ gap: "10px" }}
                >
                  <AiFillMinusCircle
                    class="w-25px h-25px mt-5px"
                    color={Colors.danger}
                  />
                  Areas of Improvement
                </div>
                <div
                  class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1rem]"
                  style={{
                    height: "calc(100% - 60px)",
                  }}
                >
                  {!improvePara ? (
                    <Skeleton count={8} />
                  ) : (
                    <div class="text-white">{improvePara}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ReviewComponent;
