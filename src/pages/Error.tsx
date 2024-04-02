import { Link } from "react-router-dom";
import err from "../assets/error.gif";

export default function Error() {
    return(
        <div className="bg-slate-950 h-screen">
            <h1 className="p-10 text-center text-3xl font-bold text-slate-500">We can't seem to find the page you're looking for</h1>
            <Link to="/clinica">
                <img src={err} alt="error" className="m-auto"/>
            </Link>
        </div>
    )
}