import React from "react";
import AceEditor from "react-ace";

import "brace";
import "brace/mode/javascript";
import "brace/theme/solarized_light";
import { getPastelIndexFor } from "../../lib/color";

type Marker = {
  start: number;
  end: number;
};

type CodeEditorProps = {
  code?: string;
  markers?: Marker[];
  onChangeCode?: (newCode: string) => void;
  locked?: boolean;
};

const convertCodeIndexToRowCol = (code: string, index: number) => {
  let col = 0;
  let row = 0;
  let head = 0;
  while (head < index) {
    col += 1;

    if (code[head - 1] === "\n") {
      row += 1;
      col = 1;
    }

    head += 1;
    if (head >= code.length) {
      throw new Error(`head=${head}, code.length=${code.length}`);
    }
  }

  if (code[head - 1] === "\n") {
    row += 1;
    col = 0;
  }

  return { row, col };
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  code = "",
  markers = [],
  onChangeCode,
  locked = false,
}) => {
  return (
    <div className="w-full h-full">
      <AceEditor
        style={{
          height: "100%",
          backgroundColor: "#231F20",
        }}
        readOnly={locked}
        value={code}
        mode="javascript"
        theme="solarized_light"
        onChange={onChangeCode}
        name="code-editor"
        fontSize={14}
        tabSize={2}
        markers={markers.map(({ start, end }, idx) => ({
          startRow: convertCodeIndexToRowCol(code, start).row,
          startCol: convertCodeIndexToRowCol(code, start).col,
          endRow: convertCodeIndexToRowCol(code, end).row,
          endCol: convertCodeIndexToRowCol(code, end).col,
          className: `active-function-marker${getPastelIndexFor(idx)}`,
          type: "text",
        }))}
        showGutter
        highlightActiveLine={!locked}
        editorProps={{ $blockScrolling: Infinity }}
        focus
      />
      <style>
        {`
          .ace_editor {
            color: #000 !important; 
          }
        `}
      </style>
    </div>
  );
};

export default CodeEditor;
