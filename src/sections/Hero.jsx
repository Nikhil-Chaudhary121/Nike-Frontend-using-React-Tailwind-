import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
// import SongCard from "../components/ShoeCard";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="hero"
      className=" w-full min-h-screen flex justify-center max-container flex-col xl:flex-row gap-10"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x">
        <p className=" text-lg text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className=" font-bold mt-10 font-palanquin text-8xl max-sm:leading-[82px] max-sm:text-[72px]">
          {" "}
          <span className=" xl:bg-white xl:whitespace-nowrap pr-10 relative z-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label={"Shop Now"} iconUrl={arrowRight} />
        <div className=" flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
          {statistics.map((stat, idx) => (
            <div key={stat.label}>
              <p className=" text-4xl font-palanquin font-bold ">
                {stat.value}
              </p>
              <p className=" font-montserrat text-slate-gray leading-7 ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center bg-primary">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className=" relative object-contain z-10"
        />
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              {/* {console.log(shoe)} */}
              <ShoeCard
                key={shoe}
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
