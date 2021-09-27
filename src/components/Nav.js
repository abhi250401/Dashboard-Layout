import NotificationsIcon from '@mui/icons-material/Notifications';
import './nav.css';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SyncIcon from '@mui/icons-material/Sync';
import Per from '../assests/per.png';
import Approval from '../assests/view_module_24px.png'
export default function Nav() {
    return (
        <div class="nav" style={{ height: "150px", marginLeft: "14%" }}>
            <div class="icon" style={{ display: "flex", justifyContent: "end", paddingTop: "30px", paddingRight: "70px" }}> <AccountCircleIcon style={{ marginRight: "7px" }} />Kishore<NotificationsIcon style={{ marginLeft: "10px" }} />
                <HelpIcon style={{ marginLeft: "15px" }} />

            </div>
            <div class="icon"

                style={{
                    display: "flex",
                    justifyContent: "end",
                    alignContent: "center",
                    paddingTop: "50px",
                    textAlign: "center",
                    alignItems: "center",
                    paddingRight: "70px"
                }}>                 <SyncIcon style={{ marginRight: "10px", paddingBottom: "1px" }} />
                Last synced 1 minutes ago
            </div >
            <div class="hover" style={{ display: "flex", left: "18%", top: "126px", position: "absolute" }}>
                <img tabIndex="1" src={Per} /> <p class="p1" tabIndex="1">Permissions</p>
                <div class="line" style={{

                }}></div>
                <img style={{ marginLeft: "40px", }} src={Approval} /><p style={{ fontWeight: "400", }}>Approval matrix</p>
            </div>

        </div >

    );
}