import React, { useState } from "react";
const Print = () => {
  const [show, setShow] = useState(false);
  const handleEvent = () => {
    return "Closing now";
  };

  return (
    <>
      {show ? <p>{handleEvent()}</p> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Print;
