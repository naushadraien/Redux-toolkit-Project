import styled, { css } from "styled-components";

// Pseudo classes for scrollbar
// :horizontal
// :vertical
// :decrement
// :increment
// :start
// :end
// :double-button
// :single-button
// :no-button
// :corner-present
// :window-inactive

export const scrollCss = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-button {
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.defaultButton};
  }

  &::-webkit-scrollbar-track-piece {
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.scrollThumb};
  }

  &::-webkit-scrollbar-corner {
  }

  &::-webkit-resizer {
  }
`;

export const singleLineTextEllipse = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const multipleLineTextEllipse = (lineNumber?: number) => css`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis; /* Include for consistency */

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineNumber || 3};
`;

export const flexCenter = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${gap || 10}px;
`;

export const flexSpaceBetween = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${gap || 10}px;
`;

export const flexEnd = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${gap || 10}px;
`;

export const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const hideAppearance = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const VerticalSpaceStyled = styled.div<{ $space?: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ $space }) => ($space ? $space + "px" : "12px")};
`;

export const InfoRowStyled = styled.div<{
  $direction?: "row" | "column";
}>`
  display: flex;
  align-items: ${({ $direction }) =>
    $direction === "column" ? "flex-start" : "flex-start"};
  justify-content: flex-start;
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $direction }) => ($direction === "column" ? "8px" : "12px")};

  & .title {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.darkText};
  }

  & .value {
    ${flexStart};
    gap: 8px;
    color: ${({ theme }) => theme.colors.tableBody};
    white-space: break-spaces;
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    // flex-direction: column;
    gap: 4px;

    .title {
      font-weight: 600;
    }
  }
`;
