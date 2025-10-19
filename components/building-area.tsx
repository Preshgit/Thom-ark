"use client";
import type { NextPage } from "next";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";

export type BuildingAreaType = {
  className?: string;
};

const BuildingArea: NextPage<BuildingAreaType> = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-1 box-border max-w-full text-center text-num-50 text-thom-black font-inter-tight ${className}`}
    >
      <Box className="bg-gray-200 overflow-hidden flex items-start !pt-[89.5px] !pb-[89.5px] !pl-num-0 !pr-num-0 box-border max-w-full mq450:!pt-[25px] mq450:!pb-[25px] mq450:box-border mq900:!pt-[38px] mq900:!pb-[38px] mq900:box-border mq1325:!pt-[58px] mq1325:!pb-[58px] mq1325:box-border">
        <Box className="w-[1728px] overflow-hidden shrink-0 flex flex-col items-center gap-[98px] max-w-full mq450:gap-6 mq900:gap-[49px]">
          <Box className="w-[868px] flex flex-col items-center gap-5">
            <Typography
              className="!m-0 self-stretch relative mq450:text-num-30 mq450:leading-num-39 mq900:text-num-40 mq900:leading-num-52"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "500",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              Our Products in Action
            </Typography>
            <Typography
              className="!m-0 self-stretch relative text-gray-700 mq450:text-num-18 mq450:leading-num-23 mq900:text-num-24 mq900:leading-num-31"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "30px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              From aluminium windows and doors to roofing and ceiling systems —
              see how Thom-Ark brings strength and style to every space.
            </Typography>
          </Box>
          <Box className="w-[2072px] h-[1090px] relative">
            <Image
              className="absolute top-[0px] left-[0px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images@2x.png"
            />
            <Image
              className="absolute top-[370px] left-[172px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images5@2x.png"
            />
            <Image
              className="absolute top-[740px] left-[0px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images10@2x.png"
            />
            <Image
              className="absolute top-[0px] left-[960px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images8@2x.png"
            />
            <Image
              className="absolute top-[370px] left-[1132px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images7@2x.png"
            />
            <Image
              className="absolute top-[740px] left-[960px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images4@2x.png"
            />
            <Image
              className="absolute top-[0px] left-[480px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images1@2x.png"
            />
            <Image
              className="absolute top-[370px] left-[652px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images2@2x.png"
            />
            <Image
              className="absolute top-[740px] left-[480px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images9@2x.png"
            />
            <Image
              className="absolute top-[0px] left-[1440px] w-num-460 h-num-350 object-cover"
              loading="lazy"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images6@2x.png"
            />
            <Image
              className="absolute top-[370px] left-[1612px] w-num-460 h-num-350 object-cover"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images3@2x.png"
            />
            <Image
              className="absolute top-[740px] left-[1440px] w-num-460 h-num-350 object-cover"
              width={460}
              height={350}
              sizes="100vw"
              alt=""
              src="/Product-Images11@2x.png"
            />
          </Box>
          <Box className="w-[564px] flex flex-col items-center gap-[30px] text-num-30 text-gray-600">
            <Typography
              className="!m-0 self-stretch relative mq450:text-num-18 mq450:leading-num-23 mq900:text-num-24 mq900:leading-num-31"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to start building with Thom-Ark today.
            </Typography>
            <Button
              className="w-[235px] h-num-50 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
              startIcon={<img width="20px" height="20px" src="/vector-3.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#d91d1d",
                border: "rgba(255, 255, 255, 0.1) solid 1px",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#d91d1d" },
                width: 235,
                height: 50,
              }}
            >
              Get in touch with us
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default BuildingArea;
