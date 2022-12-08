import type { NextPage } from "next";
import { SearchSvg, ArrowRightSvg, ClearSvg } from "../src/assets";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const clearInputValue = () => {
    setInputValue("");
  };
  const inputOnBlur = () => {
    !inputValue && setIsFocused(false);
  };
  const backFunc = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsFocused(false);
  };

  //debouncing
  useEffect(() => {
    if (inputValue.length > 1) {
      const delay = setTimeout(() => {
        //Api call
      }, 400);

      return () => {
        clearTimeout(delay);
      };
    }
  }, [inputValue]);

  return (
    <div>
      <div className="fixed w-full h-[6.5rem] p-[0.8rem] bg-white shadow">
        <label className="relative">
          {!isFocused ? (
            <>
              <SearchSvg className="absolute right-[0.8rem] top-[0rem] fill-gray" />
              <span className="absolute right-[4rem] top-[0rem] text-gray">
                جستجو در <span className="text-purple">شهر تهران</span>
              </span>
            </>
          ) : (
            <ArrowRightSvg
              onClick={backFunc}
              className="absolute right-[0.8rem] top-[0rem]"
              width={24}
              height={24}
            />
          )}
          {inputValue && isFocused && (
            <ClearSvg
              onClick={clearInputValue}
              className="absolute left-[0.8rem] top-[0.5rem] stroke-gray"
              width={14}
              height={14}
            />
          )}
          <input
            className="w-full h-full bg-ligthGray rounded-md pr-[4rem] outline-none caret-purple placeholder-gray"
            type="text"
            value={isFocused ? inputValue : ""}
            onChange={handleInputChange}
            onBlur={inputOnBlur}
            placeholder={!isFocused ? "" : "جستجو"}
            onFocus={() => setIsFocused(true)}
          />
        </label>
      </div>
    </div>
  );
};

export default Home;
