import { useState } from "react";
import Accordion from "./Accordion";
import { qna } from "../../data"; // Faq Array

const QnA = () => {
  // All the Faq States
  const [accordions, setAccordion] = useState(qna);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.key === accordionkey) {
        return { ...accordion, isOpen: !accordion.isOpen };
      } else {
        return { ...accordion, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };

  return (
    <div className="my-4 md:my-24">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          question={accordion.question}
          answer={accordion.answer}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
};

export default QnA;
