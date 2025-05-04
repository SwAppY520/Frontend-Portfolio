import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import smallParticalsImage from "@/assets/images/small-particals.png";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip" >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

          <div
          className="absolute inset-0 -z-30 opacity-45 animate-bounce [animation-duration:10s]"
          style={{
            backgroundImage: `url(${smallParticalsImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring opacity-25"></div>
        <div className="size-[820px] hero-ring opacity-25"></div>
        <div className="size-[1020px] hero-ring opacity-25"></div>
        <div className="size-[1220px] hero-ring opacity-25"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-neutral-50" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={95} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-neutral-50" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-neutral-50" />
        </HeroOrbit>
      </div>

      <div className="container relative z-30">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute rounded-full inset-0 animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for Opportunities
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-poppins text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Frontend Developer.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I am <span className="font-semibold">Swapnil Kalambe</span> and This is my Portfolio to show all skill & Projects.
            {/* I specialize in transforming design into funtional, high-performing
            web applications. Let's discuss your next project. */}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-semibold">My Resume</span>
            <ArrowDown className="size-4" />
          </button>
          </a>
          <a href="mailto:skalambe@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20there%2C%20I%20saw%20your%20portfolio%20and...">
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏻</span>
            <span className="font-semibold">Let's talk</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};
