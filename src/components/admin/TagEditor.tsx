"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";

type TagEditorProps = {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
};

/**
 * Rich tag/chip editor for string arrays (skills, metrics, stack, chips, etc.).
 * Supports Enter to add, Backspace on empty to remove last, click × to remove.
 */
export function TagEditor({ tags, onChange, placeholder = "Add item…", disabled }: TagEditorProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
      setInput("");
    }
  };

  const removeTag = (index: number) => {
    onChange(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && input === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div
      className="tag-editor"
      onClick={() => inputRef.current?.focus()}
      role="group"
      aria-label="Tag editor"
    >
      {tags.map((tag, i) => (
        <span key={`${tag}-${i}`} className="tag-editor-chip">
          {tag}
          {!disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(i);
              }}
              aria-label={`Remove ${tag}`}
            >
              <X size={12} />
            </button>
          )}
        </span>
      ))}
      {!disabled && (
        <input
          ref={inputRef}
          type="text"
          className="tag-editor-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={tags.length === 0 ? placeholder : ""}
          disabled={disabled}
        />
      )}
    </div>
  );
}
