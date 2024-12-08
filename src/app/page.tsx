import Link from "next/link";
import { Great_Vibes, Inter } from "@next/font/google";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-[#0D0D0DF2]">
      <div className="sec1 max-w-[1320px] relative h-[600px] mx-auto flex justify-between items-center">
        <div className="absolute top-[30px] left-[-50px] flex flex-col items-center gap-[30px]">
          <div className="w-[1px] h-[150px] bg-[#FFF]"></div>
          <div className="flex flex-col text-white gap-[30px]">
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="text-[#FF9F0D]">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-pinterest"></i>
            </a>
          </div>
          <div className="w-[1px] h-[150px] bg-[#FFF]"></div>
        </div>
        <div className="w-[40%]">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal`}
          >
            Its Quick & Amusing!
          </h3>
          <div className="flex flex-col gap-[15px]">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="leading-[68px] font-helvetica text-[60px] text-white"
            >
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food
              Quality
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <Link
              href=""
              className={`px-[40px] text-white py-3 w-fit rounded-[30px] bg-[#FF9F0D] ${inter.className} font-normal text-[16px]`}
            >
              See Menu
            </Link>
          </div>
        </div>
        <div className="w-[55%]">
          <div className="w-[100%] h-[100%] transform translate-x-[90px]">
            <img
              src="/heroImg.png"
              className="w-[100%] h-[100%] object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sec2 text-white max-w-[1320px] relative h-[600px] mx-auto flex justify-between items-center">
        <div className="w-[50%]">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal`}
          >
            About us
          </h3>
          <div className="flex flex-col gap-[15px]">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="leading-[68px] font-helvetica text-[60px] text-white"
            >
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Lacus nisi, et ac dapibus sit eu velit in consequat.{" "}
                </p>
              </li>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                </p>
              </li>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                </p>
              </li>
            </ul>
            <Link
              href=""
              className={`px-[40px] text-white py-3 w-fit rounded-[30px] bg-[#FF9F0D] ${inter.className} font-normal text-[16px]`}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="w-[48%] flex flex-wrap gap-[10px]">
          <div className="w-[100%] h-[100%]">
            <img
              src="/egg.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
          <div className="w-[48%] h-[100%]">
            <img
              src="/meal.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
          <div className="w-[50%] h-[100%]">
            <img
              src="/sandwich.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sec3 text-white max-w-[1320px] relative h-[600px] mx-auto flex flex-col">
        <div className="flex flex-col items-center">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-bold`}
          >
            Food Category
          </h3>
          <h1
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            className="text-[##FF9F0D] text-[48px]"
          >
            <span>Ch</span>oose Food Iteam
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/dish1.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  Save 30%
                </div>
                <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                  Fast Food Dish
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/burger.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  Save 30%
                </div>
                <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                  Burger
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/dish3.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  Save 30%
                </div>
                <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                  Vegetables
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/donuts.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  Save 30%
                </div>
                <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                  Donuts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec4 text-white max-w-[1320px] h-[800px] mx-auto flex justify-between items-center">
        <div className="w-[50%] flex flex-wrap gap-[20px]">
          <div className="flex gap-[20px] items-end">
            <div className="w-[360px] h-[360px]">
              <img
                src="/shawerma.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="w-[290px] h-[230px] pb-[10px]">
              <img
                src="/burger2.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-[20px] items-start">
            <div className="w-[244px] h-[306px] pt-[10px]">
              <img
                src="/nuggets.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="w-[225px] h-[225px] pt-[10px]">
              <img
                src="/burger3.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[161px] h-[166px]">
                <img
                  src="/burger4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="w-[161px] h-[166px]">
                <img
                  src="/dish4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal`}
          >
            Why Choose us
          </h3>
          <div className="flex flex-col gap-[25px]">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="leading-[68px] font-helvetica text-[60px] text-white"
            >
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste And
              Experienced
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex gap-[20px]">
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/burgericon.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="fomt-normal text-[18px]">Fast Food</h6>
              </div>
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/cookie.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="fomt-normal text-[18px]">Lunch</h6>
              </div>
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/wine.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="fomt-normal text-[18px]">Dinner</h6>
              </div>
            </div>
            <div className="h-[100%] flex">
              <div className="bg-[#FF9F0D] rounded-l-[6px] w-[5px] h-auto"></div>

              <div className="flex justify-around bg-white py-[12px] rounded-r-[6px] w-[300px]">
                <h2
                  className="text-[#FF9F0D] font-bold text-[48px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  30+
                </h2>
                <div>
                  <p className="m-0 text-[20px] font-normal text-[#1E1E1E]">
                    Years of
                  </p>
                  <p
                    className="m-0 text-[24px] font-bold text-[#1E1E1E]"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Experienced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/sec5bg.png')] relative bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="sec5 text-white max-w-[1320px] relative h-[470px] mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon1.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Professional Chefs
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  420
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon2.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Items Of Food
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  320
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon3.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Years Of Experienced
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  30+
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Happy Customers
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  220
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
