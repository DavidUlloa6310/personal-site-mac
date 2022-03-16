import Image from "next/image";

function StartupContainer(props) {
  return (
    <div className="w-10/12 h-72 max-w-[1000px] bg-white flex flex-col justify-center items-center border-dotted border-black border-2 rounded-sm absolute top-1/5">
      <div className="h-[95%] w-[98.5%] bg-white border-black border-4 outline-white outline-8 flex flex-col justify-center items-center sm:flex-row sm:items-start sm:pt-14 relative">
        <div className=" w-20 h-20 relative sm:absolute sm:top-9 sm:left-7">
          <Image
            alt="Mac Logo"
            layout="fill"
            objectFit="contain"
            src={require("../assets/icons/mini_computer.png")}
          ></Image>
        </div>
        <h1 className="font-chicago">Welcome to Macintosh.</h1>
      </div>
    </div>
  );
}

export default StartupContainer;
