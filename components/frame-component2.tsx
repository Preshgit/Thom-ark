"use client";
import type { NextPage } from "next";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[836px] flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-1 box-border max-w-full text-left text-num-50 text-thom-black font-inter-tight mq450:h-num-auto ${className}`}
    >
      <Box className="flex-1 border-gray-1200 border-solid border-t-[2px] border-b-[2px] box-border flex items-start !pt-num-0 !pb-[1.2px] !pl-num-0 !pr-num-0 max-w-full">
        <Box className="flex-1 bg-gray-100 overflow-hidden flex flex-col items-start !pt-num-100 !pb-num-100 !pl-num-80 !pr-num-80 box-border max-w-full mq450:!pt-num-42 mq450:!pb-num-42 mq450:box-border mq900:!pt-num-65 mq900:!pb-num-65 mq900:!pl-10 mq900:!pr-10 mq900:box-border">
          <Box className="self-stretch flex flex-col items-center gap-[100px] max-w-full mq450:gap-[25px] mq900:gap-[50px]">
            <Box className="w-num-667 h-[85px] flex flex-col items-start gap-[15px] max-w-full">
              <Typography
                className="!m-0 w-num-667 h-[65px] relative inline-block mq450:text-num-30 mq450:leading-num-39 mq900:text-num-40 mq900:leading-num-52"
                variant="inherit"
                variantMapping={{ inherit: "h2" }}
                sx={{
                  fontWeight: "500",
                  lineHeight: "130%",
                  letterSpacing: "-0.02em",
                }}
              >
                Why Thom Ark Nigeria Limited?
              </Typography>
              <Box className="w-num-667 flex items-start justify-center !pt-num-0 !pb-num-0 !pl-5 !pr-5 box-border max-w-full">
                <Box className="h-num-5 w-[297px] relative bg-thom-blue" />
              </Box>
            </Box>
            <section className="w-num-1548 h-[300.8px] flex flex-col items-end relative max-w-full text-left text-num-30 text-black font-inter-tight mq450:h-num-auto">
              <Box className="w-num-438 flex items-start gap-[28.8px] shrink-0 max-w-full z-[3] mq450:flex-wrap">
                <Image
                  className="h-num-38_4 w-num-38_4 relative"
                  width={38.4}
                  height={38.4}
                  sizes="100vw"
                  alt=""
                  src="/vuesax-linear-status-up1.svg"
                />
                <Box className="w-[279.6px] flex flex-col items-start gap-[14.4px]">
                  <Typography
                    className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "500" }}
                  >
                    Seamless Installation
                  </Typography>
                  <div className="self-stretch relative text-num-21_6 leading-[140%] text-gray-700 mq450:text-num-17 mq450:leading-num-24">
                    Expert hands ensure flawless finishing.
                  </div>
                </Box>
              </Box>
              <Box className="flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[555px] !pr-[555px] box-border max-w-full !mt-[-110.4px] relative mq450:!pl-5 mq450:!pr-5 mq450:box-border mq900:!pl-[138px] mq900:!pr-[138px] mq900:box-border mq1325:!pl-[277px] mq1325:!pr-[277px] mq1325:box-border">
                <Box className="w-num-438 flex items-start gap-[28.8px] shrink-0 max-w-full mq900:flex-wrap">
                  <Image
                    className="h-num-38_4 w-num-38_4 relative"
                    width={38.4}
                    height={38.4}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-status-up1.svg"
                  />
                  <Box className="flex-1 flex flex-col items-start gap-[14.4px] min-w-num-241">
                    <Typography
                      className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                      variant="inherit"
                      variantMapping={{ inherit: "h2" }}
                      sx={{ fontWeight: "500" }}
                    >
                      Tailored to Your Needs
                    </Typography>
                    <div className="self-stretch relative text-num-21_6 leading-[140%] text-gray-700 mq450:text-num-17 mq450:leading-num-24">
                      Custom windows, doors, and roofing that fit perfectly.
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="w-num-1548 flex items-start !pt-num-0 !pb-[2.8px] !pl-num-0 !pr-num-0 box-border max-w-full !mt-[-110.4px] relative">
                <Box className="h-num-298 w-[1052px] relative shrink-0 max-w-full mq450:h-num-auto mq450:min-h-[298px]">
                  <Box className="absolute h-full top-[0px] bottom-[0px] left-[497px] w-[555px]">
                    <Image
                      className="absolute top-[0px] left-[0px] max-w-full overflow-hidden h-num-298 object-contain z-[1]"
                      width={1}
                      height={298}
                      sizes="100vw"
                      alt=""
                      src="/Vector-823.svg"
                    />
                    <Image
                      className="absolute top-[0px] left-[555px] max-w-full overflow-hidden h-num-298 object-contain z-[1]"
                      width={1}
                      height={298}
                      sizes="100vw"
                      alt=""
                      src="/Vector-823.svg"
                    />
                  </Box>
                  <Box className="absolute top-[15px] left-[0px] w-num-438 flex items-start gap-[28.8px] max-w-full mq450:flex-wrap">
                    <Image
                      className="h-num-38_4 w-num-38_4 relative"
                      width={38.4}
                      height={38.4}
                      sizes="100vw"
                      alt=""
                      src="/vuesax-linear-status-up1.svg"
                    />
                    <Box className="flex-1 flex flex-col items-start gap-[14.4px] min-w-num-241">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                        variant="inherit"
                        variantMapping={{ inherit: "h2" }}
                        sx={{ fontWeight: "500" }}
                      >
                        Quality Aluminium Solutions
                      </Typography>
                      <Typography
                        className="!m-0 self-stretch relative text-gray-700 mq450:text-num-17 mq450:leading-num-24"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "400",
                          fontSize: "21.6px",
                          lineHeight: "140%",
                        }}
                      >
                        Durable, stylish, and built to last.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="w-num-438 flex items-start gap-[28.8px] shrink-0 max-w-full z-[1] !mt-[-110.4px] relative mq450:flex-wrap">
                <Image
                  className="h-num-38_4 w-num-38_4 relative"
                  width={38.4}
                  height={38.4}
                  sizes="100vw"
                  alt=""
                  src="/vuesax-linear-status-up1.svg"
                />
                <Box className="flex-1 flex flex-col items-start gap-[14.4px] min-w-num-241">
                  <Typography
                    className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "500" }}
                  >
                    Trusted by Many
                  </Typography>
                  <div className="self-stretch relative text-num-21_6 leading-[140%] text-gray-700 mq450:text-num-17 mq450:leading-num-24">
                    Proven excellence in homes and businesses across Nigeria.
                  </div>
                </Box>
              </Box>
              <Image
                className="w-[1477px] h-px absolute !!m-[0 important] top-[146px] left-[63px] max-h-full"
                width={1477}
                height={1}
                sizes="100vw"
                alt=""
                src="/Vector-821.svg"
              />
              <Box className="w-num-1548 flex items-start max-w-full !mt-[-110.4px] relative">
                <Box className="h-[110.4px] flex flex-col items-start shrink-0 max-w-full mq450:h-num-auto">
                  <Box className="w-num-438 flex items-start gap-[28.8px] max-w-full z-[2] mq450:flex-wrap">
                    <Image
                      className="h-num-38_4 w-num-38_4 relative"
                      width={38.4}
                      height={38.4}
                      sizes="100vw"
                      alt=""
                      src="/vuesax-linear-status-up1.svg"
                    />
                    <Box className="flex-1 flex flex-col items-start gap-[14.4px] min-w-num-241">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                        variant="inherit"
                        variantMapping={{ inherit: "h2" }}
                        sx={{ fontWeight: "500" }}
                      >
                        Standard, Local Touch
                      </Typography>
                      <div className="self-stretch relative text-num-21_6 leading-[140%] text-gray-700 mq450:text-num-17 mq450:leading-num-24">
                        Products crafted to meet international best practices.
                      </div>
                    </Box>
                  </Box>
                  <Box className="w-[993px] flex items-start justify-end max-w-full !mt-[-95.4px] relative">
                    <Box className="w-num-438 flex items-start gap-[28.8px] max-w-full mq450:flex-wrap">
                      <Image
                        className="h-num-38_4 w-num-38_4 relative"
                        width={38.4}
                        height={38.4}
                        sizes="100vw"
                        alt=""
                        src="/vuesax-linear-status-up1.svg"
                      />
                      <Box className="flex-1 flex flex-col items-start gap-[14.4px] min-w-num-241">
                        <Typography
                          className="!m-0 self-stretch relative mq450:text-num-18 mq900:text-num-24"
                          variant="inherit"
                          variantMapping={{ inherit: "h2" }}
                          sx={{ fontWeight: "500" }}
                        >
                          {" "}
                          Innovative Designs
                        </Typography>
                        <Typography
                          className="!m-0 self-stretch relative text-gray-700 mq450:text-num-17 mq450:leading-num-24"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "400",
                            fontSize: "21.6px",
                            lineHeight: "140%",
                          }}
                        >
                          Modern styles that elevate every space.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </section>
            <Button
              className="w-num-179 h-num-50 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
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
                width: 179,
                height: 50,
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent2;
