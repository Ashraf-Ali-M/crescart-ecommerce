import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const AllProduct = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete from cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1
            className=" text-center mb-5 text-2xl font-semibold text-blue-800"
            style={{
              textShadow: "0 0 4px #93c5fd, 0 0 8px #3b82f6, 0 0 12px #2563eb",
            }}
          >
            All Products
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {getAllProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                return (
                  <div
                    key={index}
                    className="p-4 w-full md:w-1/4 animate-fadeIn"
                  >
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
                        className="lg:h-80  h-96 w-full"
                        src={productImageUrl}
                        alt="blog"
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
                          {cartItems.some((p) => p.id === item.id) ? (
                            <button
                              onClick={() => deleteCart(item)}
                              className=" bg-red-700 hover:bg-red-600 w-full text-white py-[4px] rounded-lg font-bold hover:animate-bounce"
                            >
                              Delete From Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-blue-900 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold hover:animate-bounce"
                            >
                              Add To Cart
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
    </Layout>
  );
};

export default AllProduct;
