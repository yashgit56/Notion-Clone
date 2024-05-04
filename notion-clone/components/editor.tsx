import { useState } from "react";
import { useTheme } from "next-themes";
import { BlockNoteEditor, Block } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
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
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Load initial content from props
  const initialBlocks: Block[] = initialContent
    ? JSON.parse(initialContent)
    : [];

  // Create a new editor instance with initial content
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          // Saves the document JSON to local storage
          const jsonBlocks = editor.document;
          localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));

          // Call the onChange callback with the updated content
          onChange(JSON.stringify(jsonBlocks));
        }}
      />
    </div>
  );
};

export default Editor;