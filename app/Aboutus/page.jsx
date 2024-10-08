import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-2/3">
        <div className="flex relative">
          <div className="absolute left-[47px] top-[98px] rounded-[150px] overflow-hidden">
            <Image
              src="/decorative-img1.webp"
              alt="section image"
              width={340}
              height={469}
            />
          </div>
          <div className="absolute top-[178px] left-[399px] rounded-[150px] overflow-hidden">
            <Image
              src="/decorative-img2.webp"
              alt="section image"
              width={340}
              height={469}
            />
          </div>
          <div className="absolute top-[574px] left-[159px]">
            <Image
              src="/people-with-logo.webp"
              alt="people image"
              width={115}
              height={148}
            />
          </div>
        </div>
      </div>
      <div className="relative w-1/3 top-[257px] ">
        <div className="absolute ">
          <h1 className="font-semibold text-[36px] leading-[54px]">About Us</h1>
          <p>
            Empowering hotels with customized digital strategies to drive
            bookings, boost visibility, and enhance guest experiences.
          </p>
          <button className="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
