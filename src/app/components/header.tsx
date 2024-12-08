import Link from "next/link";

export default function Header() {
  return (
    <div className={`bg-[#0D0D0DF2] text-[#FFF] pt-[25px] font-inter`}>
      <div className="max-w-[1320px] h-[90px] mx-auto flex flex-col items-center justify-center ">
        <a href="/" className="w-[110px] h-[20px]">
          <img src="/logo.png" className="w-[100%] h-[100%] object-center object-contain" alt="" />
        </a>
        <div className="flex justify-between items-center w-[100%]">
          <ul className="flex gap-[20px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Menu</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Pages</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Shop</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-[10px]">
            <form className="min-w-[310px] bg-transparent">
              <div className="relative bg-transparent flex">
                <input
                  type="search"
                  id="default-search"
                  className="block bg-transparent p-4 text-white border border-[#FF9F0D] rounded-[27px] w-[100%]"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white p-3 bg-transparent absolute inset-y-0 end-0 pe-3"
                >
                  <div className=" flex items-center  pointer-events-none">
                    <i className="bi bi-search"></i>
                  </div>
                </button>
              </div>
            </form>
            <button type="button">
              <i className="bi bi-handbag"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
