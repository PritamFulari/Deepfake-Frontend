import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-magenta text-white">
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-4">DeepFakes</h1>
          <p className="text-xl text-justify">
            Deepfakes are a type of synthetic media generated through deep
            learning techniques, mainly using deep neural networks. It includes
            manipulated images, videos, and audio recordings to portray someone
            saying or doing something that never actually occurred.{" "}
          </p>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 border border-red-500">
          {/* <img
            src='./cover.jpg'
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
        </div>
      </section>
    </div>
  );
}

export default Home