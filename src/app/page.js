"use client";

import React from "react";
import RecordComponent from "@/components/record";
import ReviewComponent from "@/components/review";
import { useSelector } from "react-redux";
import HomeComponent from "@/components/home";

export default function Home() {
  // const url = useSelector((state) => state.urlReducer.url);
  // return url ? <ReviewComponent /> : <RecordComponent />;
  // // return <ReviewComponent />;

  return <HomeComponent />;
}
