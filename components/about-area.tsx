import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type AboutAreaType = {
  className?: string;
};

const AboutArea: NextPage<AboutAreaType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-2 box-border max-w-full text-left text-num-50 text-thom-black font-inter-tight ${className}`}
    >
      <Box className="h-[1259px] flex-1 bg-gray-100 border-gray-1200 border-solid border-b-[1px] box-border overflow-hidden flex flex-col items-start relative max-w-full mq1700:h-num-auto">
        <Box className="w-[1693.5px] h-[1278.4px] absolute !!m-[0 important] top-[-289px] left-[-586px] rounded-[4.8px] overflow-hidden flex items-center justify-center z-[0]">
          <Image
            className="w-full h-full object-cover absolute left-[164px] top-[11px] [transform:scale(1)]"
            width={1693.5}
            height={1278.4}
            sizes="100vw"
            alt=""
            src="/Vector-5.svg"
          />
        </Box>
        <Box className="w-num-1727 flex flex-col items-center justify-center !pt-num-100 !pb-num-100 !pl-num-80 !pr-num-80 box-border shrink-0 max-w-full z-[1] mq900:!pt-num-42 mq900:!pb-num-42 mq900:!pl-10 mq900:!pr-10 mq900:box-border mq1325:!pt-num-65 mq1325:!pb-num-65 mq1325:box-border">
          <Box className="self-stretch flex flex-col items-start gap-[50px] max-w-full mq900:gap-[25px]">
            <Box className="w-[317px] flex flex-col items-start gap-[30px]">
              <Box className="self-stretch flex flex-col items-start gap-1">
                <Typography
                  className="!m-0 self-stretch relative mq450:text-num-30 mq900:text-num-40"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                >
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                  >{`Who We `}</Typography>
                  <i className="font-playfair-display">Are</i>
                </Typography>
                <Box className="self-stretch h-num-5 relative bg-thom-blue" />
              </Box>
              <Typography
                className="!m-0 self-stretch relative text-gray-700 mq450:text-num-20 mq450:leading-7"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "400", fontSize: "25px", lineHeight: "140%" }}
              >
                Crafting quality solutions with integrity and innovation.
              </Typography>
            </Box>
            <Box className="self-stretch bg-gray-100 flex items-center justify-between max-w-full text-num-30 text-gray-700">
              <Box className="flex-1 flex items-center justify-between gap-5 max-w-full mq1700:flex-wrap mq1700:gap-5">
                <Image
                  className="h-[847px] w-[716px] object-cover max-w-full mq1700:flex-1"
                  loading="lazy"
                  width={716}
                  height={847}
                  sizes="100vw"
                  alt=""
                  src="/Inner-Content@2x.png"
                />
                <Box className="w-[803px] flex flex-col items-start gap-[30px] max-w-full mq1325:min-w-full mq1700:flex-1">
                  <Image
                    className="w-[342px] relative max-h-full object-cover"
                    loading="lazy"
                    width={342}
                    height={103}
                    sizes="100vw"
                    alt=""
                    src="/thom-ark-logo-2@2x.png"
                  />
                  <Typography
                    className="!m-0 self-stretch relative mq450:text-num-18 mq450:leading-num-25 mq900:text-num-24 mq900:leading-[34px]"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "400", lineHeight: "140%" }}
                  >
                    <Typography
                      className="!m-0"
                      variant="inherit"
                    >{`Thom-Ark Nigeria Limited is a resourceful (limited liability) company complementing architectural designs for modernity and environmental sustainability with general or customized
or innovative architectural and allied products & services.`}</Typography>
                    <Typography className="!m-0" variant="inherit">
                      &nbsp;
                    </Typography>
                    <Typography
                      className="!m-0"
                      variant="inherit"
                    >{`Our mission is the impartation of
quality architectural and allied products & services to your residential and commercial
environments (e.g., homes, businesses, offices, organizations) for your comfort and well-being.`}</Typography>
                    <Typography className="!m-0" variant="inherit">
                      &nbsp;
                    </Typography>
                    <Typography className="!m-0" variant="inherit">
                      Thom-Ark Nigeria Limited leverages its core values of
                      innovation, trust, integrity, accountability,
                      professionalism, and empathy to achieve the company’s
                      vision of being a pacesetter in executing projects with
                      precision and aligning project implementations with
                      interior and landscape architecture and designs. We are
                      agents of positive and sustainable environmental change.
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default AboutArea;
