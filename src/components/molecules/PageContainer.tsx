
import React from "react";

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-3xl px-6 py-10">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
