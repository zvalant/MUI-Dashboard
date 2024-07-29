import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header"


const Dashboard = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent= "space-between" alignItems="centers"></Box>
            <Header title = "Dashboard" subtitle= "Welcome to your Dashboard"/>
        </Box>
    )
  
}
export default Dashboard;