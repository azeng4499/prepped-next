"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import ProgressBar from "@ramonak/react-progress-bar";
import { useTimer } from "use-timer";
import { VscDebugStart } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { GiFinishLine } from "react-icons/gi";
import Colors from "@/utils/colors";
import HashLoader from "react-spinners/HashLoader";
import { useRouter } from "next/navigation";

const RecordComponent = ({
  setRecordedVideoChunks,
  setRecordedAudioChunks,
  question,
}) => {
  const webcamRef = useRef(null);
  const router = useRouter();
  // const webcamDivRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const videoMediaRecorderRef = useRef(null);
  const audioMediaRecorderRef = useRef(null);
  const { time, start, pause } = useTimer({
    initialTime: 120,
    timerType: "DECREMENTAL",
  });

  const [minuteDisplay, setMinuteDisplay] = useState(2);
  const [secTensDisplay, setSecTensDisplay] = useState(0);
  const [secOnesDisplay, setSecOnesDisplay] = useState(0);
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    if (time <= 0) {
      pause();
      handleStopCaptureClick();
    }
    const minutes = Math.floor(time / 60);
    setMinuteDisplay(minutes);
    const seconds = Math.ceil(time % 60);
    if (seconds < 10) {
      setSecTensDisplay(0);
    } else {
      setSecTensDisplay(Math.floor(seconds / 10));
    }
    setSecOnesDisplay(Math.ceil(seconds % 10));
  }, [time, pause]);

  // useEffect(() => {
  //   if (webcamDivRef.current) {
  //     setWebcamDivDim({
  //       width: webcamDivRef.current.clientWidth,
  //       height: webcamDivRef.current.clientHeight,
  //     });
  //     console.log(
  //       webcamDivRef.current.clientWidth,
  //       webcamDivRef.current.clientHeight
  //     );
  //   }
  // }, [webcamDivRef, screenSize]);

  const handleStartCaptureClick = useCallback(() => {
    start();
    setRecordedAudioChunks([]);
    setRecordedVideoChunks([]);
    setCapturing(true);
    const stream = webcamRef.current.stream;
    const audioTrack = stream.getAudioTracks()[0];

    videoMediaRecorderRef.current = new MediaRecorder(
      webcamRef.current.stream,
      {
        mimeType: "video/webm",
      }
    );
    videoMediaRecorderRef.current.addEventListener(
      "dataavailable",
      ({ data }) => {
        if (data.size > 0) {
          setRecordedVideoChunks((prev) => prev.concat(data));
        }
      }
    );
    videoMediaRecorderRef.current.start();
    audioMediaRecorderRef.current = new MediaRecorder(
      new MediaStream([audioTrack]),
      {
        mimeType: "audio/webm",
      }
    );
    audioMediaRecorderRef.current.addEventListener(
      "dataavailable",
      ({ data }) => {
        if (data.size > 0) {
          setRecordedAudioChunks((prev) => prev.concat(data));
        }
      }
    );
    audioMediaRecorderRef.current.start();
  }, [webcamRef, setRecordedVideoChunks, setRecordedAudioChunks]);

  const handleStopCaptureClick = useCallback(() => {
    videoMediaRecorderRef.current.stop();
    audioMediaRecorderRef.current.stop();
    setCapturing(false);
    pause();
  }, [videoMediaRecorderRef, audioMediaRecorderRef, setCapturing]);

  return (
    <div class="w-screen h-screen flex justify-start items-center flex lato flex-col bg-zinc-900">
      <div
        class="w-full h-full absolute record-overlay"
        style={{
          top: "0px",
          right: "0px",
          zIndex: "999",
          justifyContent: "end",
          alignItems: "end",
          display: loaded && screenSize.width < 1024 ? "flex" : "none",
        }}
      >
        <div
          class="rounded-md w-full h-content text-white"
          style={{
            maxWidth: "250px",
            padding: "20px",
          }}
        >
          <div class="w-full h-content pt-10px pb-5px pl-10px pr-10px">
            <div class="flex gap-5px justify-center items-center bg-zinc-900 rounded-md">
              <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                {minuteDisplay}
              </div>

              <div class="text-[40px] text-white flex justify-center items-center pb-10px">
                :
              </div>

              <div class="flex gap-5px">
                <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                  {secTensDisplay}
                </div>

                <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                  {secOnesDisplay}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-content flex justify-start items-center pb-10px pl-10px pr-10px pt-5px flex-col gap-10px">
            {capturing ? (
              <div
                class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
                onClick={handleStopCaptureClick}
                style={{ backgroundColor: Colors.secondary }}
              >
                <GiFinishLine />
                <div class="text-center">Finish</div>
              </div>
            ) : (
              <div
                class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit bg-purple-500 hover:bg-purple-600"
                onClick={handleStartCaptureClick}
              >
                <VscDebugStart />
                <div class="text-center">Start Recording</div>
              </div>
            )}
            <div
              class="text-white bg-zinc-900 w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
              style={{ border: "white 1px solid" }}
              onClick={() => {
                router.push("/home");
              }}
            >
              <RxCross1 />
              <div class="text-center">Cancel Attempt</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1600px", width: "100vw" }}>
        <div
          class="w-full pt-10px pr-10px pl-10px pb-5px"
          style={{ height: "calc(100vh * 3/20)" }}
        >
          <div class="rounded-md w-full h-full bg-black overflow-hidden">
            <ProgressBar
              completed={time}
              isLabelVisible={false}
              bgColor="#a855f7"
              baseBgColor="black"
              maxCompleted={120}
              borderRadius="0px"
              height="8px"
            />
            <div
              class="w-full flex justify-center items-center text-white text-center px-[30px] overflow-scroll record-question-size"
              style={{ height: "calc(100% - 8px)" }}
            >
              {question}
            </div>
          </div>
        </div>
        <div class="w-full flex" style={{ height: "calc(100vh * 17/20)" }}>
          <div class="h-full pt-5px pb-10px pl-10px record-view-panel">
            <div class="rounded-md w-full h-full overflow-hidden flex justify-center items-center">
              <div
                class="w-full h-full flex justify-center overflow-hidden items-center"
                style={{ display: loaded ? "flex" : "none" }}
<<<<<<< HEAD
              > */}
              <Webcam
                mirrored={true}
                audio={true}
                ref={webcamRef}
                muted={true}
                videoConstraints={{
                  facingMode: "user",
                  frameRate: 30,
                }}
                style={{
                  objectFit: "cover",
                  display: loaded ? "block" : "none",
                  height:
                    screenSize.height < screenSize.width
                      ? (screenSize.height * 17) / 20
                      : "auto",
                  width:
                    screenSize.height > screenSize.width
                      ? screenSize.width - 20
                      : "auto",
                  aspectRatio:
                    screenSize.height < screenSize.width ? 1.777777778 : 0.5625,
                  // border: "solid 10px black",
                }}
                onUserMedia={() => {
                  setLoaded(true);
                }}
              />
              {/* </div> */}
