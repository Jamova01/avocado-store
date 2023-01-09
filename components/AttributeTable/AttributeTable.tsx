// React
import * as React from "react";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AttributeTable = (props: TProductAttributes) => {
  const { shape, hardiness, taste } = props;

  function createData(attribute: string, data: string) {
    return { attribute, data };
  }

  const rows = [
    createData("Shape", shape),
    createData("Hardiness", hardiness),
    createData("Taste", taste),
  ];

  return (
    <TableContainer
      style={{ width: "50%", margin: "32px auto" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Attributes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.attribute}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.data}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttributeTable;
