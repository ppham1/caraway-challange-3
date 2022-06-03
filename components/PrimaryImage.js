import Image from "next/image";
import React, { useState } from "react";
// changing the src of the image on hover
const PrimaryImage = ({ primaryImgSrc, secondaryImgSrc }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="relative h-72"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image
          src={secondaryImgSrc}
          layout="fill"
          objectFit="cover"
          alt="logo"
        />
      ) : (
        <Image src={primaryImgSrc} layout="fill" objectFit="cover" alt="logo" />
      )}
    </div>
  );
};
export default PrimaryImage;
