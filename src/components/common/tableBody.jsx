import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map((column, index) => (
              <td key={this.createKey(item, column)}>
                {index === 0 ? (
                  <Link to={`/movies/${item._id}`}>
                    {this.renderCell(item, column)}
                  </Link>
                ) : (
                  this.renderCell(item, column)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
