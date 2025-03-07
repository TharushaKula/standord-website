import React from "react";

interface Link {
  name: string;
  link: string;
}

interface ItemProps {
  Links: Link[];
  title: string;
}

const Item: React.FC<ItemProps> = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link: Link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-[#5ce1e6] duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;