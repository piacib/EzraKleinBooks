import styled, { css } from "styled-components";
export const TableHead = styled.tr`
  background-color: grey;
`;
const active = css`
  max-height: 100px;
  padding: 10px 10px;
  transition: height 0.6s, padding 0.6s;
`;
const notActive = css`
  max-height: 0;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
`;
export const HiddenRow = styled.tr<Props>`
  /* display: none; */
  /* background-color: green; */
  max-height: 0;
  overflow-y: hidden;
  transition: height 0.6s;
  td {
    border-bottom: ${(props) => (props.showInfo ? "2px solid black" : "none")};
  }
  * {
    ${(props) => (props.showInfo ? active : notActive)}
  }
`;
export const TableRow = styled.tr<Props>`
  pointer-events: cursor;
  background-color: ${(props) => (!props.showInfo ? "none" : "yellow")};
`;
interface Props {
  showInfo: boolean;
}

interface RotateProps {
  rotateToggle: boolean;
}
export const DisplayRow = styled.div<RotateProps>`
  transition: rotate 0.25s;
  rotate: ${(props) => (props.rotateToggle ? "90deg" : "0deg")};
`;
export const BookCover = styled.img`
  /* width: 2rem; */
  height: 5rem;
  aspect-ratio: 0.6;
  border: 1px solid black;
`;
export const TableElement = styled.table`
  border-collapse: collapse;
`;
