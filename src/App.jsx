import './App.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Previewer';
import initialTextCodes from './others/initialTextCodes';

function App() {

  const [text, setText] = useState(initialTextCodes);
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
            display={display}
            setDisplay={setDisplay}
          />
        : null
      }
    </>
  );

};

export default App;
