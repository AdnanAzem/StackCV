import React from "react";
import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import RatingInput from "../../../components/ResumeSections/RatingInput";

const AdditionalInfoForm = ({
  languages,
  interests,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Additional Info</h2>

      {/* Languages Section */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Languages</h3>
        <div className="flex flex-col gap-4">
          {languages?.map((lang, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <Input
                  label="Language"
                  placeholder="e.g. English"
                  value={lang.name || ""}
                  onChange={(e) =>
                    updateArrayItem("languages", index, "name", e.target.value)
                  }
                />

                <div>
                  <label className="text-xs font-medium text-slate-600 mb-7 block">Proficiency</label>
                  <RatingInput
                    value={lang.progress || 0}
                    total={5}
                    onChange={(value) =>
                      updateArrayItem("languages", index, "progress", value)
                    }
                    activeColor="#0ea5e9"
                    inactiveColor="#e0f2fe"
                  />
                </div>
              </div>
              {languages.length > 1 && (
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeArrayItem("languages", index)}
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
              addArrayItem("languages", {
                name: "",
                progress: 0,
              })
            }
          >
            <LuPlus /> Add Language
          </button>
        </div>
      </div>

      {console.log(interests)}

      {/* Interests Section */}
      <div className="mt-8 mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Interests</h3>
        <div className="flex flex-col">
          {interests?.map((interest, index) => (
            <div key={index} className="relative rounded-lg">
              <Input
                placeholder="Reading"
                value={interest || ""}
                onChange={(e) =>
                  updateArrayItem("interests", index, null, e.target.value)
                }
              />

              {interests.length > 1 && (
                <button
                  type="button"
                  className="absolute top-6.5 right-3 text-red-600 hover:underline cursor-pointer"
                  onClick={() => removeArrayItem("interests", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn-add"
            onClick={() => addArrayItem("interests", "")}
          >
            <LuPlus /> Add Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
