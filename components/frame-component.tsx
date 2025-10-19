import type { NextPage } from "next";
import { Typography, Box, Button } from "@mui/material";
import Navs from "./navs";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-1 box-border max-w-full ${className}`}
    >
      <Box className="flex-1 flex items-start max-w-full">
        <Box className="flex-1 overflow-hidden flex flex-col items-end !pt-num-0 !pb-[134px] !pl-num-0 !pr-num-0 box-border gap-[254px] bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[63px] mq900:gap-[127px] mq900:!pb-[57px] mq900:box-border mq1325:!pb-[87px] mq1325:box-border">
          <Navs property1="home" />
          <Box className="self-stretch flex items-start justify-end !pt-num-0 !pb-num-0 !pl-num-80 !pr-[79px] box-border max-w-full mq900:!pl-10 mq900:!pr-num-39 mq900:box-border">
            <Box className="self-stretch flex-1 flex items-end justify-center flex-wrap content-end gap-[417px] max-w-full mq450:gap-[52px] mq900:gap-[104px] mq1325:gap-52">
              <section className="h-[514px] flex-1 flex items-start min-w-[529px] max-w-full text-left text-[80px] text-white font-inter-tight mq900:min-w-full">
                <Box className="w-[814px] flex flex-col items-start gap-[50px] max-w-full mq450:gap-[25px]">
                  <Box className="self-stretch flex flex-col items-start gap-[30px]">
                    <Box className="self-stretch flex flex-col items-start">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-24 mq900:text-num-40"
                        variant="inherit"
                        variantMapping={{ inherit: "h1" }}
                      >
                        <Typography
                          className="!m-0"
                          variant="inherit"
                          sx={{ fontWeight: "300" }}
                        >{`Quality Architectural &`}</Typography>
                        <Typography
                          className="!m-0"
                          variant="inherit"
                          sx={{ fontFamily: "'Playfair Display'" }}
                        >
                          <i>{`Allied Products & Services`}</i>
                        </Typography>
                      </Typography>
                    </Box>
                    <Box className="self-stretch flex flex-col items-start text-num-30 text-gray-900">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                        variant="inherit"
                        variantMapping={{ inherit: "h2" }}
                        sx={{ fontWeight: "400" }}
                      >
                        Delivering innovative aluminium solutions, roofing, and
                        ceiling systems designed to redefine modern spaces.
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    className="w-num-179 h-num-50 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
                    startIcon={
                      <img width="20px" height="20px" src="/vector-3.svg" />
                    }
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
                      width: 179,
                      height: 50,
                    }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </section>
              <Box className="flex items-center gap-1 max-w-full mq450:flex-wrap">
                <Box className="h-num-3 w-num-34 relative bg-crimson" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
                <Box className="h-num-3 w-num-34 relative bg-gray-100" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent;
