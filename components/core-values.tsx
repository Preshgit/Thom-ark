import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";

export type CoreValuesType = {
  className?: string;
};

const CoreValues: NextPage<CoreValuesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-100 border-gray-800 border-solid border-b-[1px] box-border overflow-hidden flex items-start !pt-[86px] !pb-[83px] !pl-num-0 !pr-num-0 max-w-full mq450:!pt-14 mq450:!pb-[54px] mq450:box-border ${className}`}
    >
      <Box className="!ml-[-183px] h-[227px] w-[1913px] overflow-x-auto shrink-0 flex items-center gap-[148.4px] opacity-num-0_5 max-w-[111%] mq450:gap-[37px] mq900:h-num-auto mq900:gap-[74px]">
        <section className="h-num-348_2 w-[795.6px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq900:h-num-auto">
          <Box className="flex items-center [row-gap:20px] max-w-full mq900:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              1
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq900:text-num-54 mq900:leading-num-104 mq900:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              INNOVATION
            </Typography>
          </Box>
        </section>
        <section className="h-num-348_2 w-[517px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq900:h-num-auto">
          <Box className="flex items-center max-w-full mq900:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209 mq900:flex-1"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              2
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq450:min-w-full mq900:text-num-54 mq900:leading-num-104 mq900:flex-1 mq900:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              TRUST
            </Typography>
          </Box>
        </section>
        <section className="h-num-348_2 w-[747.4px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq900:h-num-auto">
          <Box className="flex items-center [row-gap:20px] max-w-full mq900:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              3
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq900:text-num-54 mq900:leading-num-104 mq900:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              INTEGRITY
            </Typography>
          </Box>
        </section>
        <section className="h-num-348_2 w-[1165.3px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq1325:h-num-auto">
          <Box className="flex items-center shrink-0 [row-gap:20px] max-w-full mq1325:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              4
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq900:text-num-54 mq900:leading-num-104 mq1325:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              ACCOUNTABILITY
            </Typography>
          </Box>
        </section>
        <section className="h-num-348_2 w-[1240.3px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq1325:h-num-auto">
          <Box className="flex items-center [row-gap:20px] max-w-full mq1325:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              5
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq900:text-num-54 mq900:leading-num-104 mq1325:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              PROFESSIONALISM
            </Typography>
          </Box>
        </section>
        <section className="h-num-348_2 w-[699.2px] shrink-0 flex items-start !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-267_9 text-thom-black font-inter-tight mq900:h-num-auto">
          <Box className="flex items-center [row-gap:20px] max-w-full mq900:flex-wrap">
            <Typography
              className="!m-0 relative opacity-num-0_03 mq450:text-num-67 mq450:leading-num-139 mq900:text-num-107 mq900:leading-num-209"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "900",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              6
            </Typography>
            <Typography
              className="!m-0 relative inline-block max-w-full !ml-[-53.6px] mq450:text-num-33 mq450:leading-num-70 mq900:text-num-54 mq900:leading-num-104 mq900:!ml-0"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "400",
                fontSize: "133.9px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
              }}
            >
              EMPATHY
            </Typography>
          </Box>
        </section>
      </Box>
    </section>
  );
};

export default CoreValues;
