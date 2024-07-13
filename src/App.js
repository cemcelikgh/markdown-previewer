import './App.css';
import './others/preview.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import initialText from './others/defaultText';

function App() {

  const [text, setText] = useState(initialText);
  const [display, setDisplay] = useState({
    editor: true,
    previewer: true
  });

  return (
    <>
      {display.editor === true
        ? <Editor
            text={text}
            setText={setText}
            display={display}
            setDisplay={setDisplay}
          />
        : null
      }
      {display.previewer === true
        ? <Preview
            text={text}
            setText={setText}
            display={display}
            setDisplay={setDisplay}
          />
        : null
      }
    </>
  );

};

export default App;
