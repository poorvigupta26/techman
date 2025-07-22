import vector from "../assets/vector.png"
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className="w-full h-[100vh] bg-[#180139] bg-with-before" id="">
        <main className="absolute flex flex-col items-end w-full h-full p-2 justify-center">
            <h1 className=" text-8xl text-white poppins-bold"> Techman</h1>
            <p className="font-black text-white  poppins-semibold">One stop solution for all your tech problems</p>
        </main>
    </div>
    <div className="w-full h-[100vh] bg-[#180139]  pl-0 pr-0 flex items-center justify-center" >
        <img src={vector} alt="graphics" className="w-[30%] imgUp"/>
        <div className="w-[50%] h-[100vh] flex flex-col justify-center items-center p-5 bg-[#180139]">
            <p className="text-white tracking-[2px] word font-extralight text-xl poppins-regular">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Eius fuga repellat sequi iusto doloremque cupiditate, fugit cum repellendus,
                molestiae velit voluptate distinctio at laudantium voluptatibus nostrum illum
                voluptas aliquam eos.
            </p>
        </div>
    </div>
    <div className="w-full h-[120vh] bg-[#180139] flex" id="about">
        <div className="w-[70%] h-[80vh] bg-[#fa0890] flex flex-col items-center justify-center p-2 radius">
            <h1 className="poppins-bold p-0.5 text-white text-2xl">Who are we?</h1>
        <p className="p-5 tracking-[1px] word leading-[170%] text-white poppins-regular-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, tenetur sint molestias maxime qui quod sapiente ea repellat. Asperiores illo odio eos vitae tempora hic possimus dolorem delectus dolor mollitia.
        </p>
        </div>
    </div>
    <div className="w-full h-[100vh] bg-[#180139] flex justify-end" id="brands">
        <div className="bg-[#fa0890] rounded-tl-[200px] rounded-b-[] rounded-r-[0] rounded-bl-[200px] w-[70%] h-[70vh] p-2 flex flex-col items-center justify-center">
            <h1 className="text-white uppercase poppins-bold w-[140px] text-2xl border-b-white border-b-2 p-0.5">Brands</h1>
            <article className="flex mt-2 mb-2 ml-0 mr-0 flex-wrap justify-center">
                <div className=" m-1 h-[10rem] w-[10rem] bg-white rounded-full flex flex-col items-center justify-center cursor-pointer text-[#180139] transition-all delay-[0.15s] brand-trans">
                    <AiFillGoogleCircle className="text-6xl" />
                    <p className="text-[1rem] poppins-semibold">Google</p>
                </div>
                 <div className=" m-1 h-[10rem] w-[10rem] bg-white rounded-full flex flex-col items-center justify-center cursor-pointer text-[#180139] transition-all delay-[0.15s] brand-trans">
                    <AiFillAmazonCircle className="text-6xl"/>
                    <p className="text-[1rem] poppins-semibold">Amazon</p>
                </div>
                 <div className=" m-1 h-[10rem] w-[10rem] bg-white rounded-full flex flex-col items-center justify-center cursor-pointer text-[#180139] transition-all delay-[0.15s] brand-trans">
                    <AiFillYoutube className="text-6xl"/>
                     <p className="text-[1rem] poppins-semibold">Youtube</p>
                </div>
                 <div className="m-1 h-[10rem] w-[10rem] bg-white rounded-full flex flex-col items-center justify-center cursor-pointer text-[#180139] transition-all delay-[0.15s] brand-trans">
                    <AiFillInstagram className="text-6xl"/>
                     <p className="text-[1rem] poppins-semibold">Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home