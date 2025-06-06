/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
      <div>
          <section className="text-gray-600 body-font mb-10">
              {/* main  */}
              <div className="container px-5 py-10 mx-auto">
                  {/* Heading  */}
                  <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                  {/* para  */}
                  <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-blue-900'>customers</span> are saying</h2>

                  <div className="flex flex-wrap -m-4">
                      {/* Testimonial 1 */}
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                          <div className="h-full text-center">
                              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/arjun.jpg" 
                              style={{
                                boxShadow: "0 4px 10px darkblue",
                              }}/>
                              <p className="leading-relaxed">CresCart has made it incredibly easy for students like me to buy, sell, and exchange products within our campus. Whether it’s a new startup product or something I no longer need, the platform offers a convenient and sustainable way to connect with others. I’ve found great deals, and I love how it promotes reusability and innovation among students.</p>
                              <span className="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4" />
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Arjun</h2>
                              <p className="text-gray-500">Student, CSE Department</p>
                          </div>
                      </div>

                      {/* Testimonial 2 */}
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                          <div className="h-full text-center">
                              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/peter.jpg" 
                              style={{
                                boxShadow: "0 4px 10px darkblue",
                              }}/>
                              <p className="leading-relaxed">As an IoT student, I am always on the lookout for innovative solutions, and CresCart has been a great platform to explore products and ideas that align with my interests. I’ve been able to both sell some of my unused gadgets and buy useful tech items from other students. It's a convenient and eco-friendly way to support the campus community.</p>
                              <span className="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4" />
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Peter Prabhu</h2>
                              <p className="text-gray-500">Student, IoT Department</p>
                          </div>
                      </div>

                      {/* Testimonial 3 */}
                      <div className="lg:w-1/3 lg:mb-0 p-4">
                          <div className="h-full text-center">
                              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/thalha.jpg" 
                              style={{
                                boxShadow: "0 4px 10px darkblue",
                              }}/>
                              <p className="leading-relaxed">CresCart is a wonderful platform for students like me to discover and share products within the campus. As an AIDS student, I appreciate how easy it is to find useful items and sell things that I no longer need. The platform promotes sustainability, and it feels great to be part of this eco-conscious initiative.</p>
                              <span className="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4" />
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Thalha</h2>
                              <p className="text-gray-500">Student, AIDS Department</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Testimonial
