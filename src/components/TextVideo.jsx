import HeadingBox from "./HeadingBox";
import { Link } from "react-router-dom";
import "./TextVideo.scss";

function Text(props) {
  return (
    <>
      <h1 class="mb-4 max-w-2xl text-4xl font-extrabold text-[#F2F6FA] leading-none md:text-5xl xl:text-6xl dark:text-white">
        {props.heading}
      </h1>
      <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        {props.text}
      </p>
    </>
  );
}

function Button1(props) {
  return (
    <Link
      to={props.link}
      class="inline-flex justify-center bg-[#2273EA] items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
    >
      {props.text}
      <svg
        class="ml-2 -mr-1 w-5 h-5"
        fill="#92C6FC"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Link>
  );
}

function Button2(props) {
  return (
    <Link
      to={props.link}
      class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-[#334155] text-[#F8F9F9] rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      {props.text}
    </Link>
  );
}

function Video(props) {
  return (
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex ml-20 mr-10 videoDiv">
      <video width="400" height="600" controls>
        <source src={props.link} type="video/mp4" />
      </video>
    </div>
  );
}

export default function TextVideo(props) {
  return (
    <section class="bg dark:bg-gray-900 ml-20 mr-20">
      <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="place-self-center mr-auto lg:col-span-7 ml-20 max-w-lg ">
          <Text heading={props.heading} text={props.text} />
          <Button1 text={props.b1text} link={props.b1link} />
          <Button2 text={props.b2text} link={props.b2link} />
        </div>
        <Video link={props.videolink} />
      </div>
    </section>
  );
}
