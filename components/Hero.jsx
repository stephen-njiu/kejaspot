
import PropertySearchForm from "./PropertySearchForm"

const Hero = () => {
    const gradientColor = 'gradient-background'
  return (
    <section className= {` ${gradientColor} py-20 mb-4`}>
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h1
          className="text-2xl font-extrabold text-white sm:text-5xl md:text-6xl"
        >
          Find a Home Away From Home.
        </h1>
        <p className="my-4 text-xl text-white [font-family:cursive]">
        Warmth & Style in Every Stay, in Every Keja.
        </p>
      </div>
      {/* <!-- Form Component --> */}
     <PropertySearchForm />
    </div>
  </section>
  )
}

export default Hero