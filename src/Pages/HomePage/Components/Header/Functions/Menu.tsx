const File = () => {
    console.log("File Clicked")
};
const Edit = () => {};
const View = () => {};
const Options = () => {};
const Help = () => {};

const menu = [
    { name: "File", func: File },
    { name: "Edit", func: Edit },
    { name: "View", func: View },
    { name: "Options", func: Options },
    {name: "Help", func: Help}
];

export default menu;
