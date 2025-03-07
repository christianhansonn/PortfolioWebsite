import bannerImage from "/image/bannerpicture.jpeg";
import Button from "../utils/Button";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col">
        <p className="ml-[3px] text-sm max-sm:text-xs">Hi, I'm Christian 👋</p>
        <p className="text-6xl font-bold text-green-700 max-sm:text-4xl">
          Fullstack
        </p>
        <p className="text-6xl font-bold text-black max-sm:text-4xl">
          Engineer
        </p>
        <p className="ml-[3px] mt-4 text-xs max-sm:mt-2 max-sm:w-[80%] sm:w-[45%] md:w-[45%] lg:w-[38%]">
          I'm an AWS Certified, Software Engineer with experience building front
          and back end systems using React, Typescript, and Python.
        </p>
        <div className="flexjustify-center mt-5 max-sm:w-[90%]">
          <Button
            className="mr-2 max-sm:text-xs"
            url="https://www.linkedin.com/in/christianhansonn/"
          >
            Linkedin
          </Button>
          <Button
            className="max-sm:text-xs"
            url="https://github.com/christianhansonn/PortfolioProject"
          >
            GitHub{" "}
            <span
              role="img"
              aria-label="GitHub logo"
              className="fa fa-github"
            />
          </Button>
        </div>
      </div>
      <div className="absolute right-[180px] max-md:hidden">
        <img
          className="rounded-full bg-cover object-cover grayscale filter md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px] xl:h-[400px] xl:w-[400px]"
          src={bannerImage}
          alt="Profile banner"
        />
      </div>
    </>
  );
}
