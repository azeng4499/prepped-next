"use client";

import React, { useState, useEffect } from "react";
import RecordComponent from "@/components/record";
import ReviewComponent from "@/components/review";
import HashLoader from "react-spinners/HashLoader";
import Colors from "@/utils/colors";
import { dehash } from "@/utils/hash-functions";

const page = ({ params }) => {
  const [url, setUrl] = useState(null);
  const [transcription, setTranscription] = useState(null);
  const [strengthsPara, setStrengthsPara] = useState(null);
  const [improvePara, setImprovePara] = useState(null);
  const [rating, setRating] = useState(0);
  const [recordedVideoChunks, setRecordedVideoChunks] = useState([]);
  const [recordedAudioChunks, setRecordedAudioChunks] = useState([]);

  const handleTranscription = async () => {
    if (recordedVideoChunks.length) {
      const videoBlob = new Blob(recordedVideoChunks, {
        type: "video/webm",
      });
      const temp_url = URL.createObjectURL(videoBlob);
      setUrl(temp_url);
    }

    if (recordedAudioChunks.length) {
      const audioBlob = new Blob(recordedAudioChunks, {
        type: "audio/webm",
      });

      let formData = new FormData();
      formData.append("audio-file", audioBlob);

      await fetch("http://localhost:4000/whisper", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTranscription(res.transcription);
        });
    }
  };

  const handleBackend = async () => {
    let formData = new FormData();
    formData.append("transcript", transcription);

    await fetch("http://localhost:4000/completions", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setStrengthsPara(res.strengths);
        setImprovePara(res.improvements);
        setRating(res.rating);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (transcription) {
      handleBackend();
    }
  }, [transcription]);

  useEffect(() => {
    handleTranscription();
  }, [recordedVideoChunks]);

  // return (
  //   <ReviewComponent
  //     transcription={transcription}
  //     url={url}
  //     strengthsPara={strengthsPara}
  //     improvePara={improvePara}
  //     rating={rating}
  //     question={dehash(params.id)}
  //   />
  // );

  return transcription &&
    url &&
    strengthsPara &&
    improvePara &&
    rating !== 0 ? (
    <ReviewComponent
      transcription={transcription}
      url={url}
      strengthsPara={strengthsPara}
      improvePara={improvePara}
      rating={rating}
      question={dehash(params.id)}
    />
  ) : !transcription &&
    !url &&
    !strengthsPara &&
    !improvePara &&
    rating === 0 ? (
    <RecordComponent
      setRecordedAudioChunks={setRecordedAudioChunks}
      setRecordedVideoChunks={setRecordedVideoChunks}
      question={dehash(params.id)}
    />
  ) : (
    <div class="w-screen h-screen bg-black flex justify-center items-center">
      <div class="h-1/3 w-content flex flex-col justify-between">
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
        <div class="text-purple-500 font-bold">Processing your recording</div>
      </div>
    </div>
  );
};

export default page;
