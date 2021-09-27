import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <div style={{ display: "grid", alignContent: "center", justifyContent: "center", marginLeft: "15%" }}>
            <div style={{ display: "flex" }}><button class="add"> <AddIcon style={{ marginRight: "8px" }} />Add Role</button>
                <ModeEditIcon style={{ marginTop: "50px", marginLeft: "30px" }} />
                <DeleteIcon style={{ marginTop: "50px", marginLeft: "30px" }} /></div>
            <TableContainer component={Paper} style={{ backgroundColor: "", display: "grid", alignContent: "center", justifyContent: "center" }}>
                <Table sx={{ width: "100%" }} aria-label="simple table">

                    <TableHead style={{ backgroundColor: "#F2F2F2", }}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left" style={{ width: "20rem" }}>

                                Deparment/Role Name</TableCell>
                            <TableCell align="center" >Access Level</TableCell>
                            <TableCell align="center">No of members</TableCell>
                            <TableCell align="center">Last Updated</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow


                        >
                            <TableCell> <Icon
                                sx={{ color: green[50] }}

                            >
                                circle
                            </Icon></TableCell>
                            <Link to="/managementTeam">
                                <TableCell component="th" scope="row" style={{ fontSize: "1.234rem", padding: "16px", width: "20rem" }}>
                                    Management Team
                                </TableCell></Link>

                            <TableCell align="center"><button class="allowed">All Access</button></TableCell>
                            <TableCell align="center" style={{ width: "14rem" }}>4</TableCell>
                            <TableCell align="center" style={{ width: "8rem" }}>1 min ago</TableCell>
                            <TableCell align="center" style={{ width: "8rem" }}><VisibilityIcon /></TableCell>

                        </TableRow>


                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: "2px" } }}
                        >

                            <TableCell> <Icon
                                sx={{ color: green[50] }}

                            >
                                circle
                            </Icon></TableCell>  <Link to="/managementTeam">    <TableCell component="th" scope="row" style={{ fontSize: "1.234rem", width: "20rem" }}>
                                Procurement Team
                            </TableCell></Link>

                            <TableCell align="center"><button class="res">Restricted Access</button></TableCell>
                            <TableCell align="center" style={{ width: "14rem" }}>4</TableCell>
                            <TableCell align="center">1 min ago</TableCell>
                            <TableCell align="center"><VisibilityIcon /></TableCell>

                        </TableRow>

                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: "2px" } }}
                        >

                            <TableCell> <Icon
                                sx={{ color: green[50] }}

                            >
                                circle
                            </Icon></TableCell>  <Link to="/managementTeam">    <TableCell component="th" scope="row" style={{ fontSize: "1.234rem", width: "20rem" }}>
                                Project Team
                            </TableCell></Link>

                            <TableCell align="center"><button class="res">Restricted Access</button></TableCell>
                            <TableCell align="center" style={{ width: "14rem" }}>4</TableCell>
                            <TableCell align="center">1 min ago</TableCell>
                            <TableCell align="center"><VisibilityIcon /></TableCell>

                        </TableRow>
                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: "2px" } }}
                        >

                            <TableCell> <Icon
                                sx={{ color: green[50] }}

                            >
                                circle
                            </Icon></TableCell>  <Link to="/managementTeam">    <TableCell component="th" scope="row" style={{ fontSize: "1.234rem", width: "20rem" }}>
                                IT Team
                            </TableCell></Link>

                            <TableCell align="center"><button class="res">Restricted Access</button></TableCell>
                            <TableCell align="center" style={{ width: "14rem" }}>4</TableCell>
                            <TableCell align="center">1 min ago</TableCell>
                            <TableCell align="center"><VisibilityIcon /></TableCell>

                        </TableRow>
                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: "2px" } }}
                        >

                            <TableCell> <Icon
                                sx={{ color: green[50] }}

                            >
                                circle
                            </Icon></TableCell>  <Link to="/managementTeam">    <TableCell component="th" scope="row" style={{ fontSize: "1.234rem", width: "20rem" }}>
                                Super admin
                            </TableCell></Link>

                            <TableCell align="center"><button class="allowed">All Access</button></TableCell>
                            <TableCell align="center" style={{ width: "14rem" }}>4</TableCell>
                            <TableCell align="center">1 min ago</TableCell>
                            <TableCell align="center"><VisibilityIcon /></TableCell>

                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer></div >
    );
}
