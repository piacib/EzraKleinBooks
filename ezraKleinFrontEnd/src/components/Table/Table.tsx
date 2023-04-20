import React, { useState } from "react";
import { book, DataType, testData } from "../../testData";
import {
  BookCover,
  DisplayRow,
  HiddenRow,
  TableHead,
  TableRow,
  TableElement,
} from "./table.style";
const data = testData;
const Table = () => {
  const books = Object.keys(data.books);
  return (
    <TableElement>
      <caption>Ezra Klein Show Book Reccomendations</caption>
      <thead>
        <TableHead>
          <th scope="col"></th>
          <th scope="col">Book Cover</th>
          <th scope="col">Book Title</th>
          <th scope="col">Author</th>
          <th scope="col">Rating</th>
        </TableHead>
      </thead>
      <tbody>
        {books.map((title) => (
          <TableRows title={title} data={data.books[title]} />
        ))}
      </tbody>
    </TableElement>
  );
};

export default Table;
interface RowProps {
  title: string;
  data: book;
}
const episodes = data.episodeDateObj;
const TableRows = ({ data, title }: RowProps) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <TableRow
        onClick={() => {
          setShowInfo(!showInfo);
        }}
        showInfo={showInfo}
      >
        <td>
          <DisplayRow rotateToggle={showInfo}>+</DisplayRow>
        </td>
        <th>
          <BookCover src="" />
        </th>
        <th scope="row">{title}</th>
        <td>{data.author}</td>
        <td>{data.rating ? data.rating : null}</td>
      </TableRow>
      <HiddenRowElement showInfo={showInfo} data={data.episodeTitle} />
    </>
  );
};
interface HiddenRowElementProps {
  showInfo: boolean;
  data: string[];
}
export const HiddenRowElement = ({ showInfo, data }: HiddenRowElementProps) => {
  return (
    <HiddenRow showInfo={showInfo}>
      <td colSpan={4}>
        {data.map((title) => (
          <div>{title}</div>
        ))}
        {/* </td>
      <td colSpan={2}> */}
        {data.map((title) => (
          <div>{JSON.stringify(episodes[title]?.date)}</div>
        ))}
      </td>
    </HiddenRow>
  );
};
