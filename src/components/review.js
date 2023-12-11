import React, { useEffect, useState } from "react";
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
import LogoSVG from "../assets/PREPPED-AI-LOGO-cropped.svg";

const ReviewComponent = ({
  transcription,
  url,
  strengthsPara,
  improvePara,
  rating,
  question,
}) => {
  const router = useRouter();

  const [screenSize, setScreenSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div class="w-screen h-screen flex justify-center items-center flex lato flex-col">
        <div
          style={{
            maxWidth: "1600px",
            width: "100vw",
          }}
        >
          <div class="flex w-full h-full bg-zinc-900">
            <div
              class="h-screen review-video-panel"
              // style={{ maxHeight: "945px" }}
            >
              <div
                class="w-full h-1/6 pt-10px pb-5px pl-10px review-padding-fix"
                style={{ minHeight: "135px" }}
              >
                <div class="no-scrollbar w-full rounded-md text-white overflow-scroll flex flex-col justify-center items-center gap-20px pr-20px pl-20px h-full pt-20px pb-10px bg-black">
                  <div class="w-full text-center record-question-size flex justify-start items-center gap-20px">
                    <Image
                      src={LogoSVG}
                      style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "5px",
                      }}
                    />
                    <div
                      class="text-[1.2rem]"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        justifyContent: "start",
                        display: "block",
                      }}
                    >
                      {question}
                    </div>
                  </div>
                  <div
                    class="w-full flex justify-between items-center p-5px rounded-lg pl-20px pr-20px"
                    style={{ backgroundColor: Colors.neutral }}
                  >
                    <div class="flex justify-center items-center gap-10px">
                      <MdCategory class="h-20px w-20px" />
                      Behavioral
                    </div>
                    {/* <div class="flex justify-center items-center gap-10px select-none">
                      <CgTranscript class="h-20px w-20px" />
                      View Transcript
                    </div>

                    <div class="flex justify-center items-center gap-10px">
                      <IoIosSave class="h-20px w-20px" />
                      Save Response
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="pt-5px pb-10px pl-10px h-4/6 review-padding-fix">
                <div class="h-full bg-black rounded-md flex justify-center align-start p-10px w-full">
                  <video
                    controls
                    src={url}
                    class="border-black border-2 border-solid"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div class="h-1/6 pt-5px pb-10px pl-10px review-padding-fix">
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
              <div class="w-full h-content" style={{ marginTop: "-5px" }}>
                <div
                  class="w-full pt-10px pr-10px pb-5px pl-10px"
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
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={"outline 1"}
                        />
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={"outline 2"}
                        />
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={"outline 3"}
                        />
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={"outline 4"}
                        />
                        <AiOutlineStar
                          class="w-25px h-25px"
                          key={"outline 5"}
                        />
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
                  class="w-full pt-5px pr-10px pb-5px pl-10px"
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
                      class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1.15rem]"
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
                  class="w-full pt-5px pr-10px pb-10px pl-10px"
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
                      class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1.15rem]"
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
            <div
              class="h-screen w-1/3 flex-col record-side-panel"
              style={{ minWidth: "400px" }}
            >
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
                    class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1.15rem]"
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
                    class="no-scrollbar w-full flex flex-col gap-15px roboto overflow-scroll text-[1.15rem]"
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
      </div>
    </SkeletonTheme>
  );
};

export default ReviewComponent;
