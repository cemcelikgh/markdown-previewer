import { marked } from 'marked';

marked.use({
  breaks: true,
  gfm: true,
});

function Preview({text, display, setDisplay}) {
  
  const html = marked.parse(text);

  const previewElement = (icon = 'fa-expand') => {
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
      previewElement('fa-expand');
      setDisplay({
        ...display,
        editor: false
      });
    } else {
      previewElement('fa-compress');
      setDisplay({
        ...display,
        editor: true
      });
    }
  };

  return previewElement();

};

export default Preview;
