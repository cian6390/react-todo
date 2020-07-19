import React from "react";

export interface RefListProps {
  items: {
    text: string;
    url: string;
  }[];
}

const rootStyle = {
  width: '100%',
  maxWidth: '450px',
  textAlign: 'left' as 'left'
}

export default function RefList(props: RefListProps) {
  return (
    <div style={rootStyle}>
      <h3>References</h3>
      <ul>
        {props.items.map((item) => (
          <li key={item.text}><a rel="noopener noreferrer" target="_blank" href={item.url}>{item.text}</a></li>
        ))}
      </ul>
    </div>
  );
}
