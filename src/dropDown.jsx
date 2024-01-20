import { Link } from "react-router-dom";

const DropDown = () => {
    return (
        <div className="Gucci2">
            <ul className="gucci">
                <li><Link to="./Admin">TeamScore</Link></li>
                <li><Link to="./Login">Défis</Link></li>
                <li><Link to="./upload">Race</Link></li>
            </ul>
        </div>
    )
}

export default DropDown;
