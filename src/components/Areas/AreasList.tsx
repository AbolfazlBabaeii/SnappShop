import React, { useEffect, useState, useTransition } from "react";
import { Area } from "types/DTO/areas/res";

interface IAreasListProps {
  areas: Area[];
  isLoading: boolean;
}

const AreasList: React.FC<IAreasListProps> = React.memo(
  ({ areas, isLoading }) => {
    const [showAreas, setShowAreas] = useState(areas);
    //how many item visible on screen
    const [visibleAreaCount, setVisibleAreaCount] = useState<number>(20);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition();
    const [selectedArea, setSelectedArea] = useState<Area>();
    useEffect(() => {
      setShowAreas(areas);
      const visibleAreaCount = Math.round(window.innerHeight / 52);
      setVisibleAreaCount(visibleAreaCount);
      // limit the execution scroll event
      const scrollThrottling = (limit: number) => {
        let wait = false;
        return function () {
          if (!wait) {
            const currentArea = Math.round(
              (window.scrollY + window.innerHeight) / 52
            );
            const startPoint =
              currentArea - (visibleAreaCount + 5) < 0
                ? 0
                : currentArea - (visibleAreaCount + 5);
            const endPoint = currentArea + 5;
            const visibleData = areas?.slice(startPoint, endPoint);
            startTransition(() => {
              setShowAreas(visibleData);
            });
            wait = true;
            setTimeout(function () {
              wait = false;
            }, limit);
          }
        };
      };

      if (!isLoading && areas && areas?.length > 0) {
        window.addEventListener("scroll", scrollThrottling(10));
      }
      return () => {
        window.removeEventListener("scroll", scrollThrottling(10));
      };
    }, [areas, isLoading]);

    useEffect(() => {
      if (isLoading) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }, [isLoading]);
    return (
      <>
        <ul
          className={"mt-[7.3rem] relative bg-white"}
          style={{
            height: !isLoading ? areas?.length * 52 : visibleAreaCount * 52,
          }}
        >
          {!isLoading
            ? showAreas?.length > 0 &&
              showAreas.map((area) => (
                <li
                  onClick={() => setSelectedArea(area)}
                  className={`absolute w-full h-[5.2rem] px-[1.6rem] pt-[1.4rem]`}
                  style={{ top: `${(area.order! - 1) * 52}px` }}
                  key={area.id}
                >
                  <div className="flex items-center justify-between">
                    <span>{area.name}</span>
                    <div
                      className={`flex items-center justify-center w-[2rem] h-[2rem] rounded-full border-2 border-circle_gray ${
                        selectedArea?.id === area.id ? "border-purple" : ""
                      }`}
                    >
                      {selectedArea?.id === area.id && (
                        <div className="w-[1rem] h-[1rem] rounded-full bg-purple" />
                      )}
                    </div>
                  </div>
                  <hr className="mt-[1.4rem] text-devider_gray" />
                </li>
              ))
            : Array(visibleAreaCount + 5)
                .fill("")
                .map((item, index) => (
                  <li
                    className={`absolute w-full h-[5.2rem] px-[1.6rem] pt-[1.4rem] animate-pulse`}
                    style={{ top: `${index * 52}px` }}
                    key={index}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-36 h-2.5 rounded-full bg-skeleton" />
                      <div
                        className={`w-[2rem] h-[2rem] rounded-full border-2 border-skeleton`}
                      />
                    </div>
                    <hr className="mt-[1.4rem] text-skeleton" />
                  </li>
                ))}
        </ul>
      </>
    );
  }
);

export default AreasList;
