import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const revealPoemButton =
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" onClick={props.revealPoem} className="FinalPoem__reveal-btn" />
    </div>;

  const poemContent = props.submissions.map((line, i) => {
    return <p key={ i }>{ line }</p>;
  });

  const revealedPoem =
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      { poemContent }
    </section>;

  const content = props.isSubmitted ? revealedPoem : revealPoemButton;

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
