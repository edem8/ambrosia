import React from "react";
import Link from "next/link";

// Replace this with real data fetching later
const mockBlogs = [
  { id: 1, title: "The Future of AI in Daily Life", date: "Aug 24" },
  { id: 2, title: "Why Minimalism Wins in Design", date: "Sep 29" },
  {
    id: 3,
    title: "Behind the Scenes: Our Creative Process",
    date: "Sep 21",
  },
  { id: 4, title: "10 Tools Every Designer Should Know", date: "Sep 15" },
  { id: 5, title: "Typography Trends in 2025", date: "Sep 12" },
  {
    id: 6,
    title: "How We Built a Global Brand from Scratch",
    date: "Sep 5",
  },
];

export default function Recents() {
  return (
    <div className=" tracking-wide w-100 py-3  px-4">
    
      <div className="my-4 text-left   tracking-wide text-sm">
        <Link href="/blogs" className="text-[#ea1d61] hover:underline">
          see my blog posts
        </Link>
      </div>
      <ul className="space-y-5">
        {mockBlogs.map((post) => (
          <li
            key={post.id}
            className="flex items-center  justify-between  border-b pb-2 text-sm md:text-sm"
          >
            <pan className="text-gray-900  cursor-pointer ">{post.title}</span>
            <span className="text-gray-500 text-xs md:text-sm">
              {post.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
