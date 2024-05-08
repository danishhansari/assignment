import { FiPlus, FiMinus } from "react-icons/fi";
const Accordion = ({ toggleAccordion, isOpen, title, data }) => {
  return (
    <div className="mb-1 w-11/12 p-2 md:p-4 mt-2">
      <button
        className={`w-full text-left transition-all duration-300 flex justify-between ${
          !isOpen ? "border-b" : ""
        } border-[#dfe2de] mb-2 md:mb-4`}
        onClick={toggleAccordion}
      >
        <p className="text-md md:text-xl font-medium transition-all pb-4">
          {title}
        </p>
        <span className="transition-all transform origin-bottom">
          {isOpen ? <FiMinus size={25} /> : <FiPlus size={25} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 border-b border-[#dfe2de] text-[#617275] transition-all leading-tighter">
          {data}
        </div>
      )}
    </div>
  );
};

export default Accordion;
