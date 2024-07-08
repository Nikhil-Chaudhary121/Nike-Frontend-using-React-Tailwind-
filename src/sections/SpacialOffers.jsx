import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpacialOffers = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={733}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div>
        <div className=" flex flex-1 flex-col">
          <h2 className=" font-bold font-palanquin text-4xl capitalize lg:max-w-lg ">
            <span className=" text-coral-red "> Special </span> Offer
          </h2>
          <p className=" mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible saving, we
            offer unparalleled value that sets us apart
          </p>
          <p className=" mt-11 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desire surpassing the loftiest expectation. Your journey with us is
            nothing short of exceptional
          </p>
          <div className=" mt-11 flex flex-wrap gap-4">
            <Button label={"Shop now"} iconUrl={arrowRight} />
            <Button
              label={"Learn more"}
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacialOffers;
