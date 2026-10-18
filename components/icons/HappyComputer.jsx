import Image from "next/image";
import happyComputer from "../../assets/icons/happy_computer.png";

function HappyComputer(props) {
  return (
    <div className={`w-20 h-20 relative ${props.className}`} id={props.id}>
      <Image
        alt="Mac Logo"
        fill
        style={{ objectFit: "contain" }}
        src={happyComputer}
      ></Image>
    </div>
  );
}

export default HappyComputer;
