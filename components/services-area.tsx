import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ContentArea from "./content-area";

export type ServicesAreaType = {
  className?: string;
};

const ServicesArea: NextPage<ServicesAreaType> = ({ className = "" }) => {
  return (
    <Box
      className={`self-stretch flex items-start !pt-num-0 !pb-num-0 !pl-num-1 !pr-num-1 box-border max-w-full !mt-[-27px] relative ${className}`}
    >
      <Box className="flex-1 bg-white overflow-hidden flex flex-col items-center !pt-num-100 !pb-num-100 !pl-num-80 !pr-num-80 box-border gap-[100px] max-w-full mq450:gap-[25px] mq450:!pb-[27px] mq450:box-border mq900:gap-[50px] mq900:!pl-10 mq900:!pr-10 mq900:box-border mq1325:!pt-num-47 mq1325:!pb-num-42 mq1325:box-border">
        <ContentArea
          contentAreaAlignSelf="unset"
          contentAreaWidth="1548px"
          frameBoxWidth="365px"
          discoverHighPerformingProducts={`Delivering quality architectural products & services with expert craftsmanship, seamless
installation, precision, and style that turn architectural visions into reality. Shaping environments
with innovative architectural solutions for environmental sustainability. Our range of architectural
and allied products & services include sales, fabrication, installation and maintenance of the
following:`}
        />
        <Box className="self-stretch flex flex-col items-start gap-[30px] max-w-full">
          <Box className="self-stretch flex flex-col items-start gap-[30px] max-w-full">
            <section className="self-stretch flex items-end gap-[30.3px] max-w-full text-left text-num-40 text-thom-black font-inter-tight mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-blue mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 max-w-full mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <Typography
                    className="!m-0 w-num-538_3 relative inline-block shrink-0 max-w-full mq450:text-num-24 mq900:text-num-32"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >
                    Roofing Systems
                  </Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-minus.svg"
                  />
                </Box>
                <Typography
                  className="!m-0 self-stretch relative text-gray-700 mq450:text-num-18 mq900:text-num-24"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "400", fontSize: "30px" }}
                >
                  Premium aluminium roofing built to withstand time and elements
                  - crafted for beauty, strength, and reliability.
                </Typography>
              </Box>
            </section>
            <Image
              className="self-stretch h-[448px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              width={1568}
              height={448}
              sizes="100vw"
              alt=""
              src="/Images2@2x.png"
            />
          </Box>
          <Box className="self-stretch h-px relative border-gray-1200 border-solid border-t-[1px] box-border" />
          <section className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-10 !pl-num-0 !pr-num-0 box-border gap-[62px] max-w-full text-left text-num-40 text-thom-black font-inter-tight mq450:gap-[15px] mq900:gap-[31px]">
            <Box className="self-stretch flex items-end gap-[30.3px] max-w-full mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-black opacity-num-0_5 mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 max-w-full mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <Typography
                    className="!m-0 w-num-538_3 relative inline-block shrink-0 max-w-full mq450:text-num-24 mq900:text-num-32"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >{`Window & Door Systems`}</Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-add1.svg"
                  />
                </Box>
                <div className="w-num-1530_1 relative text-num-30 text-gray-700 hidden mq450:text-num-18 mq900:text-num-24">
                  <Typography className="!m-0" variant="inherit">
                    Premium aluminium roofing built to withstand time and
                    elements - crafted for beauty, strength,
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    and reliability.
                  </Typography>
                </div>
              </Box>
            </Box>
            <Image
              className="w-num-774_4 h-num-487 max-w-full overflow-hidden shrink-0 object-cover hidden"
              width={774.4}
              height={487}
              sizes="100vw"
              alt=""
              src="/Images1@2x.png"
            />
          </section>
          <Box className="self-stretch h-px relative border-gray-1200 border-solid border-t-[1px] box-border" />
          <section className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-10 !pl-num-0 !pr-num-0 gap-[62px] text-left text-num-40 text-thom-black font-inter-tight mq450:gap-[15px] mq900:gap-[31px]">
            <Box className="self-stretch flex items-end gap-[30.3px] mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-black opacity-num-0_5 mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-0 [row-gap:20px] mq900:flex-wrap mq900:gap-0">
                  <Typography
                    className="!m-0 flex-1 relative inline-block min-w-[434px] mq450:text-num-24 mq900:text-num-32 mq900:min-w-full"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >
                    Interio Partitions Wall Systems
                  </Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-add1.svg"
                  />
                </Box>
                <div className="w-num-1530_1 relative text-num-30 text-gray-700 hidden mq450:text-num-18 mq900:text-num-24">
                  <Typography className="!m-0" variant="inherit">
                    Premium aluminium roofing built to withstand time and
                    elements - crafted for beauty, strength,
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    and reliability.
                  </Typography>
                </div>
              </Box>
            </Box>
            <Image
              className="w-num-774_4 h-num-487 max-w-full overflow-hidden shrink-0 object-cover hidden"
              width={774.4}
              height={487}
              sizes="100vw"
              alt=""
              src="/Images1@2x.png"
            />
          </section>
          <Box className="self-stretch h-px relative border-gray-1200 border-solid border-t-[1px] box-border" />
          <section className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-10 !pl-num-0 !pr-num-0 box-border gap-[62px] max-w-full text-left text-num-40 text-thom-black font-inter-tight mq450:gap-[15px] mq900:gap-[31px]">
            <Box className="self-stretch flex items-end gap-[30.3px] max-w-full mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-black opacity-num-0_5 mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 max-w-full mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-5 max-w-full mq900:flex-wrap mq900:gap-5">
                  <Typography
                    className="!m-0 w-num-538_3 relative inline-block shrink-0 max-w-full mq450:text-num-24 mq900:text-num-32"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >
                    Curtains Wall Systems
                  </Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-add1.svg"
                  />
                </Box>
                <div className="w-num-1530_1 relative text-num-30 text-gray-700 hidden mq450:text-num-18 mq900:text-num-24">
                  <Typography className="!m-0" variant="inherit">
                    Premium aluminium roofing built to withstand time and
                    elements - crafted for beauty, strength,
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    and reliability.
                  </Typography>
                </div>
              </Box>
            </Box>
            <Image
              className="w-num-774_4 h-num-487 max-w-full overflow-hidden shrink-0 object-cover hidden"
              width={774.4}
              height={487}
              sizes="100vw"
              alt=""
              src="/Images1@2x.png"
            />
          </section>
          <Box className="self-stretch h-px relative border-gray-1200 border-solid border-t-[1px] box-border" />
          <section className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-10 !pl-num-0 !pr-num-0 gap-[62px] text-left text-num-40 text-thom-black font-inter-tight mq450:gap-[15px] mq900:gap-[31px]">
            <Box className="self-stretch flex items-end gap-[30.3px] mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-black opacity-num-0_5 mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-0 [row-gap:20px] mq900:flex-wrap mq900:gap-0">
                  <Typography
                    className="!m-0 flex-1 relative inline-block min-w-[501px] mq450:text-num-24 mq900:text-num-32 mq900:min-w-full"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >{`Suspended Ceilings & Sunbreakers`}</Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-add1.svg"
                  />
                </Box>
                <div className="w-num-1530_1 relative text-num-30 text-gray-700 hidden mq450:text-num-18 mq900:text-num-24">
                  <Typography className="!m-0" variant="inherit">
                    Premium aluminium roofing built to withstand time and
                    elements - crafted for beauty, strength,
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    and reliability.
                  </Typography>
                </div>
              </Box>
            </Box>
            <Image
              className="w-num-774_4 h-num-487 max-w-full overflow-hidden shrink-0 object-cover hidden"
              width={774.4}
              height={487}
              sizes="100vw"
              alt=""
              src="/Images1@2x.png"
            />
          </section>
          <Box className="self-stretch h-px relative border-gray-1200 border-solid border-t-[1px] box-border" />
          <section className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-10 !pl-num-0 !pr-num-0 gap-[62px] text-left text-num-40 text-thom-black font-inter-tight mq450:gap-[15px] mq900:gap-[31px]">
            <Box className="self-stretch flex items-end gap-[30.3px] mq900:gap-[15px] mq1700:flex-wrap">
              <Box className="self-stretch w-num-7_6 relative bg-thom-black opacity-num-0_5 mq1700:w-full mq1700:h-num-7_6" />
              <Box className="flex-1 flex flex-col items-start gap-[14.5px] min-w-num-994 mq1325:min-w-full">
                <Box className="self-stretch flex items-end justify-between gap-0 [row-gap:20px] mq1325:flex-wrap mq1325:gap-0">
                  <Typography
                    className="!m-0 flex-1 relative inline-block min-w-[966px] mq450:text-num-24 mq900:text-num-32 mq1325:min-w-full"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600" }}
                  >
                    Sales and Installation Services of Other Building
                    Construction Allied Products
                  </Typography>
                  <Image
                    className="h-num-43_6 w-num-43_6 relative"
                    loading="lazy"
                    width={43.6}
                    height={43.6}
                    sizes="100vw"
                    alt=""
                    src="/vuesax-linear-add1.svg"
                  />
                </Box>
                <div className="w-num-1530_1 relative text-num-30 text-gray-700 hidden mq450:text-num-18 mq900:text-num-24">
                  <Typography className="!m-0" variant="inherit">
                    Premium aluminium roofing built to withstand time and
                    elements - crafted for beauty, strength,
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    and reliability.
                  </Typography>
                </div>
              </Box>
            </Box>
            <Image
              className="w-num-774_4 h-num-487 max-w-full overflow-hidden shrink-0 object-cover hidden"
              width={774.4}
              height={487}
              sizes="100vw"
              alt=""
              src="/Images1@2x.png"
            />
          </section>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesArea;
