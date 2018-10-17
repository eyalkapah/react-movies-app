import React from "react";

const ListGroup = props => {
  const {
    allItems,
    onItemSelect,
    textProperty,
    valueProperty,
    selectedItem
  } = props;

  return (
    <div className="list-group">
      {allItems.map(item => (
        <a
          key={item[valueProperty] ? item[valueProperty] : 1}
          className={
            item === selectedItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
