import { CalendarRange, ChevronRight, Heading2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ServiceGallery from "./ServiceGallery";
function Main({
  title,
  bannerImage,
  LucideIcon,
  tags,
  date,
  description,
  summary,
  sections,
}) {
  return (
    <div className=" md:col-span-2 w-full flex flex-col gap-8 bg-white">
      <div>
        <div className="flex items-center space-x-1 text-gray-900 font-medium">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight />
          <span>Service</span>
          <ChevronRight />
          <span>{title}</span>
        </div>
      </div>
      <div className="relative border rounded-xl overflow-hidden border-gray-200 shadow">
        <img
          src={bannerImage}
          alt=""
          className="h-90 w-full md:rounded-xl object-cover"
        />
        <div className="absolute flex-col flex items-center text-white justify-center w-full h-full top-0 right-0">
          <h1 className="font-bold text-3xl md:text-5xl flex items-center space-x-3 text-blue-600">
            <LucideIcon className="md:h-14 md:w-14 h-10 w-10" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 drop-shadow-lg">
              {title}
            </span>
          </h1>
        </div>
        <div className="absolute bottom-3 left-3 md:w-[95%] w-full flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
          <ul className="flex items-center space-x-2 text-xs">
            {tags?.map((t, index) => (
              <li
                key={index}
                className="px-2 py-1 bg-blue-600 text-white rounded-xl"
              >
                #{t}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 bg-gray-200 border border-gray-100 px-2 py-1 text-xs rounded">
            <CalendarRange className="h-4 w-4 " />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-lg">
          {summary}
        </h4>
      </div>
      <div className="border-l-4 bg-blue-100 border-blue-600 p-4 ">
        <p className="text-blue-600 font-medium"> {description}</p>
      </div>
      <div className="flex flex-col gap-6">
        {sections?.map((s, index) => (
          <div key={index}>
            <div className="flex items-center space-x-2">
              <Heading2 className="h-8 w-8 text-blue-600" />
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-lg">
                {s?.heading}
              </h2>
            </div>
            <p>{s?.content}</p>
            <div>
              <ServiceGallery images={s?.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
