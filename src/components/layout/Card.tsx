type datasProps = {
    logo: string,
    title: string,
}

export default function Card( {logo, title}:datasProps ) {
    return (
        <div className="p-5 h-autoo rounded-xl border-[2px] shadow-2xl">

            <img 
                src={logo} 
                alt={title} 
                className="p-5 m-auto"
                />

            <h1 className="text-2xl font-medium text-center">{title}</h1>

        </div>
    )
}