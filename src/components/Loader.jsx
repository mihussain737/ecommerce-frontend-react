import { RotatingLines, TailSpin } from "react-loader-spinner";

const Loader=({text})=>{
     return(
          <div className="flex justify-center items-center w-full h-[450] pt-40">
               <div className="flex flex-col items-center gap-1">
                    {/* <RotatingLines
                         visible={true}
                         height="96"
                         width="96"
                         color="grey"
                         strokeWidth="5"
                         animationDuration="0.75"
                         ariaLabel="rotating-lines-loading"
                         wrapperStyle={{}}
                         wrapperClass=""
                    /> */}
                    <TailSpin
                         visible={true}
                         height="80"
                         width="80"
                         color="#4fa94d"
                         ariaLabel="tail-spin-loading"
                         radius="1"
                         wrapperStyle={{}}
                         wrapperClass=""
                    />
                    <p className="text-slate-800">{text? text:"Please wait..."}</p>
               </div>
          </div>
          
     )
}

export default Loader;