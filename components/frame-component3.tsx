import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[839px] flex items-start !pt-num-0 !pb-28 !pl-num-1 !pr-num-1 box-border max-w-full mq450:!pb-num-47 mq450:box-border mq900:!pb-num-73 mq900:box-border ${className}`}
    >
      <Box className="self-stretch flex-1 flex flex-col items-center justify-center !pt-num-100 !pb-num-100 !pl-num-80 !pr-num-80 box-border max-w-full mq900:!pt-num-65 mq900:!pb-num-65 mq900:!pl-10 mq900:!pr-10 mq900:box-border">
        <Box className="self-stretch flex flex-col items-start gap-[60px] mq900:gap-[30px] mq1700:h-num-auto">
          <section className="self-stretch flex items-start flex-wrap content-start gap-8 text-left text-num-50 text-black font-inter-tight mq900:gap-4">
            <Box className="flex-1 flex flex-col items-start gap-4 min-w-[900px] mq1325:min-w-full">
              <Box className="self-stretch flex items-center gap-10 mq450:gap-5">
                <Image
                  className="h-[60px] w-[60px] relative hidden"
                  width={60}
                  height={60}
                  sizes="100vw"
                  alt=""
                  src="/Star-1.svg"
                />
                <Typography
                  className="!m-0 self-stretch w-[770px] relative inline-block mq450:text-num-30 mq900:text-num-40"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                >
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                  >{`Products & `}</Typography>
                  <i className="font-playfair-display">Services Details</i>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                  >
                    :
                  </Typography>
                </Typography>
                <Image
                  className="h-[60px] w-[60px] relative hidden"
                  width={60}
                  height={60}
                  sizes="100vw"
                  alt=""
                  src="/Star-1.svg"
                />
              </Box>
              <div className="self-stretch relative text-num-20 leading-[150%] text-black-40 mq450:text-num-16 mq450:leading-num-24">
                <Typography className="!m-0" variant="inherit">
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                  >{`We are available for calls on:
 `}</Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "'Inter Tight'" }}
                  >
                    Monday 10am - 6pm
                  </Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ fontFamily: "'Inter Tight'" }}
                  >{` - `}</Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "'Inter Tight'" }}
                  >
                    Thursday 10am - 6pm
                  </Typography>
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ fontFamily: "'Inter Tight'" }}
                  >{`And we are available on `}</Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    WhatsApp 24.7 Monday to Saturday
                  </Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ fontFamily: "'Inter Tight'" }}
                  >
                    .
                  </Typography>
                </Typography>
              </div>
            </Box>
            <Box className="flex items-center gap-4">
              <Image
                className="h-10 w-10 rounded-num-20 object-cover"
                loading="lazy"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon9@2x.png"
              />
              <Image
                className="h-10 w-10 rounded-num-20"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon7.svg"
              />
              <Image
                className="h-10 w-10 rounded-num-20"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon3.svg"
              />
            </Box>
          </section>
          <section className="self-stretch h-[252px] flex items-start justify-center flex-wrap content-start gap-[30px] text-left text-num-18 text-thom-black font-inter-tight">
            <Box className="self-stretch flex-[0.9288] rounded-num-20 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start !p-10 gap-6 min-w-num-148 mq450:flex-1">
              <Image
                className="w-10 h-10 rounded-num-20"
                loading="lazy"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon2.svg"
              />
              <Box className="w-[225px] flex flex-col items-start gap-2">
                <div className="self-stretch relative">Email</div>
                <div className="relative font-medium text-black-40 whitespace-pre-wrap">
                  Office : info@thom-ark.com
                </div>
              </Box>
              <Box className="w-[217.5px] hidden items-center gap-3 text-thom-blue mq450:flex-wrap">
                <Box className="h-12 rounded-num-40 border-thom-blue border-solid border-[1px] box-border overflow-hidden flex items-center justify-center !pt-num-12 !pb-num-12 !pl-6 !pr-6 shrink-0">
                  <div className="relative font-medium">Contact us</div>
                </Box>
                <div className="relative text-num-16 text-black-40 shrink-0">
                  *available 24 hrs
                </div>
              </Box>
            </Box>
            <Box className="self-stretch flex-[0.9288] rounded-num-20 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start !p-10 gap-6 min-w-num-148 text-black-40 mq450:flex-1">
              <Image
                className="w-10 h-10 rounded-num-20"
                loading="lazy"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon1.svg"
              />
              <Box className="w-[219px] flex flex-col items-start gap-2">
                <div className="self-stretch relative text-thom-black">
                  Phone
                </div>
                <div className="relative font-medium">
                  Office : +234 9023-6129-26
                </div>
                <div className="relative font-medium">
                  Office : +234 9000-0011-11
                </div>
              </Box>
              <Box className="w-[217.5px] hidden items-center gap-3 text-thom-blue mq450:flex-wrap">
                <Box className="h-12 rounded-num-40 border-thom-blue border-solid border-[1px] box-border overflow-hidden flex items-center justify-center !pt-num-12 !pb-num-12 !pl-6 !pr-6 shrink-0">
                  <div className="relative font-medium">Contact us</div>
                </Box>
                <div className="relative text-num-16 text-black-40 shrink-0">
                  *available 24 hrs
                </div>
              </Box>
            </Box>
            <Box className="self-stretch flex-1 rounded-num-20 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start !pt-10 !pb-10 !pl-num-29 !pr-num-29 gap-6 min-w-num-148 font-outfit">
              <Image
                className="w-10 h-10 rounded-num-20"
                loading="lazy"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon8.svg"
              />
              <Box className="self-stretch flex flex-col items-start gap-2">
                <div className="self-stretch relative">Address</div>
                <div className="self-stretch relative font-inter-tight text-gray-300">
                  Office : Suite C 320, 3rd Floor, Ikeja Plaza, 81, Mobolaji
                  Bank Anthony Way, Ikeja, Lagos, Nigeria.
                </div>
              </Box>
              <Box className="w-[261px] hidden items-center gap-3 text-thom-blue font-inter-tight">
                <Box className="h-12 rounded-num-40 border-thom-blue border-solid border-[1px] box-border overflow-hidden flex items-center justify-center !pt-num-12 !pb-num-12 !pl-6 !pr-6">
                  <div className="relative font-medium">Contact us</div>
                </Box>
                <div className="relative text-num-16 text-gray-300">
                  *available 24 hrs
                </div>
              </Box>
            </Box>
            <Box className="self-stretch flex-1 rounded-num-20 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start !pt-10 !pb-10 !pl-num-29 !pr-num-29 gap-6 min-w-num-148 font-outfit">
              <Image
                className="w-10 h-10 rounded-num-20"
                loading="lazy"
                width={40}
                height={40}
                sizes="100vw"
                alt=""
                src="/Phone-icon4.svg"
              />
              <Box className="self-stretch flex flex-col items-start gap-2">
                <div className="self-stretch relative"> Post Office Box</div>
                <div className="self-stretch relative font-inter-tight text-gray-300">
                  P.O. Box : 11608, Ikeja, (Postal Code: 100001, Ikeja) Lagos,
                  Nigeria.
                </div>
              </Box>
              <Box className="w-[261px] hidden items-center gap-3 text-thom-blue font-inter-tight">
                <Box className="h-12 rounded-num-40 border-thom-blue border-solid border-[1px] box-border overflow-hidden flex items-center justify-center !pt-num-12 !pb-num-12 !pl-6 !pr-6">
                  <div className="relative font-medium">Contact us</div>
                </Box>
                <div className="relative text-num-16 text-gray-300">
                  *available 24 hrs
                </div>
              </Box>
            </Box>
          </section>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent3;
