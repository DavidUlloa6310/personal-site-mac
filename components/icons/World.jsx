import Image from "next/image";

function World(props) {
  return (
    <div
      className={`w-20 h-20 min-h-[4rem] min-w-[4rem] relative ${props.className}`}
      id={props.id}
    >
      <Image
        alt="World"
        layout="fill"
        objectFit="contain"
        src={require("../../assets/icons/world.png")}
      ></Image>
    </div>
  );
}

export default World;
