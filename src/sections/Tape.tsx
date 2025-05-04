import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performance",
  "Secure",
  "Interractive",
  "Scalable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "User Friendly",
  "Maintainable",
  "Accessible",
  "Responsive",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip relative">

      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 absolute [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex">
      <div className="flex flex-none gap-4 pr-4 py-6 animate-move-left [animation-duration:20s]">
        {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
               {words.map((word) => (
          <div key={word} className="inline-flex gap-4 items-center">
            <span className="text-neutral-50 uppercase font-extrabold text-sm">{word}</span>
            <StarIcon className="size-6 text-neutral-50 -rotate-12"/>
          </div>
        ))}
            </Fragment>
        ))}
      </div>
      </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-400 to-sky-300 rotate-2 -mx-1  relative -z-10 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

      <div className="flex flex-none gap-4 pr-4 py-6 animate-move-right [animation-duration:20s]">
        {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
               {words.map((word) => (
          <div key={word} className="inline-flex gap-4 items-center">
            <span className="text-neutral-50 uppercase font-extrabold text-sm">{word}</span>
            <StarIcon className="size-6 text-neutral-50 -rotate-12"/>
          </div>
        ))}
            </Fragment>
        ))}
      </div>

      </div>
      
    </div>
  );
};
