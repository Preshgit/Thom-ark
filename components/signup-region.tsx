"use client";
import type { NextPage } from "next";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";

export type SignupRegionType = {
  className?: string;
};

const SignupRegion: NextPage<SignupRegionType> = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start !pt-num-0 !pb-num-0 !pl-num-2 !pr-num-2 box-border max-w-full text-left text-[16.6px] text-thom-black font-inter-tight ${className}`}
    >
      <Box className="w-[1726px] bg-white overflow-hidden shrink-0 flex flex-col items-start !pt-num-100 !pb-num-100 !pl-num-80 !pr-num-80 box-border max-w-full mq900:!pt-num-42 mq900:!pb-num-42 mq900:!pl-10 mq900:!pr-10 mq900:box-border mq1325:!pt-num-65 mq1325:!pb-num-65 mq1325:box-border">
        <Box className="self-stretch flex items-center justify-between gap-5 max-w-full mq1700:flex-wrap mq1700:gap-5">
          <Box className="h-[851px] w-[769px] overflow-hidden shrink-0 flex items-start justify-center !pt-[113px] !pb-[112.2px] !pl-5 !pr-5 box-border bg-[url('/Aluminium-Offer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:h-num-auto mq450:!pt-num-47 mq450:!pb-num-47 mq450:box-border mq900:!pt-num-73 mq900:!pb-num-73 mq900:box-border mq1325:min-w-full mq1700:flex-1">
            <Box className="flex items-start max-w-full">
              <Box className="w-[526px] hidden flex-col items-start gap-[30px] max-w-full shrink-0">
                <Box className="flex items-center gap-[15.7px] mq450:flex-wrap">
                  <Box className="h-num-47_7 w-[147.2px] rounded-num-39_8 bg-white border-gray-400 border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center !pt-num-10 !pb-num-10 !pl-[7px] !pr-[7px] gap-2">
                    <Image
                      className="h-[31.8px] w-[31.8px] rounded-[15.9px]"
                      width={31.8}
                      height={31.8}
                      sizes="100vw"
                      alt=""
                      src="/Phone-icon5.svg"
                    />
                    <div className="relative font-medium">Contact us</div>
                  </Box>
                  <Box className="flex items-center gap-[15.9px]">
                    <Image
                      className="h-num-47_7 w-num-47_7 rounded-num-39_8 object-cover"
                      width={47.7}
                      height={47.7}
                      sizes="100vw"
                      alt=""
                      src="/Phone-icon@2x.png"
                    />
                    <Image
                      className="h-num-47_7 w-num-47_7 relative rounded-num-39_8"
                      width={47.7}
                      height={47.7}
                      sizes="100vw"
                      alt=""
                      src="/Icon1.svg"
                    />
                    <Image
                      className="h-num-47_7 w-num-47_7 rounded-num-39_8"
                      width={47.7}
                      height={47.7}
                      sizes="100vw"
                      alt=""
                      src="/Phone-icon6.svg"
                    />
                  </Box>
                </Box>
                <div className="self-stretch relative text-num-40 font-medium text-white mq450:text-num-24 mq900:text-num-32">
                  Seamlessly Aluminium Global Solutions.
                </div>
              </Box>
              <Box className="flex flex-col items-end gap-[73.3px] max-w-full shrink-0 text-num-20 text-white mq450:gap-[18px] mq900:gap-[37px]">
                <Box className="flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[103px] !pr-[103px] mq450:!pl-5 mq450:!pr-5 mq450:box-border">
                  <Box className="h-num-192_4 w-[237px] flex flex-col items-start gap-[19px]">
                    <Image
                      className="w-24 h-24 relative"
                      loading="lazy"
                      width={96}
                      height={96}
                      sizes="100vw"
                      alt=""
                      src="/Border-Area.svg"
                    />
                    <Typography
                      className="!m-0 self-stretch relative mq450:text-num-16"
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "400" }}
                    >
                      Quality Aluminium Solutions
                    </Typography>
                  </Box>
                </Box>
                <section className="w-[583.8px] flex items-start justify-between gap-5 max-w-full text-left text-num-20 text-white font-inter-tight mq900:flex-wrap mq900:gap-5">
                  <Box className="h-num-192_4 w-[135px] flex flex-col items-start gap-[19px]">
                    <Image
                      className="w-24 h-24 relative"
                      loading="lazy"
                      width={96}
                      height={96}
                      sizes="100vw"
                      alt=""
                      src="/Border-Area.svg"
                    />
                    <Typography
                      className="!m-0 self-stretch relative mq450:text-num-16"
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "400" }}
                    >
                      Custom Budget
                    </Typography>
                  </Box>
                  <Box className="flex flex-col items-start !pt-[167.7px] !pb-num-0 !pl-num-0 !pr-num-0 mq450:!pt-[109px] mq450:box-border">
                    <Box className="w-[207px] h-num-192_4 flex flex-col items-start gap-[19px]">
                      <Image
                        className="w-24 h-24 relative"
                        loading="lazy"
                        width={96}
                        height={96}
                        sizes="100vw"
                        alt=""
                        src="/Border-Area.svg"
                      />
                      <Typography
                        className="!m-0 self-stretch relative mq450:text-num-16"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "400" }}
                      >{`Better windows & Doors`}</Typography>
                    </Box>
                  </Box>
                </section>
              </Box>
            </Box>
          </Box>
          <Box className="w-[735px] flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0 box-border gap-[50px] max-w-full text-num-50 mq900:gap-[25px] mq1325:min-w-full mq1700:flex-1">
            <Box className="self-stretch flex flex-col items-start gap-[50px] mq900:gap-[25px]">
              <Box className="self-stretch flex flex-col items-start gap-[15px]">
                <Typography
                  className="!m-0 relative mq450:text-num-30 mq900:text-num-40"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "500" }}
                >
                  We’d love to help!
                </Typography>
                <Typography
                  className="!m-0 self-stretch relative text-gray-700 mq450:text-num-20"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "400", fontSize: "25px" }}
                >
                  Reach out and we’ll get in touch within 24 hours.
                </Typography>
              </Box>
              <section className="self-stretch flex flex-col items-start gap-[30px]">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[67px] font-inter-tight text-num-20 text-gray-700"
                  placeholder="First Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "rgba(24, 24, 24, 0.05)" },
                    "& .MuiInputBase-root": {
                      height: "67px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(24, 24, 24, 0.6)" },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[67px] font-inter-tight text-num-20 text-gray-700"
                  placeholder="Last Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "rgba(24, 24, 24, 0.05)" },
                    "& .MuiInputBase-root": {
                      height: "67px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(24, 24, 24, 0.6)" },
                  }}
                />
                <Box className="self-stretch h-[67.2px] flex flex-col items-start justify-center">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[65px] font-inter-tight text-num-20 text-gray-700"
                    placeholder="hello@thomark.co"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(24, 24, 24, 0.05)" },
                      "& .MuiInputBase-root": {
                        height: "65px",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "20px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(24, 24, 24, 0.6)",
                      },
                    }}
                  />
                </Box>
                <textarea
                  className="border-gray-800 border-solid border-[1.2px] bg-[transparent] h-[254px] w-auto [outline:none] self-stretch box-border flex flex-col items-start justify-center !pt-[20.4px] !pb-[20.4px] !pl-[19px] !pr-[19px] font-inter-tight text-num-20 text-gray-700"
                  placeholder="Leave us a message..."
                  rows={13}
                  cols={37}
                />
              </section>
            </Box>
            <Button
              className="self-stretch h-num-50 !pt-num-13_5 !pb-num-13_5 !pl-6 !pr-6 box-border"
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
                height: 50,
              }}
            >
              Sumit
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default SignupRegion;
