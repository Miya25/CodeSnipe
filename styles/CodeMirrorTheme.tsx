import { FC, useEffect, useState } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import { getCodeMirrorTheme, ICodeMirrorTheme } from "../config/codeMirrorTheme";
import { useColorModeValue } from "@chakra-ui/react";
import { BACKGROUND_COLOR } from "../config/colors";

const CodeMirrorTheme: FC = () => {
  const { darkMode, font } = usePanelSettings();
  const bg = useColorModeValue(BACKGROUND_COLOR.light, BACKGROUND_COLOR.dark);

  const [codeMirrorTheme, setCodeMirrorTheme] = useState<ICodeMirrorTheme>({
    ...getCodeMirrorTheme(darkMode)
  });

  useEffect(() => {
    setCodeMirrorTheme({ ...getCodeMirrorTheme(darkMode) });
    
    // Update CSS variable for font
    document.documentElement.style.setProperty('--font-family', `"${font}, monospace"`);
    
    // Apply to existing CodeMirror
    const editorElement = document.querySelector('.CodeMirror');
    if (editorElement) {
      (editorElement as HTMLElement).style.fontFamily = `${font}, monospace !important`;
    }
  }, [darkMode, font]);

  return (
    <style jsx global>{`
      // before animation
      body {
        overflow: auto;
      }

      // default override
      .CodeMirror {
        font-family: ${font}, monospace !important;
        font-size: 1em !important;
        height: max-content;
        background-color: ${bg} !important;
      }
      .cm-s-dracula .CodeMirror-linenumber {
        text-align: left !important;
      }

      // dracula theme
      .cm-s-dracula .CodeMirror-gutters,
      .cm-s-dracula.CodeMirror {
        background-color: ${bg} !important;
        color: ${codeMirrorTheme.fontColor} !important;
        border: none;
      }
      .cm-s-dracula .CodeMirror-gutters {
        color: transparent;
        background-color: ${bg} !important;
      }
      .cm-s-dracula .CodeMirror-cursor {
        border-left: solid thin ${codeMirrorTheme.fontColor};
      }
      .cm-s-dracula .CodeMirror-linenumber {
        color: ${codeMirrorTheme.lineNumberColor};
        text-align: left !important;
      }
      .cm-s-dracula .CodeMirror-selected {
        background: ${codeMirrorTheme.selection};
      }
      .cm-s-dracula .CodeMirror-line::selection,
      .cm-s-dracula .CodeMirror-line > span::selection,
      .cm-s-dracula .CodeMirror-line > span > span::selection {
        background: ${codeMirrorTheme.selection};
      }
      .cm-s-dracula .CodeMirror-line::-moz-selection,
      .cm-s-dracula .CodeMirror-line > span::-moz-selection,
      .cm-s-dracula .CodeMirror-line > span > span::-moz-selection {
        background: ${codeMirrorTheme.selection};
      }
      .cm-s-dracula span.cm-comment {
        color: ${codeMirrorTheme.lineNumberColor};
      }
      .cm-s-dracula span.cm-string,
      .cm-s-dracula span.cm-string-2 {
        color: ${codeMirrorTheme.stringColor};
      }
      .cm-s-dracula span.cm-number {
        color: ${codeMirrorTheme.numberColor};
      }
      .cm-s-dracula span.cm-variable {
        color: ${codeMirrorTheme.variableColor};
      }
      .cm-s-dracula span.cm-variable-2 {
        color: ${codeMirrorTheme.matchingBracketColor};
      }
      .cm-s-dracula span.cm-def {
        color: ${codeMirrorTheme.variableColor};
      }
      .cm-s-dracula span.cm-operator {
        color: ${codeMirrorTheme.operatorColor};
      }
      .cm-s-dracula span.cm-keyword {
        color: ${codeMirrorTheme.operatorColor};
      }
      .cm-s-dracula span.cm-atom {
        color: ${codeMirrorTheme.numberColor};
      }
      .cm-s-dracula span.cm-meta {
        color: ${codeMirrorTheme.fontColor};
      }
      .cm-s-dracula span.cm-tag {
        color: ${codeMirrorTheme.operatorColor};
      }
      .cm-s-dracula span.cm-attribute {
        color: ${codeMirrorTheme.variableColor};
      }
      .cm-s-dracula span.cm-qualifier {
        color: ${codeMirrorTheme.variableColor};
      }
      .cm-s-dracula span.cm-property {
        color: ${codeMirrorTheme.propsColor};
      }
      .cm-s-dracula span.cm-builtin {
        color: ${codeMirrorTheme.variableColor};
      }
      .cm-s-dracula span.cm-type,
      .cm-s-dracula span.cm-variable-3 {
        color: ${codeMirrorTheme.typeColor};
      }
      .cm-s-dracula .CodeMirror-activeline-background {
        background: ${codeMirrorTheme.selection};
      }
      .cm-s-dracula .CodeMirror-matchingbracket {
        text-decoration: underline;
        color: ${codeMirrorTheme.matchingBracketColor} !important;
      }
    `}</style>
  );
};

export default CodeMirrorTheme;
