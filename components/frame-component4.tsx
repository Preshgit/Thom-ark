import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start !pt-num-0 !pb-num-0 !pl-[81px] !pr-[81px] box-border max-w-full text-left text-num-21_6 text-gray-700 font-inter-tight mq900:!pl-10 mq900:!pr-10 mq900:box-border ${className}`}
    >
      <Box className="flex-1 flex flex-col items-start gap-[40.2px] max-w-full mq900:gap-5">
        <Box className="w-[1568px] flex flex-col items-end gap-[70px] shrink-0 max-w-full z-[2] mq450:gap-[17px] mq900:gap-[35px]">
          <Box className="self-stretch flex items-end justify-between gap-[-13.1px] [row-gap:20px] max-w-full mq1700:flex-wrap mq1700:gap-[-13.1px]">
            <section className="w-[510px] flex flex-col items-start gap-[107px] max-w-full text-left text-[57.6px] text-thom-black font-inter-tight mq450:gap-[27px] mq900:gap-[53px]">
              <Box className="self-stretch flex flex-col items-start gap-2.5">
                <Typography
                  className="!m-0 self-stretch relative mq450:text-[35px] mq900:text-[46px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                >
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                  >
                    Join Our
                  </Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ fontFamily: "Outfit" }}
                  >{` `}</Typography>
                  <i className="font-playfair-display">Newsletter</i>
                </Typography>
                <Typography
                  className="!m-0 self-stretch relative text-gray-700 mq450:text-num-17"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400", fontSize: "21.6px" }}
                >
                  Subscribe for the latest real estate news and insights
                </Typography>
              </Box>
              <Box className="self-stretch flex flex-col items-start gap-[28.8px] text-[28.8px]">
                <Typography
                  className="!m-0 self-stretch relative mq450:text-[23px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "400" }}
                >
                  Contact us
                </Typography>
                <Box className="self-stretch flex flex-col items-start gap-[15px] text-num-18 text-gray-300">
                  <Box className="self-stretch flex items-start gap-[14.4px]">
                    <Image
                      className="h-num-19_2 w-num-19_2 relative"
                      width={19.2}
                      height={19.2}
                      sizes="100vw"
                      alt=""
                      src="/vuesax-linear-location.svg"
                    />
                    <div className="w-[385px] relative inline-block shrink-0">
                      Office : Suite C 320, 3rd Floor, Ikeja Plaza, 81, Mobolaji
                      Bank Anthony Way, Ikeja, Lagos, Nigeria.
                    </div>
                  </Box>
                  <Box className="flex items-center gap-[14.4px] text-num-20">
                    <Image
                      className="h-num-19_2 w-num-19_2 relative"
                      width={19.2}
                      height={19.2}
                      sizes="100vw"
                      alt=""
                      src="/Outline-call.svg"
                    />
                    <Typography
                      className="!m-0 relative mq450:text-num-16"
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "400" }}
                    >
                      +234 9023-6129-26
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-[14.4px] text-num-21_6">
                    <Image
                      className="h-num-19_2 w-num-19_2 relative"
                      width={19.2}
                      height={19.2}
                      sizes="100vw"
                      alt=""
                      src="/vuesax-linear-sms.svg"
                    />
                    <Typography
                      className="!m-0 relative mq450:text-num-17"
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "400" }}
                    >
                      info@thom-ark.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </section>
            <section className="w-[643.2px] flex flex-col items-center gap-[38px] max-w-full shrink-0 text-left text-num-21_6 text-gray-700 font-inter-tight mq900:gap-[19px]">
              <Image
                className="w-[253px] relative max-h-full object-cover"
                loading="lazy"
                width={253}
                height={97}
                sizes="100vw"
                alt=""
                src="/thom-ark-logo-22@2x.png"
              />
              <Box className="self-stretch flex items-center gap-[58.8px] mq450:hidden mq900:gap-[29px]">
                <Typography
                  className="!m-0 relative"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400" }}
                >
                  Home
                </Typography>
                <Typography
                  className="!m-0 relative"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400" }}
                >
                  About us
                </Typography>
                <Typography
                  className="!m-0 relative"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400" }}
                >
                  Products
                </Typography>
                <Typography
                  className="!m-0 relative"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400" }}
                >
                  Services
                </Typography>
                <Typography
                  className="!m-0 relative"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "400" }}
                >
                  Contact Us
                </Typography>
              </Box>
            </section>
            <section className="h-[400px] w-[441px] flex flex-col items-end gap-[85px] max-w-full text-center text-num-21_6 text-thom-black font-inter-tight mq450:gap-[42px] mq900:h-num-auto">
              <Box className="self-stretch rounded-[10px] border-gainsboro border-solid border-[1px] overflow-hidden flex items-center justify-center !pt-[18px] !pb-[18px] !pl-num-29 !pr-num-29 gap-[147.6px] mq450:gap-[74px] mq900:flex-wrap">
                <Box className="flex items-center gap-[14.4px]">
                  <Image
                    className="h-[21.6px] w-[21.6px] relative"
                    width={21.6}
                    height={21.6}
                    sizes="100vw"
                    alt=""
                    src="/sr-email.svg"
                  />
                  <Typography
                    className="!m-0 relative mq450:text-num-17"
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "400" }}
                  >{`Enter your email `}</Typography>
                </Box>
                <Image
                  className="h-12 w-12 rounded-[48px]"
                  loading="lazy"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/Icon.svg"
                />
              </Box>
              <Box className="w-[136.8px] flex flex-col items-end gap-[28.8px] text-left text-[28.8px]">
                <Typography
                  className="!m-0 self-stretch relative mq450:text-[23px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "400" }}
                >
                  Social links
                </Typography>
                <div className="self-stretch relative text-num-21_6 text-gray-700 text-right mq450:text-num-17">
                  <Typography
                    className="[margin-block-start:0] [margin-block-end:19.2px]"
                    variant="inherit"
                  >
                    Instagram
                  </Typography>
                  <Typography
                    className="[margin-block-start:0] [margin-block-end:19.2px]"
                    variant="inherit"
                  >
                    Linkedin
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    Twitter
                  </Typography>
                </div>
              </Box>
            </section>
          </Box>
          <Box className="self-stretch h-[1.2px] relative border-gray-800 border-solid border-t-[1.2px] box-border" />
        </Box>
        <Box className="self-stretch flex items-start !pt-num-0 !pb-num-0 !pl-[617px] !pr-[607px] shrink-0 mq450:!pl-5 mq450:!pr-5 mq450:box-border mq900:!pl-[154px] mq900:!pr-[151px] mq900:box-border mq1325:!pl-[308px] mq1325:!pr-[303px] mq1325:box-border">
          <Typography
            className="!m-0 relative shrink-0 mq450:text-num-17"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400" }}
          >
            © Thom-Ark Inc. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent4;
