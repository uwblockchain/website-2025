"use client";
import { useState } from "react";
import { allPosts } from "@/.contentlayer/generated";
import { SearchComponent } from "@/components/ui/searchBar";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-screen prose dark:prose-invert bg-hero-pattern">
      <h1>Homepage</h1>
    </div>
  );
}
