import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

type TextState = string | JSX.Element;

export default function About() {
  const [reactText, setReactText] = useState<TextState>("React");
  const [jsText, setJsText] = useState<TextState>("JavaScript");
  const [pythonText, setPythonText] = useState<TextState>("Python");

  const navigate = () => {
    window.open(
      "https://www.credly.com/badges/802048a5-2802-46cf-bb82-874b94ba7b4e/linked_in_profile",
      "_blank",
      "noreferrer",
    );
  };

  return (
    <>
      <div
        id="about"
        className="flex justify-center bg-[#808080] py-10 text-white max-sm:text-xs"
      >
        <div className="m-4 mt-5 flex w-[80%] flex-col items-center justify-center">
          <p>
            I'm an{" "}
            <span
              onClick={navigate}
              className="cursor-pointer font-semibold underline"
            >
              AWS Certified
            </span>
            , Software Engineer with expertise in building applications to
            handle large amounts of data using{" "}
            <span
              onClick={() =>
                setPythonText(
                  pythonText === "Python" ? (
                    <FontAwesomeIcon icon={faPython} size="xl" />
                  ) : (
                    "Python"
                  ),
                )
              }
              className="cursor-pointer font-semibold underline"
            >
              {pythonText}
            </span>{" "}
            and{" "}
            <span
              onClick={() =>
                setJsText(
                  jsText === "JavaScript" ? (
                    <FontAwesomeIcon icon={faSquareJs} size="xl" />
                  ) : (
                    "JavaScript"
                  ),
                )
              }
              className="cursor-pointer font-semibold underline"
            >
              {jsText}
            </span>{" "}
            frameworks like Typescript and{" "}
            <span
              onClick={() =>
                setReactText(
                  reactText === "React" ? (
                    <FontAwesomeIcon icon={faReact} size="xl" />
                  ) : (
                    "React"
                  ),
                )
              }
              className="cursor-pointer font-semibold underline"
            >
              {reactText}
            </span>
            . These applications handle these various data streams through data
            pipelines, APIs, and cloud computing services to do data analysis,
            machine learning, and create data visualizations.
          </p>
          <p className="mt-4">
            My diverse skill set includes architecting high-performing and
            scalable backends with Django and Flask, creating interactive
            frontends with React and Tailwind, and developing comprehensive
            automated testing frameworks with Selenium and Playwright.
          </p>
        </div>
      </div>
    </>
  );
}
