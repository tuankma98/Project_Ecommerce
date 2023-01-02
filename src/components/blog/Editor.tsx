import React, { useEffect, useRef } from 'react';

type EditorType = {
  onChange: (data?: any) => void;
  editorLoaded: boolean;
  name: string;
  value?: any;
};

const Editor: React.FC<EditorType> = ({
  onChange,
  editorLoaded,
  name,
  value,
}) => {
  const editorRef = useRef(null);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default Editor;
