import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

let FoodItems = [
  {
    name: "Apple",
    description: "This is a tasty food.",
    status: "yes",
  },
  {
    name: "Mango",
    description: "This is Awesome food.",
    status: "yes",
  },
  {
    name: "Orange",
    description: "This is a sexy food.",
    status: "Yes",
  },
  {
    name: "But",
    description: "This is a cool food.",
    status: "yes",
  },
  {
    name: "Nut",
    description: "This is a hero food.",
    status: "no",
  },
  {
    name: "Shut",
    description: "This is a hell food.",
    status: "no",
  },
  {
    name: "Rot",
    description: "This is a shit food.",
    status: "no",
  },
  {
    name: "Shit",
    description: "This is a shit food.",
    status: "no",
  },
];

const MainContent = () => {
  const [foodname, setFoodname] = useState("");
  const [dropDown, setDropdown] = useState(false);
  const [description, setDescription] = useState("");
  const [eatableStatus, seteatableStatus] = useState("");

  return (
    <>
      <div
        className="mt-[150px] ml-16 mr-16 lg:flex lg:space-x-[80px] lg:justify-around lg:items-start lg:px-24
      "
      >
        <div className="w-full lg:w-[50%] ">
          <h1 className="font-bold text-2xl">
            <span className="text-primaryColor ">Diabetes</span> Explorer
          </h1>
          <p className="w-[300px] my-3 text-">
            Check if the food you eating is good for diabetes without digging
            web.
          </p>
          <h3 className="text-primaryColor font-bold mb-4 mt-16">
            I want to eat :
          </h3>
          {/* selection box */}
          <div
            className=" bg-white h-12 w-full mr-10 px-6 rounded-md shadow-md flex items-center justify-between"
            onClick={() => {
              setDropdown(!dropDown);
              setDescription();
            }}
          >
            {foodname ? (
              <h1 className="font-bold opacity-50 cursor-pointer">
                {foodname}
              </h1>
            ) : (
              <DotsHorizontalIcon className="h-4 w-4 bg-white opacity-50" />
            )}

            <ChevronDownIcon className="h-6 w-6  opacity-50 bg-white cursor-pointer hover:opacity-90" />
          </div>
          {/* dropsdown */}
          {dropDown && (
            <div className="h-[250px] w-full bg-white mt-2 mb-8 shadow-md overflow-scroll overflow-x-hidden">
              {FoodItems.map((food, index) => {
                const { name, description, status } = food;
                return (
                  <div
                    className="px-6 py-4 cursor-pointer flex item-center hover:bg-primaryColor hover:text-text-primary font-bold opacity-50 hover:text-white hover:opacity-100"
                    key={index}
                    onClick={() => {
                      setDropdown(false);
                      setFoodname(name);
                      setDescription(description);
                      seteatableStatus(status);
                    }}
                  >
                    <h1>{food.name}</h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right part */}
        <div
          className={
            !description && dropDown
              ? "hidden lg:inline lg:mt-8 lg:w-full lg:mb-10"
              : "mt-8 w-full mb-10"
          }
        >
          <h1 className="text-2xl font-bold  mb-5 ">Description</h1>
          <div
            className={
              eatableStatus === "no"
                ? "border-statusNo  status-flag"
                : "status-flag border-statusYes"
            }
          >
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
