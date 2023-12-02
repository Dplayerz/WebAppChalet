import { Link } from "react-router-dom";

const DropDown = () => {
    return (
        <div className="Gucci2">
            <ul className="gucci">
                <li><Link to="./Admin">TeamScore</Link></li>
                <li><Link to="./Login">Défis</Link></li>
                <li><Link to="./upload">Upload</Link></li>
                <li>Update...</li>
                <li>Update...</li>
                <li>Update...</li>
            </ul>
        </div>
    )
}

export default DropDown;
