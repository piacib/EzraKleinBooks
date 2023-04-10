import styled, { css } from "styled-components";
export const TableHead = styled.tr`
  background-color: grey;
`;
const active = css`
  max-height: 100px;
  padding: 10px 10px;
  transition: max-height 0.6s, padding 0.6s;
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
  background-color: green;
  max-height: 0;
  overflow-y: hidden;
  transition: height 0.6s;

  * {
    ${(props) => (props.showInfo ? active : notActive)}
  }
`;
export const TableRow = styled.tr`
  pointer-events: cursor;
`;
interface Props {
  showInfo: boolean;
}
export const DisplayRow = styled.div`
  transition: rotate 0.25s;
`;
