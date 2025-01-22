"use client";
import { useState } from "react";
import { allPosts } from "@/.contentlayer/generated";
import { SearchComponent } from "@/components/ui/searchBar";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPost =
    category === "all"
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allPosts.filter(
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
    <div className="w-screen prose dark:prose-invert">
      <div className="flex justify-between pt-10 ">
        <Input
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search"
          className="w-2/3"
          type="text"
        />

        <Combobox
          options={[
            { value: "all", label: "All" },
            { value: "research", label: "Research" },
            { value: "news", label: "News" },
          ]}
          placeholder="Select Category..."
          onSelect={handleClick}
        />
      </div>
      <div className="divide-y divide-black-500">
        {filteredPost.map((post) => (
          <article key={post._id}>
            <Link className="no-underline" href={post.slug}>
              <h2 className="transition-colors hover:text-green-500 duration-450">
                {post.title}
              </h2>
              <p className="italic text-gray-500">
                {post.category && <span>Category: {post.category}</span>}
              </p>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
