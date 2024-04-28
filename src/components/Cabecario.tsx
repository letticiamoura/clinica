import Menu from "./layout/Menu";

export default function Cabecario() {
    return(
        <div>
            <h1 className="p-5 text-4xl text-center lg:absolute left-[25%] top-10 text-white bg-slate-800 lg:bg-transparent lg:text-slate-950 font-logo font-extrabold">
                <span className="p-3 bg-slate-200 text-slate-950 text-5xl rounded-tl-full rounded-br-full lg:bg-slate-700 lg:text-white">.CSP</span>
            </h1>
            <Menu />
        </div>
    )
}