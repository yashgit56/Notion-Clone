import { useState } from "react";
import { useTheme } from "next-themes";
import { BlockNoteEditor, Block, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  useCreateBlockNote,
  useEditorChange,
} from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          const jsonBlocks = editor.document;
          localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
          onChange(JSON.stringify(jsonBlocks));
        }}
      />
    </div>
  );
};

export default Editor;