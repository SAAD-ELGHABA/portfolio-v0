import React, { useEffect, useState } from "react";
import Main from "../components/services_component/Main";
import { useParams } from "react-router";
import Aside from "../components/services_component/Aside";
import services from "../constants/services.json";
import * as Icons from "lucide-react";
function Service() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    const getService = () => {
      setService(services?.find((s) => s?.slug == slug));
    };
    getService();
  }, []);
  const LucideIcon = Icons[service?.icon] || Icons["Circle"];
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="min-h-screen w-[90%] mx-auto  py-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Main
          title={service?.title}
          bannerImage={service?.bannerImage}
          LucideIcon={LucideIcon}
          tags={service?.tags}
          date={service?.dateCreated}
          description={service?.description}
          summary={service?.summary}
          sections={service?.sections}
        />
        <Aside asideHighlights={service?.aside?.highlights} />
      </div>
    </div>
  );
}

export default Service;
