import Image from "next/image";

const List = () => {
  return (
    <div className="mt-[10%]">
      <div className="relative flex">
        {/* Image Container */}
        <div className="w-full sm:w-[50%]">
          <Image
            src="/Listservice.png"
            alt="listservice"
            className="relative rounded-r-2xl z-10 object-cover w-full h-full"
            height={800}
            width={800}
          />
        </div>

        {/* Text Container with Blue Background */}
        {/* <div className="absolute top-[25%] left-[50%] transform -translate-x-[50%] sm:left-[50%] w-[] sm:w-[50%] bg-[#1F2456] rounded-l-2xl p-8">
          <h1 className="tracking-widest text-2xl text-white text-center sm:text-end p-10">
            We list your property on OTA platforms
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 mt-4">
            <span className="text-white">Booking.com</span>
            <span className="text-white">Skyscanner</span>
            <span className="text-white">Tripadvisor</span>
            <span className="text-white">Expedia</span>
            <span className="text-white">Airbnb</span>
            <span className="text-white">Agoda</span>
            <span className="text-white">Trivago</span>
          </div>
        </div> */}
        <div className=" absolute top-32 left-96 h-[80vh] rounded-l-2xl w-[74.7vw] p-10 translate-x-0  bg-[#1F2456] ">
          <div className=" ">
            <h1 className="text-3xl text-white tracking-widest flex items-end justify-end  ">
              We list your porperty on OTA platforms
            </h1>
            <ul className=" grid grid-cols-1 lg:grid-cols-3 gap-12 text-3xl  absolute top-32 left-[32rem] z-40 text-white  ">
              <li className="text-white z-10">trivago</li>
              <li>Booking.com</li>
              <li>Skyscanner</li>
              <li>Expedia</li>
              <li>airbnb</li>
              <li>agoda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
