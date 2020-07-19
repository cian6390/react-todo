import "./DND.scss";
import React from "react";
import RefList from '../RefList'
import useDraggable from "./draggable";

export default function DND() {
  const items = [
    { number: "1", title: "🇦🇷 Argentina" },
    { number: "2", title: "🤩 YASS" },
    { number: "3", title: "👩🏼‍💻 Tech Girl" },
    { number: "4", title: "💋 Lipstick & Code" },
    { number: "5", title: "💃🏼 Latina" },
  ];

  const { list, onDragStart, onDragOver, onDragLeave, onDrop } = useDraggable(items);

  const refs = [
    {
      text: 'MDN HTML 拖放 API',
      url: 'https://developer.mozilla.org/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API'
    }, {
      text: 'Creating a Drag and Drop List with React Hooks',
      url: 'https://dev.to/florantara/creating-a-drag-and-drop-list-with-react-hooks-4c0i'
    }
  ]

  return (
    <section>
      <div className="drag-list">
        {list.map((item, index) => (
          <div
            className="drag-list__list-item list-item"
            key={index}
            data-position={index}
            draggable="true"
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <span className="list-item__number">{item.number}</span>
            <p className="list-item__title">{item.title}</p>
          </div>
        ))}
      </div>
      <RefList items={refs}/>
    </section>
  );
}
