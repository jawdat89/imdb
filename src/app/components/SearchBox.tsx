"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
  }

  return (
    <form className="flex max-w-6xl mx-auto px-5 " onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-sm placeholder:gray-400 text-gray-900 dark:text-gray-100 px-4 outline-none focus:ring-2 focus:ring-blue-400 bg-slate-500 bg-opacity-20 flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400 border ronded-sms px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-amber-600 hover:text-white transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}
