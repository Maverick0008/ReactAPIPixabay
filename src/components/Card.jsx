import React from "react";
const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.webformatURL} alt={image.title} />
      <div className="font-bold text-fuchsia-600 text-xl m-4">
        Photo by {image.user}
      </div>
      <ul className="ml-4 mb-4">
        <li>
          <strong>Views:</strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads:</strong>
          300
        </li>
        <li>
          <strong>Likes:</strong>
          {image.likes}
        </li>
      </ul>
      <div className="py-4 px-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Card;
