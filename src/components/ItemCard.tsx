"use client";
import React, { useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type ItemProps = {
  grid?: boolean;
  columns?: number;
  rows?: number;
  flex?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  cardStyles?: React.CSSProperties;
  className?: string;
  items?: React.ReactNode[];
  children?: React.ReactNode;
  slider?: boolean;
  sliderConfig?: SliderConfig;
};

type SliderConfig = Settings; // react-slick ning `Settings` interface'idan foydalanamiz

const ItemCard = ({
  grid = false,
  columns = 1,
  rows = 1,
  flex = false,
  justifyContent = "center",
  alignItems = "center",
  cardStyles = {},
  className = "",
  items = [],
  slider = false,
  sliderConfig,
  children,
}: ItemProps) => {
  // react-slick ning to'liq default sozlamalari
  const defaultSliderConfig: SliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: false,
    centerMode: false,
    fade: false,
    focusOnSelect: false,
    lazyLoad: "ondemand",
    rtl: false,
    swipeToSlide: false,
    variableWidth: false,
    waitForAnimate: true,
  };

  // `sliderConfig` ni `useMemo` bilan optimallashtiramiz
  const mergedSliderConfig = useMemo(
    () => ({ ...defaultSliderConfig, ...sliderConfig }),
    [sliderConfig]
  );

  const containerStyles: React.CSSProperties = {
    display: grid ? "grid" : flex ? "flex" : "block",
    gridTemplateColumns: grid ? `repeat(${columns}, 1fr)` : undefined,
    gridTemplateRows: grid ? `repeat(${rows}, 1fr)` : undefined,
    justifyContent: flex ? justifyContent : undefined,
    alignItems: flex ? alignItems : undefined,
  };

  return (
    <div style={containerStyles} >
      {slider ? (
        <Slider {...mergedSliderConfig}>
          {items.map((item, index) => (
            <div
              key={index}
              style={cardStyles}
              className={`${className}   `}
            >
              {children ?? item}
            </div>
          ))}
        </Slider>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            style={cardStyles}
            className={`${className}   `}
          >
            {children ?? item}
          </div>
        ))
      )}
    </div>
  );
};

export default ItemCard;
