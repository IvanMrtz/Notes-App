import React, { useState, useEffect, memo } from "react";

export default memo(function Hover(props) {
  const { children, over, out } = props;
  const [ref, setRef] = useState();

  useEffect(() => {
    if (ref) {
      ref.addEventListener("mouseover", over);
      ref.addEventListener("mouseout", out);
    }

    return () => {
      removeEventListener("mouseover", over);
      removeEventListener("mouseout", out);
    };
  }, [ref]);

  return React.cloneElement(children, { ref: setRef }, null);
});