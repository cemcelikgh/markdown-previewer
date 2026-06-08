import '../others/preview.css';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import parse from 'html-react-parser';

marked.use({
  breaks: true,
  gfm: true
});

function Preview({text, display, setDisplay}) {

  const [icon, setIcon] = useState('fa-expand');

  function handleToggle () {
    if (display.editor === true) {
      setIcon('fa-compress');
      setDisplay({
        ...display,
        editor: false
      });
    } else {
      setIcon('fa-expand');
      setDisplay({
        ...display,
        editor: true
      });
    }
  };

  const [element, setElement] = useState(<></>); 

  useEffect(() => {
    (async () => {
      const htmlString = await marked.parse(text);
      setElement(parse(htmlString));
    })();
  }, [text]);

  return (
    <section id="preview-section">
      <div className='top-bar'>
        <div className='top-bar-left'>
          <i className="fa-solid fa-display"></i>
        </div>
        <i className={`fa-solid ${icon}`}
          onClick={handleToggle}
        ></i>
      </div>
      <div id="preview">
        {element}
      </div>
    </section>
  );

};

export default Preview;
