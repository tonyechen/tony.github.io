import IconSVG from "./IconSVG";

const IconLink = (props) => {
  return (
      <a target="_blank" href={props.href}>
          <IconSVG class={props.class} img={props.img} alt={props.alt} />
      </a>
  );
};

export default IconLink;
