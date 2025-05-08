import React from "react";
import TemplateOne from "./TemplateOne";

const RenderResume = ({
  templateId,
  resumeData,
  colorPlatte,
  containerWidth,
}) => {
  switch (templateId) {
      case "1":
        return (
          <TemplateOne 
          resumeData={resumeData}
          colorPlatte={colorPlatte}
          containerWidth={containerWidth}
          />
      );
      default: 
      return (
        <TemplateOne 
        resumeData={resumeData}
        colorPlatte={colorPlatte}
        containerWidth={containerWidth}
        />
    );
  }
};

export default RenderResume;
