import { useState, useEffect } from "react";

const options = [
  {
    title: "Region",
    origin_country: [
      "Costa Rica",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Panama",
      "Nicaragua",
      "Peru",
      "Colombia",
      "Brazil",
      "Uganda",
      "Ethiopia",
      "Kenya",
      "Rwanda",
      "Yemen",
      "India",
      "Papua New Guinea",
      "Sumatra",
      "Java",
    ],
  },
  {
    title: "Roast Level",
    roast_level: ["Light", "Medium", "Dark"],
  },
  {
    title: "Tasting Notes",
    tasting_notes: [
      "Fruity",
      "Floral",
      "Spicy",
      "Earthy",
      "Citrusy",
      "Herbal",
      "Toasty",
      "Creamy",
      "Oaky",
      "Smoky",
      "Blueberry",
      "Grape",
      "Lemon",
      "Chocolate",
    ],
  },
  {
    title: "Brewing Method",
    brewing_method: ["Drip", "French press", "Espresso", "Pour over"],
  },
];

export default function Filter({ setFilter }) {
  return (
    <div className="max-w-xs w-full">
      <h2 className="font-bold">Filter</h2>
      <Accordion setFilter={setFilter} />
    </div>
  );
}

function Accordion({ setFilter }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {options.map((option, index) => {
        return (
          <AccordionItem
            key={index}
            option={option}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={index}
            setFilter={setFilter}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({
  option,
  activeIndex,
  setActiveIndex,
  index,
  setFilter,
}) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  useEffect(() => {
    setIsActive(activeIndex === index);
  }, [activeIndex, index]);

  return (
    <div className={`border-y ${index > 0 && "border-t-0"}`}>
      <div role="button" className="py-6 px-5" onClick={toggleAccordion}>
        <h3 className="flex justify-between">
          {option.title} <span>{isActive ? "-" : "+"}</span>
        </h3>
      </div>
      {isActive && <FilterList options={option} setFilter={setFilter} />}
    </div>
  );
}

function FilterList({ options, setFilter }) {
  const keyName = Object.keys(options)[1];
  return (
    <div>
      {options[keyName].map((option, index) => (
        <FilterOption
          key={index}
          option={{ [keyName]: option }}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
}

function FilterOption({ option, setFilter }) {
  const value = Object.values(option)[0];
  return <div onClick={() => setFilter(option)}>{value}</div>;
}
