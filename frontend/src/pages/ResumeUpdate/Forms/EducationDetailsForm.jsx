import React from "react";
import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

const EducationDetailsForm = ({
  educationInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Education</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {educationInfo.map((education, index) => (
          <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Degree"
                placeholder="Bachelor of Science"
                type="text"
                value={education.degree || ""}
                onChange={(e) =>
                  updateArrayItem(index, "degree", e.target.value)
                }
              />

              <Input
                label="Institution"
                placeholder="ABC University"
                type="text"
                value={education.institution || ""}
                onChange={(e) =>
                  updateArrayItem(index, "institution", e.target.value)
                }
              />

              <Input
                label="Start Date"
                type="month"
                value={education.startDate || ""}
                onChange={(e) =>
                  updateArrayItem(index, "startDate", e.target.value)
                }
              />

              <Input
                label="End Date"
                type="month"
                value={education.endDate || ""}
                onChange={(e) =>
                  updateArrayItem(index, "endDate", e.target.value)
                }
              />
            </div>
            {educationInfo.length > 1 && (
              <button
                type="button"
                className="btn-remove"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn-add"
          onClick={() =>
            addArrayItem({
              degree: "",
              institution: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <LuPlus /> Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationDetailsForm;
