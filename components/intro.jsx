export default function Intro(){
    return (
        <section class="w-full h-full overflow-x-hidden bg-center bg-cover object-cover">
        
        <div class="relative">
        <img
            src="home.jpg"
            class="object-cover w-full h-full"
            alt="Image alt text"
        />
        <div class="md:absolute bg-gray-900 p-0 md:p-4 rounded-lg md:text-xl top-1/2 w-screen md:-translate-y-1/6 md:translate-x-1/2 md:px-6 px-2">
        <section class="lg:flex lg:items-center">
        <div class="about md:pb-0 pb-8">
          <h1
            class="primary-heading text-center text-[40px] font-black mb-6 sm:font-bold sm:leading-tight sm:mb-0 lg:text-left lg:mb-2"
          >
            Join the waitlist for Launch Event
          </h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail address"
            class="block m-auto w-[96%] px-4 py-2 rounded-md mb-4 border-[1px] border-gray-600 bg-gray-100 focus:outline-none sm:inline sm:w-3/5 sm:mr-2"
          />
          <button
            class="block m-auto w-[96%] border-2 border-purple-500 hover:bg-purple-600 text-white text-lg px-2  py-2 rounded-md sm:inline sm:w-4/12 sm:text-base lg:w-3/12"
          >
            Join Waitlist
          </button>
        </div>

        <img src="./Assets/Illustration.png" alt="" class="main-img hidden lg:block w-4/5" />
      </section>
        </div>
    </div>
        </section>
    )
}