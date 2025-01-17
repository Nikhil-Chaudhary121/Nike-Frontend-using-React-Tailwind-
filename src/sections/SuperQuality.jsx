import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
    >
      <div className=" flex flex-1 flex-col">
        <h2 className=" font-bold font-palanquin text-4xl capitalize lg:max-w-lg ">
          {" "}
          We Provide You
          <span className=" text-coral-red "> Super </span>
          <span className=" text-coral-red ">Quality </span> Shoe
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className=" mt-11 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensure your satisfaction
        </p>
        <div className=" mt-11">
          <Button label={"View details"} />
        </div>
      </div>
      <div className=" flex flex-1 justify-center items-center">
        <img
          className=" object-contain"
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
