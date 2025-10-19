import type { NextPage } from "next";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export type NavsType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Navs: NextPage<NavsType> = ({ className = "", property1 = "home" }) => {
  return (
    <header
      className={`w-[1729px] flex flex-col items-start z-[2] text-left text-num-18 text-thom-black font-inter-tight ${className}`}
    >
      <Box className="self-stretch h-[109px] relative bg-gray-100 border-gray-1200 border-solid border-b-[2px] box-border overflow-hidden shrink-0">
        <Box className="absolute top-[19px] left-[1px] w-num-1727 h-[90px] flex items-center justify-center flex-wrap content-center gap-x-[30px] gap-y-0">
          <Box className="w-52 flex items-center justify-between gap-1.5">
            <Image
              className="h-4 w-5 relative"
              width={20}
              height={16}
              sizes="100vw"
              alt=""
              src="/Vector3.svg"
            />
            <Box className="w-num-182 flex items-center justify-center !p-num-9_1 box-border">
              <div className="flex-1 relative font-medium">
                info@thom-ark.com
              </div>
            </Box>
          </Box>
          <Box className="h-num-48_4 w-px relative border-gray-1100 border-solid border-r-[1px] box-border" />
          <Box className="flex items-center gap-2.5">
            <Image
              className="h-5 w-4 relative"
              width={16}
              height={20}
              sizes="100vw"
              alt=""
              src="/Vector4.svg"
            />
            <Box className="w-num-182 flex items-center justify-center !p-num-9_1 box-border">
              <div className="flex-1 relative font-medium">
                Ikeja, Lagos, Nigeria.
              </div>
            </Box>
          </Box>
          <Box className="h-num-48_4 w-px relative border-gray-1100 border-solid border-r-[1px] box-border" />
          <Box className="w-52 flex items-center justify-between gap-2">
            <Image
              className="h-[18px] w-[18px] relative"
              width={18}
              height={18}
              sizes="100vw"
              alt=""
              src="/Vector2.svg"
            />
            <Box className="w-num-182 flex items-center justify-center !p-num-9_1 box-border">
              <div className="flex-1 relative font-medium">
                +234 9023-6129-26
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch h-[120px] bg-gray-100 overflow-hidden shrink-0 flex items-center justify-between !pt-num-30 !pb-num-30 !pl-num-80 !pr-num-80 box-border gap-5 !mt-[-1px] relative">
        <Image
          className="w-[162px] relative max-h-full object-cover"
          loading="lazy"
          width={162}
          height={74}
          sizes="100vw"
          alt=""
          src="/thom-ark-logo-21@2x.png"
        />
        <nav className="!m-0 w-[728px] rounded-[154px] bg-gray-200 border-gray-1200 border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-between !pt-num-12 !pb-num-12 !pl-[50px] !pr-[50px] gap-[14.3px] text-left text-num-18 text-thom-black font-inter-tight">
          <Box className="h-num-50 rounded-num-24 bg-crimson border-gray-1000 border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center !pt-num-13 !pb-num-13 !pl-6 !pr-6 text-gray-100">
            <Box className="self-stretch flex items-center">
              <div className="relative tracking-num--0_02 leading-[130%]">
                Home
              </div>
            </Box>
          </Box>
          <Box className="h-num-50 rounded-num-24 overflow-hidden flex flex-col items-center justify-center !pt-num-13 !pb-num-13 !pl-6 !pr-6 box-border">
            <Box className="self-stretch flex items-center">
              <div className="relative tracking-num--0_02 leading-[130%]">
                Products
              </div>
            </Box>
          </Box>
          <Box className="h-num-50 rounded-num-24 overflow-hidden flex flex-col items-center justify-center !pt-num-13 !pb-num-13 !pl-6 !pr-6 box-border">
            <Box className="self-stretch flex items-center">
              <div className="relative tracking-num--0_02 leading-[130%]">
                Services
              </div>
            </Box>
          </Box>
          <Box className="h-num-50 rounded-num-24 overflow-hidden flex flex-col items-center justify-center !pt-num-13 !pb-num-13 !pl-6 !pr-6 box-border">
            <Box className="self-stretch flex items-center">
              <div className="relative tracking-num--0_02 leading-[130%]">
                About Us
              </div>
            </Box>
          </Box>
          <Box className="h-num-50 rounded-num-24 overflow-hidden flex flex-col items-center justify-center !pt-num-13 !pb-num-13 !pl-6 !pr-6 box-border">
            <Box className="self-stretch flex items-center">
              <div className="relative tracking-num--0_02 leading-[130%]">
                Contact Us
              </div>
            </Box>
          </Box>
        </nav>
        <Button
          className="h-num-50 w-num-179 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
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
            width: 179,
            height: 50,
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </header>
  );
};

export default Navs;
