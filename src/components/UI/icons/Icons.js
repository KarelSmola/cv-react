import { BiMap, BiStar, BiAt, BiPhone } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const MapPin = (props) => {
  return <BiMap className={props.className} />;
};

export const BirthStar = (props) => {
  return <BiStar className={props.className} />;
};

export const Email = (props) => {
  return <BiAt className={props.className} />;
};

export const Phone = (props) => {
  return <BiPhone className={props.className} />;
};

export const GitHub = (props) => {
  return <BsGithub className={props.className} />;
};

export const LinkedIn = (props) => {
  return <BsLinkedin className={props.className} />;
};
