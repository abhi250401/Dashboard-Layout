import './Navbar.css'
import Logo from '../assests/Subtract.png';
import Logo1 from '../assests/business_center_24px.png';
import Logo3 from '../assests/security_24px.png';
import Logo2 from '../assests/dashboard_24px.png';
export default function Navbar() {
    return (
        <div class="navbar" style={{ width: "15%", height: "100vh", backgroundColor: "#FCFBFF" }}>
            <div class="top" style={{ marginTop: "9px" }}>
                <img src={Logo} style={{ width: "30px", height: "30px", float: "left", marginLeft: "20px", marginRight: "15px", marginTop: "5px" }} />
                <h2 style={{ paddingLeft: "5px", paddingTop: "3px" }}>MYSITE</h2>
            </div>
            <div class="top" style={{ marginTop: "29px" }}>
                <img src={Logo1} style={{ width: "18px", height: "18px", float: "left", marginLeft: "25px", marginRight: "23px", marginTop: "17px" }} />
                <p style={{ paddingLeft: "5px", paddingTop: "18px" }}>Organisation Profiles</p>
            </div>
            <div class="top" style={{ marginTop: "29px" }}>
                <img src={Logo2} style={{ width: "18px", height: "18px", float: "left", marginLeft: "25px", marginRight: "23px", marginTop: "17px" }} />
                <p style={{ paddingLeft: "5px", paddingTop: "18px" }}>Projects</p>
            </div>
            <div class="to1p" style={{ marginTop: "29px", height: "30px" }}>
                <img src={Logo3} style={{ width: "18px", height: "18px", float: "left", marginLeft: "25px", marginRight: "23px", marginTop: "17px" }} />
                <p style={{ paddingLeft: "5px", paddingTop: "18px" }}>Access Control</p>
            </div>
        </div>
    );
}