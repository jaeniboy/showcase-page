import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className="inline-block bg-blue-700 rounded-full px-4 py-2 text-sm font-semibold text-white mr-2 mb-2">
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
