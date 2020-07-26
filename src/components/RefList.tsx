import React from "react";
import { Typography } from '@material-ui/core'

export interface RefListProps {
  items: {
    text: string;
    url: string;
  }[];
}

const rootStyle = {
  width: "100%",
  textAlign: "left" as "left",
};

export default function RefList(props: RefListProps) {
  return (
    <div style={rootStyle}>
      <Typography  variant="h4" color="primary">References</Typography>
      <ul>
        {props.items.map((item) => (
          <li style={{ lineHeight: "1.75" }} key={item.text}>
            <a rel="noopener noreferrer" target="_blank" href={item.url}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
