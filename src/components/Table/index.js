import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DenseTable({ playlists }) {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">DESCRIPTION</TableCell>
            <TableCell align="right">CREATED AT&nbsp;</TableCell>
            {/* S */}
          </TableRow>
        </TableHead>
        <TableBody>
          {playlists.map((playlist) => (
            <TableRow
              onClick={() => navigate(`/playlist/${playlist.id}`)}
              key={playlist.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {playlist.title}
              </TableCell>
              <TableCell>
                {playlist.icon ? (
                  <Avatar src={playlist.icon} variant="round" />
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">
                {playlist.description ? playlist.description : ""}
              </TableCell>
              <TableCell align="right">{playlist.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
