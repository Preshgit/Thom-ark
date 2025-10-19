import type { NextPage } from "next";
import { Box } from "@mui/material";
import FrameComponent from "../components/frame-component";
import CoreValues from "../components/core-values";
import FrameComponent1 from "../components/frame-component1";
import ServicesArea from "../components/services-area";
import AboutArea from "../components/about-area";
import FrameComponent2 from "../components/frame-component2";
import BuildingArea from "../components/building-area";
import ClientModule from "../components/client-module";
import SignupRegion from "../components/signup-region";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";

const LightMode: NextPage = () => {
  return (
    <Box className="w-full relative bg-white overflow-hidden flex flex-col items-start !pt-num-0 !pb-num-42 !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent />
      <CoreValues />
      <main className="self-stretch h-[2849.5px] flex flex-col items-start max-w-full mq450:h-num-auto mq900:h-num-auto mq1325:h-num-auto mq1700:h-num-auto">
        <FrameComponent1 />
        <ServicesArea />
      </main>
      <AboutArea />
      <FrameComponent2 />
      <BuildingArea />
      <ClientModule />
      <SignupRegion />
      <FrameComponent3 />
      <FrameComponent4 />
    </Box>
  );
};

export default LightMode;
