"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileView from "../../../components/views/mobileView";
import DesktopView from "../../../components/views/desktopView";
import ProjectPage from "../../../components/projectDesktop";
import TabView from "../../../components/views/tabView";
import ProjectPageMobile from "../../../components/projectMobile";

const ProjectPageCombined: React.FC = () => {
  return (
    <div className="">
      <MobileView>
        <ProjectPageMobile /> 
      </MobileView>
      <TabView>
        <ProjectPage />
      </TabView>
      <DesktopView>
        <ProjectPage />
      </DesktopView>
    </div>
  );
};

export default ProjectPageCombined;
