
// @ts-ignore
export const MessageBox: JSX.Element = ({ active, text, type, style }): JSX.Element => (
    <div className={`w-full px-4 py-4 my-4 ${style || "bg-stone-900 text-stone-200"} text-[16px] font-extralight rounded-sm ${active ||  "hidden"}`} role="alert">
        <span className="font-bold uppercase">{type || "example"}: </span>
        {text || "this is a message box."}
    </div>
)

export default MessageBox;