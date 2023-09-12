import { useMyContext } from "../Context/Context"

const Hero4=()=>{

    const {servicesData}=useMyContext();

  
         const MyHtml=servicesData.map((item)=>{
            return(
                <div className="bg-slate-50 shadow-2xl  py-3" key={item.id}>
                
               <img className=" h-44 mx-auto" src={item.imgUrl} alt="" />
               <h2 className="my-4  text-center text-lg font-bold text-red-600">{item.title}</h2>
               <div className="w-[300px]">
               <p className="mx-4 sm:mx-6 text-xs font-bold text-yellow-950">{item.description}</p>
               </div>
                </div>
            )
         })

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-extrabold mt-4 text-slate-900">Hizmetlerimiz</h1>
            <div className="flex flex-wrap  flex-col sm:flex-row  py-8 gap-3 items-center">
            {MyHtml}
            </div>
        
        </div>
    )
}

export default Hero4;