"use client";
import React, { useEffect, useRef, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

type SearchProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
};

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  onSearch,
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const submit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!open) {
      setOpen(true);
      return;
    }
    onSearch?.(query.trim());
    setOpen(false);
  };

  return (
    <>
      {/* Search trigger button */}
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant="outline"
        size="md"
        showArrow={false}
        className={`h-12 w-12 p-0 bg-white border-gray-300 text-black hover:bg-blue-600 hover:border-blue-600 hover:text-white ${className}`}
      >
        <SearchIcon className="h-5 w-5" aria-hidden="true" />
      </Button>

      {/* Full-screen search overlay */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-blue-800/80">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close search"
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Search form */}
            <div className="flex h-full items-center justify-center px-4">
              <form
                onSubmit={submit}
                className="w-full max-w-2xl"
                role="search"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                }}
              >
                <label htmlFor="fullscreen-search" className="sr-only">
                  Search the site
                </label>
                <input
                  ref={inputRef}
                  id="fullscreen-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-0 border-b-2 border-white/50 text-white text-2xl md:text-4xl placeholder:text-white/70 focus:outline-none focus:border-white pb-4 text-center"
                />
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Search;
