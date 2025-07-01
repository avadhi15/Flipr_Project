const NewsletterForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <span className="text-white uppercase text-sm tracking-wider font-medium">
        Subscribe Us
      </span>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="py-2 px-4 border-2 border-white rounded text-gray-800 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsletterForm;