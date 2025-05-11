import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "Shirt",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "Jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "Electronics",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "Shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "Home",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "Books",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1312/1312091.png",
    name: "Cosmetics",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/9718/9718703.png",
    name: "Food",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/9572/9572615.png",
    name: "Watch",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1370/1370366.png",
    name: "Stationery",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/6833/6833470.png",
    name: "Others",
  },
];

const Category = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Jump to the end first
    container.scrollLeft = container.scrollWidth;

    // Then quickly scroll back to start
    setTimeout(() => {
        container.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }, 300); // delay to allow DOM paint (adjust if needed)
}, []);

  return (
    <div>
      <div className="flex flex-col mt-5">
        <div ref={scrollRef} className="flex overflow-x-scroll hide-scroll-bar  px-3">
          <div className="flex space-x-4 snap-x snap-mandatory">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-900 transition-all hover:bg-blue-800 cursor-pointer mb-1 "
                    style={{
                      boxShadow: "0 4px 15px rgba(96, 165, 250, 0.4)",
                    }}
                  >
                    <div className="flex justify-center mb-12">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {-ms-overflow-style: none;scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
