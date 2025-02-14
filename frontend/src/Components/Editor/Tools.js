import Header from "@editorjs/header"
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Underline from '@editorjs/underline';
import AlignmentTune from 'editor-js-alignment-tune';
import ColorPicker from 'editorjs-color-picker';
import Table from '@editorjs/table'
import CodeTool from '@editorjs/code';
// import ImageTool from '@editorjs/image';

const EDITOR_JS_TOOLS = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        tunes: ['alignmentTune']
    },
    header: {
        class: Header,
        inlineToolbar: true,
        tunes: ['alignmentTune']
    },
    list: {
        class: List,
        inlineToolbar: true,
        tunes: ['alignmentTune'],
        config: {
          defaultStyle: 'unordered',
          default: 'left',
        },
    },
    code: CodeTool,
    quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: 'Quote\'s author',
        },
    },
    // image: {
    //     class: ImageTool,
    //     config: {
    //       endpoints: {
    //         byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
    //         byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
    //       }
    //     }
    // },
    underline: Underline,
    alignmentTune: {
        class: AlignmentTune
    },
    ColorPicker: {
        class: ColorPicker,
    },
    table: {
        class: Table,
        tunes: ['alignmentTune'],
    },
}

export default EDITOR_JS_TOOLS;