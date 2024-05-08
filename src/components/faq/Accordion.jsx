import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({ toggleAccordion, isOpen, question, answer }) => {
  return (
    <div className="w-full md:w-11/12 py-2 px-4 my-2">
      <button
        className={`w-full text-left transition-all duration-300 flex justify-between ${
          !isOpen ? "border-b" : ""
        } border-[#dfe2de] mb-2 md:mb-4`}
        onClick={toggleAccordion}
      >
        <p className="text-md md:text-xl font-medium transition-all pb-4">
          {question}
        </p>
        <span className="transition-all transform origin-bottom">
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 border-b border-[#dfe2de] text-[#617275] transition-all leading-tighter">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