=======
              >
                <Webcam
                  mirrored={true}
                  audio={true}
                  ref={webcamRef}
                  muted={true}
                  videoConstraints={{
                    facingMode: "user",
                    frameRate: 30,
                  }}
                  style={{
                    objectFit: "cover",
                    display: loaded ? "block" : "none",
                    height: (screenSize.height * 17) / 20,
                    aspectRatio: 1.777777778,
                    border: "solid 10px black",
                  }}
                  onUserMedia={() => {
                    setLoaded(true);
                  }}
                />
              </div>
>>>>>>> parent of 72383da (hopefully this works)
              {!loaded && (
                <div class="w-full h-full flex justify-center overflow-hidden items-center bg-black">
                  <HashLoader
                    color={Colors.purple}
                    loading={true}
                    cssOverride={{
                      display: "block",
                      margin: "0 auto",
                      borderColor: "red",
                    }}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              )}
            </div>
          </div>
          <div
            class="w-1/6 h-content pt-5px pb-10px pr-10px pl-5px record-side-panel"
            style={{ minWidth: "225px" }}
          >
            <div class="rounded-md w-full h-content bg-black text-white">
              <div class="w-full h-content pt-10px pb-5px pl-10px pr-10px">
                <div class="flex gap-5px justify-center items-center bg-zinc-900 rounded-md">
                  <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                    {minuteDisplay}
                  </div>

                  <div class="text-[40px] text-white flex justify-center items-center pb-10px">
                    :
                  </div>

                  <div class="flex gap-5px">
                    <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                      {secTensDisplay}
                    </div>

                    <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
                      {secOnesDisplay}
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full h-content flex justify-start items-center pb-10px pl-10px pr-10px pt-5px flex-col gap-10px">
                {capturing ? (
                  <div
                    class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
                    onClick={handleStopCaptureClick}
                    style={{ backgroundColor: Colors.secondary }}
                  >
                    <GiFinishLine />
                    <div class="text-center">Finish</div>
                  </div>
                ) : (
                  <div
                    class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit bg-purple-500 hover:bg-purple-600"
                    onClick={handleStartCaptureClick}
                  >
                    <VscDebugStart />
                    <div class="text-center">Start Recording</div>
                  </div>
                )}
                <div
                  class="text-white bg-zinc-900 w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
                  style={{ border: "white 1px solid" }}
                  onClick={() => {
                    router.push("/home");
                  }}
                >
                  <RxCross1 />
                  <div class="text-center">Cancel Attempt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;

