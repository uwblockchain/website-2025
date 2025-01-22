import * as React from "react";
import { useState } from "react";

export function SearchComponent(props: { onSearch: (term: string) => void }) {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setLocalSearchTerm(term);
    props.onSearch(term);
    console.log(term);
  };

  return (
    <form className="relative w-2/4 mb-3">
      <div className="relative">
        <input
          className="w-full px-4 py-2 text-gray-500 bg-transparent border-b-2 outline-none"
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
          value={localSearchTerm}
        />
      </div>
    </form>
  );
}
