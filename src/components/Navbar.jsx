import logo from '../assets/logo.png'
import vector from '../assets/Vector.png'


const Navbar = () => {
  return (
    <section className="w-full">
  <nav className="w-full">
    <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-12">
      <img
        src={logo}
        alt="Logo"
        className="h-8 sm:h-10 w-auto"
      />

      <div className="flex items-center justify-center bg-[#8F62D4] rounded-full w-10 h-10 sm:w-12 sm:h-12">
        <img
          src={vector}
          alt="Menu"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>
    </div>

   <div className="text-center bg-gradient-to-r from-[#CFF0C4] to-[#C7E0F2] py-2 px-4 sm:px-6">
      <p className="text-xs sm:text-sm font-semibold leading-relaxed">
        Starting at{" "}
        <span className="line-through text-gray-400">
          Rs 69,999
        </span>{" "}
        Rs 47,999. Hurry! Offer ends soon.
      </p>
    </div>
  </nav>
</section>
  )
}

export default Navbar