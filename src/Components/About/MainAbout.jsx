import { useMyContext } from "../Context/Context";

const MainAbout = () => {

    const {aboutData}=useMyContext();

    return (
        <div className="border-b-2 border-b-slate-900 flex flex-col items-center gap-10 mt-7">
            <div className="bg-orange-800 w-screen py-6 text-center">
                <h1 className="text-base  md:text-4xl font-extrabold text-slate-50">Hakkımızda</h1>
            </div>
            <div className="flex flex-col gap-[150px]  py-5 px-3  md:px-8">
                {aboutData.map((item, index) => (
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-[100px] gap-10`} key={index}>
                        <div>
                            <img className="h-44 mx-auto" src={item.imgUrl} alt="" />
                        </div>
                        <div>
                            <p className="md:text-lg text-sm font-medium">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainAbout;
