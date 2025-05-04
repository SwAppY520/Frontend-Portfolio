import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
    title,
    description,
    aboutMe,
    className,
}: {
    title: string;
    description: string;
    className?: string;
    aboutMe?: string;
} ) => {
    return (
        <div className={twMerge("flex flex-col p-6", className)}>
              <div className="inline-flex items-center gap-2">
              <StarIcon className="size-9 text-emerald-300"/>
              <h3 className="font-poppins text-3xl">{title}</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">{description}</p>
              <p className="text-sm text-white/60 mt-2">{aboutMe}</p>
            </div>
    )
}