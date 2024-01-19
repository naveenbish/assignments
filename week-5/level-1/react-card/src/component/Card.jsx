export default function Card(props){
    return (
        <div className="border border-black w-[500px] p-5 m-10 rounded-lg">
            <div className="text-3xl font-bold my-3">{props.name}</div>
            <div className="text-xl text-gray-700 my-3">{props.desc}</div>
            <div>
                <div className="font-bold text-2xl my-2">Interests</div>
                {
                    props.Interests.map((value)=>{
                        return <div>{value}</div>
                    })
                }
            </div>
            <div className="flex gap-5">
                <button className="bg-blue-600 p-3 rounded-md">LinkedIn</button>
                <button className="bg-blue-600 p-3 rounded-md">Twitter</button>
            </div>
        </div>
    )
}