import type { NextPage } from "next";
import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import ContentArea from "./content-area";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <Box
      className={`self-stretch bg-gray-100 border-gray-800 border-solid border-b-[1px] box-border flex flex-col items-start !pt-num-100 !pb-[98px] !pl-num-80 !pr-num-80 relative gap-2.5 max-w-full z-[1] text-left text-[45px] text-gray-100 font-inter-tight mq900:!pt-num-42 mq900:!pb-num-42 mq900:!pl-10 mq900:!pr-10 mq900:box-border mq1325:!pt-num-65 mq1325:!pb-16 mq1325:box-border ${className}`}
    >
      <Box className="self-stretch flex items-start justify-between gap-5 max-w-full z-[0] mq450:h-num-auto mq450:flex-wrap mq450:gap-5 mq900:h-num-auto mq900:flex-wrap mq900:gap-5 mq1325:h-num-auto mq1325:flex-wrap mq1325:gap-5 mq1700:h-num-auto mq1700:flex-wrap mq1700:gap-5">
        <section className="w-[431px] flex flex-col items-start gap-[50px] max-w-full mq450:flex-1 mq450:gap-[25px] mq900:flex-1 mq900:min-w-full mq1325:flex-1 mq1700:flex-1">
          <ContentArea discoverHighPerformingProducts="Discover high-performing products that are purpose-designed for their environment, tailor-made to specific codes and fully tested to protect against the most extreme conditions." />
          <Button
            className="w-[235px] h-num-50 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
            startIcon={<img width="20px" height="20px" src="/vector-3.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fdfdfd",
              fontSize: "18",
              background: "#d91d1d",
              border: "rgba(255, 255, 255, 0.1) solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#d91d1d" },
              width: 235,
              height: 50,
            }}
          >
            Contact Us for One
          </Button>
        </section>
        <Box className="h-[866px] w-[1109px] flex items-start flex-wrap content-start gap-5 max-w-full mq450:flex-1 mq900:flex-1 mq1325:flex-1 mq1325:min-w-full mq1700:flex-1">
          <Box className="h-num-423 w-num-356 flex items-end justify-center !pt-num-30 !pb-num-30 !pl-5 !pr-5 box-border bg-[url('/Frame-2121453528@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <Typography
              className="!m-0 w-[306px] relative inline-block shrink-0 mq450:text-[27px] mq450:leading-[29px] mq900:text-[36px] mq900:leading-[38px]"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "106%",
                letterSpacing: "-0.02em",
              }}
            >
              Polished Aluminium Slate
            </Typography>
          </Box>
          <Image
            className="h-num-423 w-[357px] relative object-cover"
            loading="lazy"
            width={357}
            height={423}
            sizes="100vw"
            alt=""
            src="/Rectangle-24727@2x.png"
          />
          <Image
            className="h-num-423 w-num-356 relative object-cover"
            loading="lazy"
            width={356}
            height={423}
            sizes="100vw"
            alt=""
            src="/Rectangle-24728@2x.png"
          />
          <Image
            className="h-num-423 w-num-356 relative object-cover"
            loading="lazy"
            width={356}
            height={423}
            sizes="100vw"
            alt=""
            src="/Rectangle-24729@2x.png"
          />
          <Image
            className="h-num-423 w-[357px] relative object-cover"
            loading="lazy"
            width={357}
            height={423}
            sizes="100vw"
            alt=""
            src="/Rectangle-24730@2x.png"
          />
          <Image
            className="h-num-423 w-num-356 relative object-cover"
            loading="lazy"
            width={356}
            height={423}
            sizes="100vw"
            alt=""
            src="/Rectangle-24731@2x.png"
          />
        </Box>
      </Box>
      <Box className="w-num-34 h-[41.5px] absolute !!m-[0 important] top-[300.8px] left-[792px] overflow-hidden flex items-center justify-center z-[1]">
        <Image
          className="w-full h-full object-cover absolute left-[3px] top-[3px] [transform:scale(1)]"
          loading="lazy"
          width={34}
          height={41.5}
          sizes="100vw"
          alt=""
          src="/Vector-232-Stroke.svg"
        />
      </Box>
    </Box>
  );
};

export default FrameComponent1;
