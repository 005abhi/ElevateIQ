"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface TreeNodeProps {
  label: string;
  children?: React.ReactNode;
  depth: number;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  label,
  children,
  depth,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="relative" style={{ paddingLeft: `${depth * 20}px` }}>
      <div
        className={`flex items-center py-1 cursor-pointer ${
          hasChildren ? "font-semibold" : ""
        }`}
        onClick={toggleExpand}
      >
        {hasChildren && (
          <ChevronRight
            className={`w-4 h-4 mr-1 transition-transform text-white ${
              isExpanded ? "transform rotate-90" : ""
            }`}
          />
        )}
        {!hasChildren && <div className="w-4 h-4 mr-1" />}
        <span className="text-white">{label}</span>
      </div>
      {isExpanded && hasChildren && (
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-2 w-px bg-gray-300"
            style={{ left: `${depth * 20 + 10}px` }}
          />
          {children}
        </div>
      )}
    </div>
  );
};
