import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ playlists }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell align="right">DESCRIPTION</TableCell>
            <TableCell align="right">CREATED AT&nbsp;</TableCell>
            {/* S */}
          </TableRow>
        </TableHead>
        <TableBody>
          {playlists.map((playlist) => (
            <TableRow
              key={playlist.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {playlist.title}
              </TableCell>
              <TableCell align="right">
                {playlist.description ? playlist.description : "No description"}
              </TableCell>
              <TableCell align="right">{playlist.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
