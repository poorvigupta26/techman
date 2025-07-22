

function Contact() {
  return (
    <div className="h-[100vh] w-full bg-[#180139] flex justify-center items-center text-white">
        <main className="bg-[#fa0890] h-[30rem] w-[70%] p-12 rounded-tr-full rounded-bl-full">
            <h1 className="poppins-semibold text-3xl"> Contact Us</h1>
            <form action="" className="m-5 flex flex-col items-center justify-center">
                <div className="h-12 flex items-start justify-start w-[60%] m-2">
                    <label className="poppins-medium w-[20%] my-0 mx-4" htmlFor="">Name</label>
                    <input className="self-stretch w-[80%] p-4 rounded-[5px] border border-gray-700 outline-0 " type="text" name=""  required placeholder="eg; John Doe" id="" />
                </div>
                <div className="h-12 flex items-start justify-start w-[60%] m-2">
                    <label className="poppins-medium w-[20%] my-0 mx-4" htmlFor="">email</label>
                    <input className="self-stretch w-[80%] p-4 rounded-[5px] border border-gray-700 outline-0" type="email" name=""  required placeholder="eg: johndoe@gmail.com" id="" />
                </div>
                <div className="h-12 flex items-start justify-start w-[60%] m-2">
                    <label className="poppins-medium w-[20%] my-0 mx-4" htmlFor="">message</label>
                    <input className="self-stretch w-[80%] p-4 rounded-[5px] border border-gray-700 outline-0" type="text" name=""  required placeholder="Your Message/Query" id="" />
                </div>
                <button className="my-12 mx-0 p-3 border-0 rounded-[5px] bg-amber-50 w-[200px] poppins-semibold text-black hover:invert cursor-pointer" type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact