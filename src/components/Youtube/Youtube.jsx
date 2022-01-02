import React from "react";
import { Typography} from "@mui/material";
function Youtube() {
  return (<><Typography variant="h4">Livestream</Typography>
    <iframe
    style={{padding:"5px",margin:"2px"}}
      width="98%"
      height="315"
      src="https://www.youtube-nocookie.com/embed/dFQPMdEL3oc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe></>
  );
}

export default Youtube
