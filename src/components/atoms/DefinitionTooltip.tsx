import type { ReactNode } from "react";

type DefinitionTooltipProps = {
  term: ReactNode;
  definition: ReactNode;
};

function DefinitionTooltip({ term, definition }: DefinitionTooltipProps) {
  return (
    <span className="relative inline-flex items-center group">
      <span className="text-blue-500 underline underline-offset-4 cursor-pointer">
        {term}
      </span>
      <span
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 sm:w-56 lg:w-64 -translate-x-1/2 rounded-lg border border-blue-200 bg-white/95 px-3 py-2 text-xs sm:text-sm text-gray-700 shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:border-blue-400/40 dark:bg-neutral-900 dark:text-neutral-200"
        role="tooltip"
      >
        {definition}
        <span
          className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-blue-200 bg-white/95 dark:border-blue-400/40 dark:bg-neutral-900"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

export default DefinitionTooltip;
