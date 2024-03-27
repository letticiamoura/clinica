interface datasProps {
    logo: string,
    title: string,
}

export default function Card( {logo, title}:datasProps ) {
    return (
        <div className="p-5 h-auto rounded-xl border-[2px] w-80 lg:w-[20vw] shadow-2xl lg:h-64">

            <img 
                src={logo} 
                alt={title} 
                className="p-5 m-auto"
                />

            <h1 className="text-2xl font-medium text-center">{title}</h1>

        </div>
    )
}