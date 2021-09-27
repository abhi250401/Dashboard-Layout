import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Icon from "@mui/material/Icon"
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        Bidding: [
            {
                date: "2020-01-05",
                customerId: "11091700",
                amount: 3
            },
            {
                date: "2020-01-02",
                customerId: "Anonymous",
                amount: 1
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>

            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell style={{ backgroundColor: "white" }}>


                    <Icon
                        color="light"

                        onClick={() => setOpen(!open)}
                    >
                        {open ? <Icon sx={{ color: "#673AB7" }}>circle</Icon> : <Icon sx={{ color: "#673AB7" }}>add_circle </Icon>}

                    </Icon>
                </TableCell>
                <TableCell component="th" scope="row" style={{ backgroundColor: "white", fontSize: "1.2rem" }}>
                    {row.name}
                </TableCell>
                <TableCell align="center" style={{ backgroundColor: "white", width: "7rem" }}><button class="allowed">All access </button></TableCell>
                <TableCell align="center" style={{ backgroundColor: "white", width: "5rem" }}>{row.fat}</TableCell>
                <TableCell align="center" style={{ backgroundColor: "white", width: "12rem" }}>{row.carbs}</TableCell>
                <TableCell
                    align="center"
                    style={{ backgroundColor: "white", width: "5rem" }}>
                    <label class="theme-switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div class="slider round"></div>
                    </label></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: "white" }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, marginLeft: 7 }}>

                            <Table size="small" aria-label="purchases" style={{ backgroundColor: "white", }}>

                                <TableHead style={{ backgroundColor: "white", }}>
                                    All aspects in the bidding module <TableRow>
                                        <TableCell>Access Control</TableCell>
                                        <TableCell>Permissions</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            <div style={{ display: "flex", justifyContent: "start", alignContent: "center" }}> <input type="checkbox" class="checkbox-round" />
                                                <div style={{ fontSize: "14px" }}>All access
                                                    <p style={{ fontSize: "12px", color: "grey" }}>Can access all time</p></div></div>
                                        </TableCell>
                                        <TableCell> <Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{
                                                color: " #673AB7",
                                                '&.Mui-checked': {
                                                    color: "#673AB7",
                                                },

                                            }}
                                        />
                                            View Items in Access
                                        </TableCell>

                                    </TableRow>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            <div style={{ display: "flex", justifyContent: "start", alignContent: "center" }}> <input type="checkbox" class="checkbox-round" />
                                                <div style={{ fontSize: "14px" }}>All access
                                                    <p style={{ fontSize: "12px", color: "grey" }}>Can access all time</p></div></div>
                                        </TableCell>
                                        <TableCell> <Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{
                                                color: " #673AB7",
                                                '&.Mui-checked': {
                                                    color: "#673AB7",
                                                },

                                            }}
                                        />
                                            View Items in Access
                                        </TableCell>

                                    </TableRow>



                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [
    createData("Budget", 6.0, 24, "View | Create | Edit | Delete", "1 min ago"),

];

export default function CollapsibleTable() {
    return (
        <div>
            <div style={{
                display: "grid",
                justifyContent: "center",
                width: "100%",
                marginTop: "30px",
                alignContent: "center",

            }}>  <div style={{ marginBottom: "40px", marginLeft: "16%", marginTop: "5px", display: "flex" }}> <Link to="/" ><KeyboardBackspaceIcon style={{ marginLeft: "-50px", position: "absolute" }} underline="none" borderBottom="none" />
            </Link><span style={{
                marginTop: "3px", marginLeft: "2%", color: "#673AB7", fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "20px"
            }}> Management Team </span><ModeEditIcon style={{ marginLeft: "20px", marginLeft: "8%" }} />

                </div>

                <div class="hover" style={{ display: "flex", left: "28%", marginLeft: "10%", top: "126px", marginBottom: "20px", borderBottom: "1px solid #CFD3DA" }}>
                    <p class="p1" style={{ paddingBottom: "8px" }} tabIndex="1">Access Control</p>
                    <div class="line" style={{
                        border: "0.5px solid #Cfd3da",
                        marginLeft: "30px",
                        width: "0px"
                    }}></div>
                    <p>Assigned Members</p>
                </div>

                <TableContainer
                    component={Paper}
                    style={{
                        display: "grid",
                        justifyContent: "center",
                        width: "100%",
                        backgroundColor: "#F2F2F2",
                        marginLeft: "10%",
                        alignContent: "center",

                    }}
                >
                    <Table aria-label="collapsible table">

                        <TableHead style={{ backgroundColor: "#F2F2F2", }}>
                            <TableRow>
                                <TableCell />
                                <TableCell style={{ width: "20rem" }}>Deparment/Role Name</TableCell>
                                <TableCell align="center">Access Level</TableCell>
                                <TableCell align="center">Summary</TableCell>
                                <TableCell align="center">Last Updated</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></div></div >
    );
}
