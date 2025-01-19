import React, { useRef, useEffect }  from 'react';
import EditorJS from '@editorjs/editorjs';
import EDITOR_JS_TOOLS  from './Tools.js';

const Editor = () => {
  const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorBlock',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();
                
                console.log(content);
            },
            tools: EDITOR_JS_TOOLS,
            placeholder: "Write your content here!"
        });
    }

    useEffect(() => {
        if(ejInstance.current === null){
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        }
    }, [])
    return <div id="editorBlock"></div>
}

export default Editor;