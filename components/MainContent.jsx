import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNutrientsData,
  fetchNutrients,
  removeNutrients,
} from "../redux/slices/nutrientSlice";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

let FoodItems = [
  {
    name: "Apple",
    status: "yes",
  },
  {
    name: "Mango",
    status: "yes",
  },
  {
    name: "Orange",
    status: "Yes",
  },
  {
    name: "Nut",
    status: "yes",
  },
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const MainContent = () => {
  const [foodname, setFoodname] = useState("");
  const [dropDown, setDropdown] = useState(false);
  const [inputField, setInputField] = useState(true);
  const [loading, setLoading] = useState(false);
  const [eatableStatus, seteatableStatus] = useState("");
  const dispatch = useDispatch();
  const nutrients = useSelector(getNutrientsData);
  const onFoodSelectHandler = async (food) => {
    setLoading(true);
    await dispatch(removeNutrients());
    setDropdown(false);
    setInputField(false);
    setFoodname(food.name);
    seteatableStatus(food.status);
    await dispatch(fetchNutrients(food.name));
    setLoading(false);
  };

  const onSearchHandler = async () => {
    setLoading(true);
    await dispatch(removeNutrients());
    setInputField(false);
    await dispatch(fetchNutrients(foodname));
    setLoading(false);
  };

  const calculateEatablity = () => {};

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
            className=" bg-white h-12 w-full mr-10 px-4 pr-6 rounded-md shadow-md flex items-center justify-between"
            onClick={() => {
              setInputField(true);
            }}
          >
            {foodname && !inputField ? (
              <div
                onClick={() => {
                  setInputField(true);
                }}
              >
                <h1 className="font-bold opacity-50 cursor-pointer">
                  {foodname}
                </h1>
              </div>
            ) : !inputField ? (
              <DotsHorizontalIcon className="h-4 w-4 bg-white opacity-50" />
            ) : (
              <input
                type="text"
                placeholder="Enter food name"
                className="w-full text-black font-bold opacity-50 border-none pr-3 py-2 focus:outline-none"
                onChange={(e) => {
                  setFoodname(e.target.value);
                }}
              />
            )}
            {inputField ? (
              <SearchIcon
                className="h-6 w-6  opacity-50 bg-white cursor-pointer hover:opacity-90 "
                onClick={() => {
                  onSearchHandler();
                }}
              />
            ) : (
              <ChevronDownIcon
                className="h-6 w-6  opacity-50 bg-white cursor-pointer hover:opacity-90 "
                onClick={() => {
                  setDropdown(!dropDown);
                }}
              />
            )}
          </div>
          {/* dropsdown */}
          {dropDown && (
            <div className="h-[250px] w-full bg-white mt-2 mb-8 shadow-md overflow-scroll overflow-x-hidden">
              {FoodItems.map((food, index) => {
                return (
                  <div
                    className="px-6 py-4 cursor-pointer flex justify-between hover:bg-primaryColor hover:text-text-primary font-bold opacity-50 hover:text-white hover:opacity-100"
                    key={index}
                    onClick={() => onFoodSelectHandler(food)}
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
            !nutrients && dropDown
              ? "hidden lg:inline lg:mt-8 lg:w-full lg:mb-10"
              : "mt-8 w-full mb-10"
          }
        >
          <div className="flex">
            <h1 className="text-2xl font-bold  mb-5 ">Description :</h1>
            <h1 className="text-2xl font-bold text-primaryColor mb-5 ">
              {`- ${foodname.toUpperCase()}`}
            </h1>
          </div>
          <div
            className={
              eatableStatus === "no"
                ? "border-statusNo  status-flag"
                : "status-flag border-statusYes"
            }
          >
            {nutrients !== null && (
              <h1 className=" text-xl text mb-2 ">Nutrition values</h1>
            )}
            {/* {nutrients.map((item) => (
              <h1 className=" text-2xl ">{item.name.toUpperCase()}</h1>
            ))} */}

            <div className="flex flex-wrap">
              {!loading ? (
                nutrients.map((item) =>
                  Object.keys(item)
                    .filter((ite) => ite != "name")
                    .map((it) => (
                      <div className=" bg-gray-100 py-[5px] px-[10px] rounded-md m-[5px] flex">
                        <h1 className="text-black opacity-50">
                          {it[0].toUpperCase() + it.slice(1).split("_")[0]} :
                        </h1>
                        <h1 className="text-primaryColor ml-1">{item[it]}</h1>
                        <h1></h1>
                      </div>
                    ))
                )
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={getRandomArbitrary(60, 100)}
                  height={36}
                  animation="pulse"
                  count={8}
                  inline="false"
                  borderRadius={10}
                  className="mr-4 mb-2"
                  baseColor="#20252D"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
