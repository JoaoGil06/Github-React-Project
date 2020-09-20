import React from "react";

import { RepoIcon } from "./styles";

const TabContent: React.FC = () => {
  return (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">24</span>
    </div>
  );
};

export default TabContent;
