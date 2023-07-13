import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const BlurImage = ({ className, alt, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Image
      className={clsx(
        className,
        "duration-500 ease-in-out group-hover:opacity-75",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
      )}
      onLoadingComplete={() => setLoading(false)}
      alt={alt}
      {...props}
    />
  );
};
{
  /* <BlurImage
    className="group-hover:scale-105 !duration-200 ease-out"
    loader={({ src }) => src}
    src={image}
    alt={title}
    layout="fill"
    objectFit="cover"
    /> */
}
