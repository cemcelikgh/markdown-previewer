import { marked } from 'marked';
import { useState } from 'react';

marked.use({
  breaks: true,
  gfm: true,
});

function Preview({text, display, setDisplay}) {
  
  const html = marked.parse(text);

  const [icon, setIcon] = useState('fa-expand');

  const previewElement = () => {
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
        <div id="preview"
          dangerouslySetInnerHTML={{__html: html}}
        ></div>
      </section>
    );
  };

  function handleToggle () {
    if (display.editor === true) {
      setIcon('fa-compress');
      setDisplay({
        ...display,
        editor: false
      });
      previewElement();
    } else {
      setIcon('fa-expand');
      setDisplay({
        ...display,
        editor: true
      });
      previewElement();
    }
  };

  return previewElement();

};

export default Preview;
