import React, { PropsWithChildren } from "react";
import "./CityCardContainer.scss";

interface CityCardContainerProps {
  image: string;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
}
export const CityCardContainer: React.FC<
  PropsWithChildren<CityCardContainerProps>
> = ({ image, isHovered, setIsHovered, children }) => {
  const defaultGradient = `linear-gradient(180deg, #010202 0%, rgba(217, 217, 217, 0) 100%), url(${image})`;
  const hoverGradient = `
      linear-gradient(179.89deg, #006A6A 0.1%, rgba(0, 87, 87, 0.5) 39.48%),
      url(${image})
    `;

  const containerStyle = {
    backgroundImage: isHovered ? hoverGradient : defaultGradient,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "box-shadow 0.3s",
    boxShadow: isHovered ? "0px 4px 4px 0px #00000040 inset" : "none",
  };

  return (
    <div
      className="CityCardContainer"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};
