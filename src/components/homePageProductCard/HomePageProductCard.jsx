import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart || []);

  const dispatch = useDispatch();

  // add to cart function

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  // delete from cart function
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10">
      {/* heading */}
      <div className="">
        <h1
          className="text-center mb-5 text-2xl font-semibold text-blue-800"
          style={{
            textShadow: "0 0 4px #93c5fd, 0 0 8px #3b82f6, 0 0 12px #2563eb",
          }}
        >
          What's Hot on Campus! ️‍🔥
        </h1>
      </div>

      {/* main 1 */}
      <section className="text-gray-600 body-font">
        {/* main 2 */}
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0, 8).map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4 animate-fadeIn">
                  <style jsx>{`
                    @keyframes fadeIn {
                      from {
                        opacity: 0;
                      }
                      to {
                        opacity: 1;
                      }
                    }

                    @keyframes bounce {
                      0% {
                        transform: scale(1);
                      }
                      50% {
                        transform: scale(1.1);
                      }
                      100% {
                        transform: scale(1);
                      }
                    }

                    .animate-fadeIn {
                      animation: fadeIn 1s ease-out;
                    }

                    .hover\:animate-bounce:hover {
                      animation: bounce 0.5s ease-in-out;
                    }
                  `}</style>
                  <div
                    className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer transition duration-300 hover:scale-[1.02]"
                    style={{
                      boxShadow: "0 4px 15px rgba(96, 165, 250, 0.4)",
                    }}
                  >
                    <img
                      onClick={() => navigate(`/productinfo/${id}`)}
                      className="lg:h-80 h-96 w-full"
                      src={productImageUrl}
                      alt={title}
                    />

                    <div className="p-6 flex flex-col justify-between h-[240px]">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CresCart
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 h-12 overflow-hidden flex-grow">
                        {title.substring(0, 32)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        ₹{price}
                      </h1>

                      <div className="flex justify-center ">
                        {Array.isArray(cartItems) &&
                        cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className="bg-red-500 hover:bg-red-600 w-full text-white py-[4px] rounded-lg font-bold hover:animate-bounce"
                          >
                            Delete From Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className="bg-blue-900 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold hover:animate-bounce"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
