import React from 'react';

const Tag = ({ text, size = 1 }) => {
  return (
    <span
      className="inline-block bg-teal-200 bg-linear-to-b from-teal-50 to-teal-200 rounded-full px-4 py-2 text-sm font-medium text-teal-700 mr-2 mb-2 shadow-sm"
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
