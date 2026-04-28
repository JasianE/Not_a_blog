
import React from "react";

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
