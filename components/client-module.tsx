"use client";
import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type ClientModuleType = {
  className?: string;
};

const ClientModule: NextPage<ClientModuleType> = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-1 box-border max-w-full ${className}`}
    >
      <Box className="h-[882px] w-[1728px] overflow-hidden shrink-0 flex flex-col items-center justify-center !pt-num-100 !pb-num-100 !pl-num-0 !pr-num-0 box-border max-w-full mq900:!pt-num-42 mq900:!pb-num-42 mq900:box-border mq1325:!pt-num-65 mq1325:!pb-num-65 mq1325:box-border mq1700:h-num-auto">
        <Box className="w-[1800px] h-[751.4px] flex items-start relative max-w-[105%] mq1700:h-num-auto">
          <Box className="w-[1800px] flex flex-col items-center max-w-full z-[0] mq450:gap-6 mq900:gap-12">
            <Box className="self-stretch flex flex-col items-center gap-24 max-w-full mq450:gap-6 mq900:gap-12">
              <section className="w-[1536px] flex items-start justify-between gap-5 text-left text-num-50 text-black font-inter-tight">
                <Box className="w-[1102px] flex flex-col items-start gap-[16.2px]">
                  <Typography
                    className="!m-0 self-stretch relative mq450:text-num-30 mq450:leading-num-39 mq900:text-num-40 mq900:leading-num-52"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ lineHeight: "130%", letterSpacing: "-0.02em" }}
                  >
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                    >{`Our `}</Typography>
                    <i className="font-playfair-display">Satisfied Clients</i>
                  </Typography>
                  <Typography
                    className="!m-0 self-stretch relative text-gray-600 mq450:text-num-18 mq450:leading-num-23 mq900:text-num-24 mq900:leading-num-31"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{
                      fontWeight: "400",
                      fontSize: "30px",
                      lineHeight: "130%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    From residential projects to large-scale architectural
                    developments, our clients—both locally and
                    internationally—trust us for durable aluminium products,
                    precision fabrication, and seamless installation. Here’s how
                    THOM-ARK NIGERIA LIMITED has helped them bring their visions
                    to life.
                  </Typography>
                </Box>
                <Box className="flex items-center gap-6">
                  <Image
                    className="h-[80.1px] w-[82.1px] rounded-[200.4px] object-contain"
                    width={82.1}
                    height={80.1}
                    sizes="100vw"
                    alt=""
                    src="/right-arrow.svg"
                  />
                  <Image
                    className="h-[80.1px] w-[82.1px] rounded-[200.4px]"
                    width={82.1}
                    height={80.1}
                    sizes="100vw"
                    alt=""
                    src="/right-arrow.svg"
                  />
                </Box>
              </section>
              <Box className="self-stretch flex items-center gap-9 max-w-full mq450:gap-[18px] mq1700:flex-wrap">
                <section className="h-[415.2px] w-num-576 rounded-num-28_8 bg-gray-500 overflow-hidden shrink-0 flex items-start !pt-[59.5px] !pb-[60.3px] !pl-num-30 !pr-num-30 box-border max-w-full text-center text-num-30 text-gray-600 font-inter-tight mq450:!pt-num-39 mq450:!pb-num-39 mq450:box-border">
                  <Box className="w-[516px] flex flex-col items-center justify-center gap-[28.8px] max-w-full">
                    <Image
                      className="w-24 h-24 rounded-[86.4px] object-cover hidden"
                      width={96}
                      height={96}
                      sizes="100vw"
                      alt=""
                      src="/Background-Border1@2x.png"
                    />
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
                      THOM-ARK delivered beyond expectations on our aluminium
                      windows and roofing. The finishing was sleek, and the
                      installation was handled with true professionalism.
                    </Typography>
                    <Box className="self-stretch flex flex-col items-center gap-[9.6px] text-num-24 text-black">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-25"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "700",
                          lineHeight: "130%",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Mr. Adewale O.
                      </Typography>
                      <Typography
                        className="!m-0 self-stretch relative text-gray-600 mq450:text-num-19 mq450:leading-num-25"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "400",
                          lineHeight: "130%",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Lagos (Residential Project)
                      </Typography>
                    </Box>
                  </Box>
                </section>
                <section className="h-[415.2px] w-num-576 rounded-num-28_8 bg-gray-500 overflow-hidden shrink-0 flex flex-col items-start !pt-[79.5px] !pb-num-0 !pl-[15px] !pr-[15px] box-border gap-[78.2px] max-w-full text-center text-num-30 text-gray-600 font-inter-tight mq450:gap-5 mq900:gap-[39px] mq900:!pt-[52px] mq900:box-border">
                  <Box className="!mt-[-80.7px] flex items-start justify-end !pt-num-0 !pb-num-0 !pl-num-2 !pr-num-2 box-border max-w-full">
                    <Box className="h-[3.6px] w-[298.8px] relative border-royalblue-100 border-solid border-t-[3.6px] box-border" />
                  </Box>
                  <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-13 !pr-[15px] box-border max-w-full">
                    <Box className="w-[518px] flex flex-col items-center gap-[28.8px] max-w-full">
                      <Image
                        className="w-24 h-24 rounded-[57.6px] object-cover hidden"
                        width={96}
                        height={96}
                        sizes="100vw"
                        alt=""
                        src="/Background-Border@2x.png"
                      />
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
                        Their suspended ceiling installations completely
                        transformed our office space. The attention to detail
                        and adherence to international standards stood out.
                      </Typography>
                      <Box className="self-stretch flex flex-col items-center gap-[9.6px] text-num-24 text-black">
                        <Typography
                          className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-25"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "700",
                            lineHeight: "130%",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          Global Tech Solutions
                        </Typography>
                        <Typography
                          className="!m-0 self-stretch relative text-gray-600 mq450:text-num-19 mq450:leading-num-25"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "400",
                            lineHeight: "130%",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          Abuja
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="w-[244.8px] h-[3.6px] relative border-royalblue-100 border-solid border-t-[3.6px] box-border" />
                </section>
                <section className="h-[414px] w-num-576 rounded-num-28_8 bg-gray-500 overflow-hidden shrink-0 flex flex-col items-center justify-center !pt-[26px] !pb-[26px] !pl-num-30 !pr-num-30 box-border max-w-full text-center text-num-30 text-gray-600 font-inter-tight">
                  <Box className="self-stretch flex flex-col items-center justify-center gap-[28.8px]">
                    <Image
                      className="w-24 h-24 rounded-[86.4px] object-cover hidden"
                      width={96}
                      height={96}
                      sizes="100vw"
                      alt=""
                      src="/Background-Border2@2x.png"
                    />
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
                      As an international partner, we were impressed by their
                      ability to meet codified standards. Working with THOM-ARK
                      made sourcing aluminium products in Nigeria seamless and
                      reliable.
                    </Typography>
                    <Box className="self-stretch flex flex-col items-center gap-[9.6px] text-num-24 text-black">
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-25"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "700",
                          lineHeight: "130%",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        EuroBuild Ltd.
                      </Typography>
                      <Typography
                        className="!m-0 self-stretch relative text-gray-600 mq450:text-num-19 mq450:leading-num-25"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "400",
                          lineHeight: "130%",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Operations Head UK
                      </Typography>
                    </Box>
                  </Box>
                </section>
              </Box>
            </Box>
          </Box>
          <Box className="h-[313.2px] w-[415.2px] absolute !!m-[0 important] top-[707.3px] left-[1450.8px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] overflow-hidden shrink-0 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
          <Box className="h-[434.4px] w-[416.4px] absolute !!m-[0 important] top-[707px] left-[36px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] overflow-hidden shrink-0 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
        </Box>
      </Box>
    </section>
  );
};

export default ClientModule;
