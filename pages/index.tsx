import type { GetServerSideProps, NextPage } from "next";
import { SearchSvg, ArrowRightSvg, ClearSvg } from "assets";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { getAreas } from "Services";
import AreasList from "components/Areas/AreasList";
import { Area } from "types/DTO/areas/res";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["areas", ""], async () => await getAreas());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery(
    ["areas", query],
    async () => await getAreas(query)
  );
  const [areas, setAreas] = useState<Area[] | undefined>(data?.areas);
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
        setQuery(inputValue);
      }, 500);

      return () => {
        clearTimeout(delay);
      };
    } else {
      setQuery("");
    }
  }, [inputValue]);

  useEffect(() => {
    setAreas(data?.areas);
  }, [data]);
  return (
    <div>
      <div className="fixed w-full h-[6.5rem] top-0 p-[0.8rem] bg-white shadow z-10">
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
            className="w-full h-full bg-ligth_gray rounded-md pr-[4rem] outline-none caret-purple placeholder-gray"
            type="text"
            value={isFocused ? inputValue : ""}
            onChange={handleInputChange}
            onBlur={inputOnBlur}
            placeholder={!isFocused ? "" : "جستجو"}
            onFocus={() => setIsFocused(true)}
          />
        </label>
      </div>
      <AreasList areas={areas!} isLoading={isLoading} />
    </div>
  );
};

export default Home;
