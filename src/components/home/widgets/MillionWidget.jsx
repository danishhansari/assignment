const MillionWidget = () => {
  return (
    <div className="bg-[#002E18] border border-[#3D3D3D] max-w-[150px] md:max-w-[230px] w-full rounded-xl p-2 md:p-6 absolute -right-12 md:left-96 -bottom-2 md:-bottom-8 shadow-lg animate-top">
      <h2 className="text-white font-bold text-xl md:text-4xl">
        $0.5{" "}
        <span className="uppercase text-[#A6A3A0] text-sm md:text-lg tracking-wider">
          million
        </span>
      </h2>
      <p className="text-[#CCCCCC] mt-2 md:mt-4 text-xs md:text-lg font-medium leading-2 md:leading-tight">
        Reduced client expenses by saving or hiring and employee costs.
      </p>
    </div>
  );
};

export default MillionWidget;
