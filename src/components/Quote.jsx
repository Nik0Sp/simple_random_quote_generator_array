import React from "react";

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <div>

      <h4>"{text}"</h4>
      </div>
    <div>
    <p>Author</p>

    <h4 className="quote-author"> {author}</h4>
    </div>
    </div>
  );
};

export default Quote;
