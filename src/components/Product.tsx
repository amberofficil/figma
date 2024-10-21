import Image from "next/image"


function Product(){
    return(
        
        <div className="w-full sm:h-full md: h-[300px] flex justify-center items-center mb-20">
            <div className=" sm:w-full md:w-full lg:w-[80%] h-full">
                {/* top side */}
                <div className="sm:pl-5 md: pl-0">
                <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">This month</span>
                <div className="flex justify-between">
                <h2 className="text-4xl font-bold mt-5">Best Selling Product </h2>
                <button className=" sm:hidden md:block py-2 px-5 bg-red-500 rounded-md text-white">View All</button>
                </div>
                </div> 
            {/* products */}
            {/* container boxes */}
            <div className=" flex sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0">
                <div>
                <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                   <Image src={"/image5.png"} width={150} height={100} alt="coat"></Image>
                </div>
                {/* title*/}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">The north coat</span>
                    <span className="font-bold">$260</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center ">
                <Image src={"/image6.png"} width={150} height={100} alt="bag"></Image>
                </div>
                {/* title */}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">Gucci duffle bag</span>
                    <span className="font-bold">$960</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image src={"/image7.png"} width={150} height={100} alt="cooler"></Image>
                </div>
                  {/* title */}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">RGB liquid CPU Cooler</span>
                    <span className="font-bold">$160</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image src={"/image8.png"} width={150} height={100} alt="bookself"></Image>
                </div>
                {/* title */}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">Smart BookSelf</span>
                    <span className="font-bold">$360</span>
                </div>
                </div>
            </div>
            {/* button */}
            <button className=" sm:block md:hidden py-2 px-5 bg-red-500 sm: ml-[5%] rounded-md text-white">View All</button>
        </div> 
 </div> 
        
    )
}
export default Product