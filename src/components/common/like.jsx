import React from "react";

const Like = ({ liked, onClick }) => {
  let className = "fa fa-heart";
  if (!liked) className += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Like;
