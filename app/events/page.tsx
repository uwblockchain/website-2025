"use client";
import { useState } from "react";
import { allEvents } from "@/.contentlayer/generated";
import { SearchComponent } from "@/components/ui/searchBar";

import Link from "next/link";

export default function Event() {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPost =
    category === "all"
      ? allEvents.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allEvents.filter(
          (post) =>
            post.category === category &&
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleClick = (category: string) => {
    setCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    console.log(term);
  };

  return (
    <div className="prose dark:prose-invert w-screen">
      <div>
        <button className="mx-4" onClick={() => handleClick("all")}>
          All
        </button>
        <button className="mx-4" onClick={() => handleClick("research")}>
          Research
        </button>
        <button className="mx-4" onClick={() => handleClick("news")}>
          News
        </button>
        <div className="mt-10">
          <SearchComponent onSearch={handleSearch} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center grid sm:grid-cols-2 divide-black-600">
        {filteredPost.map((post) => (
          <article key={post._id}>
            <Link className="no-underline space-y-0" href={post.slug}>
              <h2 className="hover:text-green-500 transition-colors duration-450 mb-0">
                {post.title}
              </h2>
              <p className="italic text-gray-500">
                {post.category && <span>Category: {post.category}</span>}
              </p>
              <img src={post.image} alt={post.image} width="200px" height="200px" />
              {post.description && <p>{post.description}</p>}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
