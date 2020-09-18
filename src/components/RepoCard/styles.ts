import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
export const Container = styled.div``;

export const TopSide = styled.div``;

const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCss}
`;
export const BotSide = styled.div``;
export const StarIcon = styled(RiStarLine)`
  ${iconCss}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
`;
