import React from "react";

const Like = props => {
  let className = "fa fa-heart";
  if (!props.liked) className += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Like;
