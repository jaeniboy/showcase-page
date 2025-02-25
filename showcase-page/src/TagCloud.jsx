import React from "react";
import { Tag } from "./Tags";

const TagCloud = ({ data }) => {

    // transform data
    let tagData = {}

    data.forEach(project => {
        project.tags.forEach(tag => {
            if (!Object.keys(tagData).includes(tag)) {
                tagData[tag] = 1
            } else {
                tagData[tag]++
            }
        })
    })

    // compute tag size
    const maxCount = Math.max(...Object.values(tagData));

    const getTagSize = (count) => {
        const minSize = 0.5;
        const maxSize = 2;
        return minSize + (count / maxCount) * (maxSize - minSize);
    };

    return (
        <div className="flex flex-wrap items-center justify-center md:w-3/4 lg:w-2/3 mx-auto">
            {Object.entries(tagData).map(([text, count]) => (
                <Tag text={text} size={getTagSize(count)}></Tag>
            ))}
        </div>
    )
}

export default TagCloud