import React, { useState } from "react";
import { book, DataType, testData } from "../../testData";
import { DisplayRow, HiddenRow, TableHead, TableRow } from "./table.style";
const data = testData;
const Table = () => {
  const books = Object.keys(data.books);
  return (
    <table>
      <caption>Ezra Klein Show Book Reccomendations</caption>
      <thead>
        <TableHead>
          <th scope="col"></th>
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
    </table>
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
      >
        <td>
          <DisplayRow>+</DisplayRow>
        </td>
        <th scope="row">{title}</th>
        <td>{data.author}</td>
        <td>{data.rating ? data.rating : null}</td>
      </TableRow>
      <HiddenRow showInfo={showInfo}>
        <td colSpan={2}>
          <div>{data.episodeTitle}</div>
        </td>
        <td colSpan={2}>
          {data.episodeTitle.map((title) => (
            <div>{JSON.stringify(episodes[title]?.date)}</div>
          ))}
        </td>
      </HiddenRow>
    </>
  );
};
