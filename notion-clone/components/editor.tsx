"use client" ;

import { useBlockNote, BlockNoteView } from "@blocknote/react";
import { BlockConfig, BlockNoteEditor, InlineContentSchema, PartialBlock, PropSchema, StyleSchema } from "@blocknote/core" ;
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
 onChange: (value: string) => void;
 initialContent?: string;
 editable?: boolean;
}

const Editor = ({
 onChange,
 initialContent,
 editable,
}: EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore() ;

    const handleUpload = async (file : File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });

        return response.url ;
    }

    // type BlockConfig = {
    //     type: string;
    //     readonly propSchema: PropSchema;
    //     content: "inline" | "none" | "table";
    // }; 

    // type BlockConfigRecord = Record<string, BlockConfig>;

    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock<BlockConfig, InlineContentSchema, StyleSchema>[]
        : undefined,
        onEditorContentChange: (editor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        },
        uploadFile: handleUpload
    }) ;

    return (
        <div>
        <BlockNoteView
            editor={editor}
            theme={resolvedTheme === "dark" ? "dark" : "light"} 
        ></BlockNoteView>    
        </div>
    );
};

export default Editor ;

