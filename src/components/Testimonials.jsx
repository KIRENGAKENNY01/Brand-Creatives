import Emily  from "../../public/users/image-emily.jpg"
import Jennie from "../../public/users/image-jennie.jpg"
import Thomas from "../../public/users/image-thomas.jpg"


function Testimonial(){
    const supporters = [
        {image:Emily , body:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", name:"Emily R.", role:"Marketing Director" },
        {image:Thomas , body:"Sunnyside enthusiasm coupled with their keen interest in our brand success made it satisfying and  ", name:"Emily R.", role:"Marketing Director" },
        {image:Jennie, body:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside Highly recommended!", name:"Jennie.F",role:"Business Owner"}

        
    ]
return (
    <div>
        {/* Mobile Testimonial */}
        <div className=" lg:my-40 p-5">
            <h1 className="text-gray-400 font-bold my-10 text-center lg:my-15">CLIENT TESTIMONIALS</h1>
        <div className="flex flex-col gap-20 md:flex md:flex-row">
            {supporters.map((supporter)=>(
                <div key={supporter.name} className="flex flex-col gap-5 justify-center items-center text-center ">
                    <img src={supporter.image} className="w-[20%] rounded-full " alt=""/>
                    <p className="text-center text-gray-600 font-semibold text-[15px] text-wrap">{supporter.body}</p>
                     <div className="text-center">
                        <h1 className="font-bold text-gray-800">{supporter.name}</h1>
                        <p className="text-[14px] text-gray-400 ">{supporter.role}</p>
                     </div>
                </div>
            ))}
        </div>

        </div>
        
         
    </div>

    )
}

export default Testimonial;