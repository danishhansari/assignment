const RegistrationForm = () => {
  return (
    <div className="max-w-[800px] mx-auto p-4 flex flex-col items-center">
      <h2 className="font-cursive text-xl md:text-3xl tracking-wider text-green-600 text-center">
        Registration Form
      </h2>
      <h1 className="text-4xl md:text-5xl font-medium text-center w-full md:w-2/3">
        Start your success Journey here!
      </h1>

      <form className="mt-16 flex flex-col w-full items-center">
        <input
          className="w-full md:w-1/2 py-4 pl-8 rounded-full border-white focus:border-blue-600 border focus:outline-none text-lg bg-gray-700/10 focus:bg-gray-500/10"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="mt-4 w-full md:w-1/2 py-4 pl-8 rounded-full border-white focus:border-blue-600 border focus:outline-none text-lg bg-gray-700/10 focus:bg-gray-500/10"
          type="text"
          placeholder="Enter your name"
        />

        <button
          className="py-4 w-full md:w-1/2 bg-black text-white rounded-full mt-8 disabled:bg-black/20 font-semibold text-lg"
          disabled
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
