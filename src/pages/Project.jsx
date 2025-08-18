import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import projects from "../constants/projects.json";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import VideoPlayer from "../components/projects_component/VideoPlayer";
import ImageSlider from "../components/ImageSlider";
function Project() {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    setProject(projects?.find((p) => p?.slug === slug));
  }, [slug]);
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen">
      <div className="w-[90%] mx-auto my-10">
        <div className="flex items-center space-x-1 text-gray-900 font-medium text-sm">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight />
          <span>Project</span>
          <ChevronRight />
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-lg">
            {project?.title}
          </span>
        </div>
        <div>
          <div className="lg:grid grid-cols-3 my-10 gap-6 items-center">
            <div className="col-span-2">
              <VideoPlayer
                src={project?.video}
                poster={project?.img}
                title={`demo : ${project?.title}`}
              />
            </div>
            <div className="mt-4 lg:mt-0">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-lg">
                {project?.summary}
              </h1>
              <ul className="mt-4 space-y-2 space-x-2 text-sm">
                {project?.tech?.map((t, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-600 border border-blue-600 px-2 py-1 rounded-full hover:bg-blue-200 cursor-pointer inline-block"
                  >
                    {"#" + t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ImageSlider images={project?.gallery} dir={true} />
          </div>
          <div className="lg:w-[70%]">
            <div
              dangerouslySetInnerHTML={{
                __html: project?.description.replace(/\n/g, "<br/>"),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
