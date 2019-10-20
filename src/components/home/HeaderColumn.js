import React from "react";
import { useSelector } from "react-redux";
import { Table, Icon } from "semantic-ui-react";

const HeaderColumn = ({ onClick, type, title }) => {
  const { sortBy, sortType } = useSelector(({ filter }) => filter);
  return (
    <Table.HeaderCell onClick={() => onClick(type)}>
      {title}{" "}
      {sortBy === type && sortType !== 0 && (
        <Icon name={`${sortType === 1 ? "angle down" : "angle up"}`} />
      )}
    </Table.HeaderCell>
  );
};

export { HeaderColumn as default };
