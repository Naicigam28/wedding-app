import React from "react";

function Youtube() {
  return (
    <iframe
    style={{padding:"5px",margin:"5px"}}
      width="90%"
      height="315"
      src="https://www.youtube-nocookie.com/embed/dFQPMdEL3oc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

export default Youtube
