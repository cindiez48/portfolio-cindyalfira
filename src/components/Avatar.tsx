import Image from "next/image";
import { site } from "@/data/site";

type AvatarProps = {
  size: number;
  className?: string;
};

export default function Avatar({ size, className = "" }: AvatarProps) {
  return (
    <Image
      src={site.avatar}
      alt={`Foto ${site.name}`}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`shrink-0 rounded-full object-cover object-[50%_20%] ${className}`}
    />
  );
}
