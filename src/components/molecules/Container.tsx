
import React from "react";

const FlexWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto px-4">
      {children}
    </div>
  );
};

export default FlexWrapper;
