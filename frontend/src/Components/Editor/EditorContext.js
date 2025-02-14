import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "./Tools";

export const EditorContext = createContext();

function EditorContextProvider(props) {
    const editorInstanceRef = useRef(null);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            placeholder: "Write your content here!",
            tools: EDITOR_JS_TOOLS,
        })

        editorInstanceRef.current = editor;
    }

    return( 
        <EditorContext.Provider value={{initEditor, editorInstanceRef}}>
            {props.children}
        </EditorContext.Provider>
    );
}

export default EditorContextProvider;