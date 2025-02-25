import React from 'react';

const Tag = ({ text, size = 1 }) => {
  return (
    <span
      className="inline-block bg-secondary rounded-full px-4 py-2 text-sm font-semibold text-bright mr-2 mb-2"
      style={{
        "font-size": `${size}rem`
      }}
    >
      {text}
    </span>
  );
};

const TagList = ({ tags }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
};

export { Tag, TagList };
