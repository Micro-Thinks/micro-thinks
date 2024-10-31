import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="bg-[#1F2456] mt-24 ">
            <h1 className=" flex justify-center   items-center text-3xl text-white h-32">
              Legal Notice
            </h1>
          </div>
          <div className="bg-white p-12   flex flex-col  items-center justify-center   ">
            <div className="w-[60vw] space-y-2">
              <p className=" ">
                Microthinks.com serves legal notice to inform users that by
                accessing and using our website and services, you must follow
                our rules and regulations. Please keep in mind that the
                exploitation of our services and the unauthorized use of our
                website may lead to instant loss of access to our site and
                potential legal action. We maintain the right to update all
                these actions according to new standards, so staying informed of
                any changes is essential. Violating these terms may result in
                the termination of the account and serious legal implications.
              </p>
              <p>
                If you choose to engage with our website, you recognize your
                acceptance of our current terms, which are designed to protect
                you and your community. If you cooperate with us and understand
                our policies, it would be better for us to stay successful in a
                healthy environment. At{" "}
                <Link href="/" className="text-blue-500">
                  Microthinks.com
                </Link>
                , we appreciate your dedication to following our guidelines as
                we strive to design an exceptional experience for every user.
                Let’s work together for mutual achievements, ensuring a safe and
                positive zone. Thank you for collaborating with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
