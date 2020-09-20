import React from "react";

import { RepoIcon } from "./styles";

interface Props {
  repos: number;
}

const TabContent: React.FC<Props> = ({ repos }) => {
  return (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{repos}</span>
    </div>
  );
};

export default TabContent;
