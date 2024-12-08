import Image from "next/image";

export default function Menu() {
  return (
  
    <div className="bg-white">
        <div
  className="w-full p-10 bg-no-repeat bg-center flex justify-center"
  style={{
    backgroundImage: "url('/unsplash.png')",
    backgroundSize: "cover", // Use 'cover' to ensure the image covers the area correctly
    backgroundPosition: "center top",
  }}
>
  {/* Header Section */}
  <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">Our Menu</p>
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <p className="text-xl sm:text-2xl md:text-3xl">Home</p>
      <div className="flex items-center">
        <Image src="/Vector.png" width={10} height={10} alt="Vector Icon" />
        <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]">Menu</p>
      </div>
    </div>
  </div>
</div>



<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-4">
  {/* Image on the left */}
  <div className="flex justify-center items-center mb-6 lg:mb-0">
    <Image
      src="/startermenu.png"
      width={448}
      height={626}
      alt="Starter Menu Image"
    />
  </div>

  {/* Text on the right */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="Starter Menu Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Starter Menu
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9 text-black">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Alder Grilled Chinook Salmon
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>

    <div className="w-full mt-9 text-black">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          Berries and Creme Tart
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">700 CAL</p>
    </div>

    <div className="w-full mt-9 text-black">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Tormentoso Bush Pizza Pintoage
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Spicy Vegan Potato Curry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>
  </div>
</div>


       {/* Main Course Section */}
<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-4 mt-20">
  {/* Text on the left */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-0 mb-6 lg:mb-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="Main Course Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Main Course
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Optic Big Breakfast Combo Menu
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-black">
          Cashew Chicken With Stir-Fry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">700 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Vegetables & Green Salad
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Spicy Vegan Potato Curry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div> 
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>
  </div>

  {/* Image on the right */}
  <div className="flex justify-center items-center sm:pl-16 lg:pl-0">
    <Image
      src="/maincourse.png"
      width={448}
      height={626}
      alt="Main Course Image"
    />
  </div>
</div>



     


<div className="relative w-full mt-6">
  {/* Background Image */}
  <img
    src="bg.png"
    alt="Background"
    className="w-full h-full object-cover" // Ensures the background fills the area properly
    style={{
      opacity: 1, // Keep the image fully visible without dimming
    }}
  />

  {/* Black Overlay */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-black"
    style={{
      opacity: 0.8, // Set overlay opacity to 80%
    }}
  >
    {/* Image Section */}
    <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-center items-center px-4 pt-4 space-x-4 sm:space-x-6 md:space-x-8">
      <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
        
       {/* Image 1 */}
<div className="text-center">
  <Image
    src="/cf.png"
    width={50}  // Set same size as br.png
    height={80} // Set same size as br.png
    alt="Starter Menu Image"
    className="object-contain w-[50px] h-[80px] sm:w-[70px] sm:h-[90px] md:w-[90px] md:h-[110px] lg:w-[110px] lg:h-[130px]"
  />
  <p className="mt-2 mb-1 text-lg font-semibold">420</p>
  <p className="text-sm ">Professional Chefs</p>
</div>

{/* Image 2 */}
<div className="text-center">
  <Image
    src="/br.png"
    width={50}  // Set the same size for this image
    height={80} // Set the same size for this image
    alt="Starter Menu Image"
    className="object-contain w-[50px] h-[80px] sm:w-[70px] sm:h-[90px] md:w-[90px] md:h-[110px] lg:w-[110px] lg:h-[130px]"
  />
  <p className="mt-2 mb-1 text-lg font-semibold">320</p>
  <p className="text-sm ">Items Of Food</p>
</div>

{/* Image 3 */}
<div className="text-center">
  <Image
    src="/sp.png"
    width={50}  // Set same size as br.png
    height={80} // Set same size as br.png
    alt="Starter Menu Image"
    className="object-contain w-[50px] h-[80px] sm:w-[70px] sm:h-[90px] md:w-[90px] md:h-[110px] lg:w-[110px] lg:h-[130px]"
  />
  <p className="mt-2 mb-1 text-lg font-semibold">30+</p>
  <p className="text-sm ">Years Of Experienced</p>
</div>

{/* Image 4 */}
<div className="text-center">
  <Image
    src="/pz.png"
    width={50}  // Set same size as br.png
    height={80} // Set same size as br.png
    alt="Starter Menu Image"
    className="object-contain w-[50px] h-[80px] sm:w-[70px] sm:h-[90px] md:w-[90px] md:h-[110px] lg:w-[110px] lg:h-[130px]"
  />
  <p className="mt-2 mb-1 text-lg font-semibold">220</p>
  <p className="text-sm ">Happy Costumers</p>
</div>


      </div>
    </div>
  </div>
</div>






  <div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-4">
  {/* Image on the left */}
  <div className="flex justify-center items-center mb-6 lg:mb-0">
    <Image
      src="/ice.png"
      width={448}
      height={626}
      alt="Starter Menu Image"
    />
  </div>

{/* Text on the right */}
<div className="flex flex-col justify-center items-start lg:pl-12 mt-0">
    <Image
      src="/coffee.png"
      width={24}
      height={24}
      alt="Starter Menu Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Dessert
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Fig and lemon cake
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-black" >
        Creamy mascarpone cake
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">700 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Pastry, blueberries, lemon juice
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Pain au chocolat
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black">560 CAL</p>
    </div>
  </div>
  </div>
  


  





<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center pl-4 lg:pl-10 mt-10 lg:mt-20">
  {/* Text on the left */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-6 lg:mt-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="drink"
    />
    <p className="font-bold text-[32px] sm:text-[36px] lg:text-[48px]" style={{ color: "#333333" }}>
      Drinks
    </p>

    {/* Menu Items */}
    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-black" >
          Caffè macchiato
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] text-black">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] text-black">560 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          Aperol Spritz Capacianno
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] text-black">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] text-black">700 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#333333" }}>
          Caffe Latte Campuri
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] text-black">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] text-black">1000 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#333333" }}>
          Tormentoso BushTea Pintoage
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] text-black">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] text-black">560 CAL</p>
    </div>
  </div>

  {/* Image on the right */}
  <div className="flex justify-center items-center lg:pl-12 mt-6 lg:mt-0">
    <Image
      src="/drink.png"
      width={448}
      height={626}
      alt="Drink Image"
      className="object-contain"
    />
  </div>
</div>


        
<div className="w-full max-w-[1322px] px-4 mt-20">
    <p className="text-[#333333] text-[18px] text-center text-black">Partners & Clients</p>
    <p className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-center text-black">We work with the best people</p>

    <div className="w-full flex justify-center pt-8 items-center space-x-4 overflow-x-auto lg:overflow-x-hidden flex-wrap gap-4">
        <div className="flex justify-center items-center">
            <Image
                src="/image1.png"
                width={240.96}
                height={229.23}
                alt="Partner 1"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image2.png"
                width={166.04}
                height={128.68}
                alt="Partner 2"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image3.png"
                width={143.98}
                height={127.10}
                alt="Partner 3"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image 4.png"
                width={130.98}
                height={129.37}
                alt="Partner 4"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image5.png"
                width={169.97}
                height={129.17}
                alt="Partner 5"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image6.png"
                width={113.98}
                height={129.08}
                alt="Partner 6"
            />
        </div>
    </div>
</div>


    
    </div>

  );
}


