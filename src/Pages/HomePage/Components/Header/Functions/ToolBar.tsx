import { AiFillFileAdd } from "react-icons/ai";
import {
    MdContentCut,
    MdContentPaste,
    MdCopyAll,
    MdHelp,
    MdRedo,
    MdSearch,
    MdUndo
} from "react-icons/md";
import { TbLayoutSidebar } from "react-icons/tb";

const togglePanel = () => {};
const Search = () => {};
const Insert = () => {};
const Undo = () => {};
const Redo = () => {};
const Copy = () => {};
const Paste = () => {};
const Cut = () => {};

const Help = () => {};

const toolbar = {
  copy_and_paste: [
    { name: "Copy", svgpath: <MdCopyAll size={20} />, func: Copy },
    { name: "Cut", svgpath: <MdContentCut size={20} />, func: Cut },
    { name: "Paste", svgpath: <MdContentPaste size={20} />, func: Paste },
  ],
  undo_redo: [
    { name: "Undo", svgpath: <MdUndo size={20} />, func: Undo },
    { name: "Redo", svgpath: <MdRedo size={20} />, func: Redo },
  ],
  single: [
    {
      name: "Toggle Panel",
      svgpath: <TbLayoutSidebar size={20} />,
      func: togglePanel,
    },
    { name: "Search", svgpath: <MdSearch size={20} />, func: Search },
    { name: "Insert", svgpath: <AiFillFileAdd size={20} />, func: Insert },
  ],
  help: { name: "Help", svgpath: <MdHelp size={20} />, func: Help },
};

export default toolbar;
