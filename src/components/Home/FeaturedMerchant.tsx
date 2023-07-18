const FeatureMerchant = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center px-2 py-14">
        <img
          className="mb-5 w-5/6 rounded-md object-cover object-center md:w-3/6 lg:w-2/6"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font mb-2 text-3xl font-medium text-gray-100 sm:text-4xl ">
            Lorem ipsum dolor{" "}
          </h1>
          <p className="mb-4 leading-relaxed text-zinc-400">
            Ipsam esse, obcaecati voluptatibus ea aut beatae quibusdam quidem
            eum commodi.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex rounded border-0 bg-main-500 px-6 py-2 text-lg text-white hover:bg-main-600 focus:outline-none">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureMerchant;
