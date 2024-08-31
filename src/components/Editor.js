import { useState } from "react";

function Editor({text, setText, display, setDisplay}) {

  const [size, setSize] = useState({
    icon: 'fa-expand',
    area: null
  });

  function handleChange(event) {
    setText(event.target.value);
  };

  const editElement = () => {
    return (
      <section id="editor-section">
        <div className='top-bar'>
          <div className='top-bar-left'>
            <i className="fa-regular fa-keyboard"></i>
          </div>
          <i className={`fa-solid ${size.icon}`}
            onClick={handleToggle}
          ></i>
        </div>
        <textarea id="editor"
          style={size.area}
          value={text}
          onChange={handleChange}
        ></textarea>
      </section>
    );
  };

  function handleToggle () {
    if (display.previewer === true) {
      setSize({
        ...size,
        icon: 'fa-compress',
        area: {minHeight: '90vh'}
      });
      setDisplay({
        ...display,
        previewer: false
      });
      editElement();
    } else {
      setSize({
        ...size,
        icon: 'fa-expand',
        area: null
      });
      setDisplay({
        ...display,
        previewer: true
      });
      editElement();
    }
  };

  return editElement();

};

export default Editor;
