"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";

export type ContentAreaType = {
  className?: string;
  discoverHighPerformingProducts?: string;

  /** Style props */
  contentAreaAlignSelf?: CSSProperties["alignSelf"];
  contentAreaWidth?: CSSProperties["width"];
  frameBoxWidth?: CSSProperties["width"];
};

const ContentArea: NextPage<ContentAreaType> = ({
  className = "",
  contentAreaAlignSelf,
  contentAreaWidth,
  frameBoxWidth,
  discoverHighPerformingProducts,
}) => {
  const contentAreaStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contentAreaAlignSelf,
      width: contentAreaWidth,
    };
  }, [contentAreaAlignSelf, contentAreaWidth]);

  const frameBoxStyle: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth,
    };
  }, [frameBoxWidth]);

  return (
    <Box
      className={`self-stretch flex flex-col items-start gap-[50px] text-left text-num-50 text-thom-black font-inter-tight mq450:gap-[25px] ${className}`}
      style={contentAreaStyle}
    >
      <Box
        className="w-[400px] flex flex-col items-start gap-1"
        style={frameBoxStyle}
      >
        <Typography
          className="!m-0 self-stretch relative mq450:text-num-30 mq900:text-num-40"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
        >
          <Typography
            variant="inherit"
            variantMapping={{ inherit: "span" }}
          >{`Discover your `}</Typography>
          <i className="font-playfair-display">best building product</i>
        </Typography>
        <Box className="self-stretch h-num-5 relative bg-thom-blue" />
      </Box>
      <Typography
        className="!m-0 self-stretch relative text-gray-700 mq450:text-num-18 mq450:leading-num-25 mq900:text-num-24 mq900:leading-[34px]"
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "400", fontSize: "30px", lineHeight: "140%" }}
      >
        {discoverHighPerformingProducts}
      </Typography>
    </Box>
  );
};

export default ContentArea;
