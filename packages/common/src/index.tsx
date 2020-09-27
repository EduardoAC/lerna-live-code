// packages/common/Heading.js
import React from "react";

function Heading({ level = "1", title }: { level: string; title: string }) {
  return React.createElement(`h${level}`, {}, title);
}

export default Heading;
