import { useFont } from "@/Utils/FontChange";
import ProjectData from "../../../../ProjectSample/Save/SaveSettings.json";
import toolbar from "./Functions/ToolBar";

function Toolbar() {
  const projectData = ProjectData.latest_chapter;
  const { font, setFont, list_of_fonts } = useFont();
  console.log(font)
  return (
    <section className=" dark:bg-gray-800 dark:text-gray-50 bg-gray-50 w-full flex flex-col">
      <section className="flex gap-2 py-2 items-center px-2">
        {toolbar.single.map((tools, key) => {
          return (
            <span
              key={key}
              className="p-[1px] cursor-pointer"
              title={tools.name}
              onClick={tools.func}
            >
              {tools.svgpath}
            </span>
          );
        })}
        <span className="flex gap-[1px] bg-gray-800 dark:bg-gray-100 rounded-md">
          {toolbar.undo_redo.map((tools, key) => {
            return (
              <span
                key={key}
                className="bg-gray-200 cursor-pointer dark:bg-gray-700 p-[2px]"
                title={tools.name}
                onClick={tools.func}
              >
                {tools.svgpath}
              </span>
            );
          })}
        </span>
        <span className="flex gap-[1px] bg-gray-800 dark:bg-gray-100 rounded-md">
          {toolbar.copy_and_paste.map((tools, key) => {
            return (
              <span
                key={key}
                className="bg-gray-200 cursor-pointer dark:bg-gray-700 p-[2px]"
                title={tools.name}
                onClick={tools.func}
              >
                {tools.svgpath}
              </span>
            );
          })}
        </span>
        <span className="flex flex-grow justify-center">
          Chapter {projectData.id} : {projectData.name}
        </span>
        <span title={toolbar.help.name} onClick={toolbar.help.func}>
          {toolbar.help.svgpath}
        </span>
      </section>
      <section className="w-full flex gap-2 bg-gray-50 dark:bg-gray-800 p-[4px] dark:text-gray-50">
        <section className="h-auto w-auto">
          <select className="rounded-md border-[0px] w-full h-full border-blue-400 bg-gray-100 dark:bg-gray-700"
            title="Select Font"
            onChange={(e) => {
              setFont(e.target.value);
            }}
          >
            {list_of_fonts.map((font: string, key: number) => {
              return (
                <option className="p-[2px]" key={key} style={{fontFamily: font}} value={font}>
                  {font}
                </option>
              );
            })}
          </select>
        </section>
      </section>
    </section>
  );
}

export default Toolbar;
