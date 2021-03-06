import React, { useState } from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const [show, setShow] = useState(false)
  
  const onButtonClick = () => {
    setShow(true)

    props.componentDissapear()
  };

  const lineComponents = props.props.map((line) => {
    return (
    <p>
      {line}
    </p>
    );
  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className={show ? "noshow" : "FinalPoem__reveal-btn-container"}>
        <input type="button" onClick={onButtonClick} value="We are finished: Reveal the Poem" className={show ? "noShow" : "FinalPoem__reveal-btn"} />
      </div>
      <p className={show ? "show" : "noShow"}>
      {lineComponents}
      </p>
    </div>
  );
}

FinalPoem.propTypes = {
  props: PropTypes.array,
  componentDissapear: PropTypes.func.isRequired,
};

export default FinalPoem;
