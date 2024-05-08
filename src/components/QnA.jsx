import { useState } from "react";
import Accordion from "./Accordion";
import { qna } from "../data";

const QnA = () => {
  const [accordions, setAccordion] = useState(qna);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };

  return (
    <div className="md:mt-16">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
};

export default QnA;
