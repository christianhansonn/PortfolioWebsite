import React from "react";
import pipeline from "/image/data-pipeline.png";
import webScrape from "/image/webscrape.jpg";
import machineLearning from "/image/machine-learning.jpg";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  source: string;
  url: string;
  gradientClass?: string;
}

function Card({
  children,
  source,
  url,
  gradientClass = "",
  ...props
}: CardProps) {
  const navigate = () => {
    window.open(url, "_blank", "noreferrer");
  };

  const formatting = twMerge(
    "absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent",
    gradientClass,
  );

  return (
    <div
      {...props}
      className="group relative max-w-xs overflow-hidden rounded-2xl shadow-lg max-md:h-[180px] lg:h-[230px]"
      onClick={navigate}
    >
      <img
        src={source}
        alt=""
        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
      />
      <div className={formatting}>
        <div className="p4 text-white">{children}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex items-center justify-center max-[800px]:flex-col">
      <div className="m-2 max-w-xs cursor-pointer">
        <Card
          source={pipeline}
          url="https://github.com/christianhansonn/PortfolioProject/tree/main/Data_Pipeline"
        >
          <h3 className="pl-4 font-bold max-md:text-[14px] max-md:leading-4 md:text-sm lg:text-lg">
            AWS Data Pipeline
          </h3>
          <p className="px-4 pb-3 text-xs max-md:text-[12px] max-md:leading-3 md:text-[14px] md:leading-[16px]">
            This project showcases my abilities process data using a custom
            Python script and AWS services S3, Glue, and Athena
          </p>
        </Card>
      </div>
      <div className="m-2 max-w-xs cursor-pointer">
        <Card
          source={webScrape}
          url="https://github.com/christianhansonn/PortfolioProject/tree/main/Python/WebScrape"
          gradientClass="from-black/80"
        >
          <h3 className="pl-4 font-bold max-md:text-[14px] max-md:leading-4 md:text-sm lg:text-lg">
            BeautifulSoup Webscrape
          </h3>
          <p className="px-4 pb-3 text-xs max-md:text-[12px] max-md:leading-3 md:text-[14px] md:leading-[16px]">
            This project showcases my abilities to webscrape a job board using
            BeautifulSoup, and then automate job applications with Playwright
          </p>
        </Card>
      </div>
      <div className="m-2 max-w-xs cursor-pointer max-[800px]:ml-2">
        <Card
          source={machineLearning}
          url="https://github.com/christianhansonn/PortfolioProject/blob/main/Python/Machine%20Learning%20Predictions.ipynb"
        >
          <h3 className="pl-4 font-bold max-md:text-[14px] max-md:leading-4 md:text-sm lg:text-lg">
            Machine Learning
          </h3>
          <p className="px-4 pb-3 text-xs max-md:text-[12px] max-md:leading-3 md:text-[14px] md:leading-[16px]">
            This project showcases my abilities to create and train three simple
            machine learning models to predict client conversion and boost
            retention
          </p>
        </Card>
      </div>
    </div>
  );
}
