import React from "react";

// @ts-ignore
const MessageBox = ({ active, text, type, style }) => (
    <div className={`w-full py-4 px-4 my-4 text-[16px] ${style?style.toString():"bg-stone-900 text-stone-200"} rounded-md font-serif font-normal ${active?"":"hidden"}`} role="alert">
        <span className="font-bold">{type?type.toString():"example"}</span>: {text?text.toString():"this is a message box."}
    </div>
);

export default MessageBox;