// <div class="w-screen h-screen flex justify-start items-center flex lato flex-col p-10px bg-zinc-900">
//   <div
//     class="w-full bg-black rounded-md overflow-hidden text-white bg-yellow-500"
//     style={{ height: "calc(100vh * 3/20)" }}
//   >
//     <ProgressBar
//       completed={time}
//       isLabelVisible={false}
//       bgColor="#fff"
//       baseBgColor="black"
//       maxCompleted={120}
//       borderRadius="0px"
//       height="8px"
//     />
//     <div
//       class="w-full bg-black flex justify-between items-center pl-20px pr-10px"
//       style={{ height: "calc(100% - 8px)" }}
//     >
//       <div class="merriweather text-[1.5rem]">{question}</div>
//       <div
//         class="flex justify-center items-center kanit gap-10px pt-5px pb-5px pl-10px pr-10px rounded-md"
//         style={{ backgroundColor: Colors.neutral }}
//       >
//         <div class="flex gap-5px justify-center items-center">
//           <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
//             {minuteDisplay}
//           </div>
//           <div class="text-[40px] text-white flex justify-center items-center pb-10px">
//             :
//           </div>
//           <div class="flex gap-5px">
//             <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
//               {secTensDisplay}
//             </div>
//             <div class="w-[40px] h-[50px] bg-black rounded-md flex justify-center items-center text-[2rem]">
//               {secOnesDisplay}
//             </div>
//           </div>
//         </div>
//         <div className="text-[1.2rem] kanit font-bold "> Left</div>
//       </div>
//     </div>
//   </div>
//   <div
//     class="w-full flex bg-red-400"
//     style={{ height: "calc(100vh - 17/20)" }}
//   >
//     <div class="w-5/6 h-full flex justify-center items-center pt-10px pr-5px">
//       <div
//         class="bg-black rounded-md flex justify-center items-center overflow-hidden p-10px"
//         ref={webcamDivRef}
//         style={{
//           width: (screenSize.width * 5) / 6,
//           height: screenSize.height - 150,
//         }}
//       >
//         {/* <Webcam
//           mirrored={true}
//           audio={true}
//           ref={webcamRef}
//           muted={true}
//           videoConstraints={{
//             width: (screenSize.width * 5) / 6,
//             height: screenSize.height - 150,
//             facingMode: "user",
//             frameRate: 30,
//           }}
//           class="border-black border-2 border-solid"
//           style={{ display: loaded ? "flex" : "none" }}
//           onUserMedia={() => {
//             setLoaded(true);
//           }}
//         /> */}
//         {!loaded && (
//           <HashLoader
//             color={Colors.purple}
//             loading={true}
//             cssOverride={{
//               display: "block",
//               margin: "0 auto",
//               borderColor: "red",
//             }}
//             size={150}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         )}
//       </div>
//     </div>
//     <div
//       class="w-1/6 h-full flex justify-start items-start pt-10px pl-5px flex-col"
//       style={{ gap: "10px", minWidth: "225px" }}
//     >
//       <div class="w-full h-content bg-black rounded-md flex justify-start items-center p-10px flex-col gap-10px">
//         {capturing ? (
//           <div
//             class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
//             onClick={handleStopCaptureClick}
//             style={{ backgroundColor: Colors.secondary }}
//           >
//             <GiFinishLine />
//             <div class="text-center">Finish</div>
//           </div>
//         ) : (
//           <div
//             class="text-white w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit bg-purple-500 hover:bg-purple-600"
//             onClick={handleStartCaptureClick}
//           >
//             <VscDebugStart />
//             <div class="text-center">Start Recording</div>
//           </div>
//         )}
//         <div
//           class="text-white bg-zinc-900 w-full p-10px rounded-lg text-[1rem] flex justify-start items-center gap-15px cursor-pointer select-none kanit"
//           style={{ border: "white 1px solid" }}
//           onClick={() => {
//             router.push("/home");
//           }}
//         >
//           <RxCross1 />
//           <div class="text-center">Cancel Attempt</div>
//         </div>
//       </div>
//       <div class="w-full h-full bg-black rounded-md flex justify-start items-start p-10px flex-col gap-10px text-white text-[1rem]"></div>
//     </div>
//   </div>
// </div>;
