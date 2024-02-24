"use client";
import React, { forwardRef } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import { RefCallBack } from "react-hook-form";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default forwardRef<Object, EditorProps>(
  function RichTextEditor(props, ref) {
    return (
      <Editor
        // {...props}
        editorClassName={cn(
          "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
          // props.editorClassName
        )}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
        }}
        editorRef={(r) => {
          if (typeof ref === "function") {
            ref(r);
          } else if (ref) {
            ref.current = r;
          }
        }}
        {...props}
      />
    );
  }
);