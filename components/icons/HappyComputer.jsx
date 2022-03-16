import Image from "next/image";

function HappyComputer(props) {
  return (
    <div className=" w-20 h-20 relative">
      <Image
        alt="Mac Logo"
        layout="fill"
        objectFit="contain"
        src={require("../../assets/icons/happy_computer.png")}
      ></Image>
    </div>
  );
}

export default HappyComputer;
