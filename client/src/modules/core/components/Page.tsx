import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export type PaginateProps = {
  totalPage?: number;
  currentPage?: number;
  numPaging?: number;
  callback?: (page: number) => void;
  allowDefaultChangeHandler?: boolean;
  allwaysShowPrevNext?: boolean;
};

const defaultIconSize = 20;
const defaultClassNamePaginate = "text-text text-sm font-semibold";
const defaultActiveBackground = "bg-hoverColor";

const Pagination: React.FC<PaginateProps> = ({
  totalPage = 1,
  currentPage = 1,
  numPaging = 1,
  callback,
  allowDefaultChangeHandler = true,
  allwaysShowPrevNext = false,
}) => {
  const [page, setPage] = useState(currentPage);
  const pageActive = defaultActiveBackground;
  const pageDefault = "";
  const defaultNumPageClass = twMerge(
    "px-2 py-1 mx-[2px] opacity-800 rounded-md shadow-md",
    defaultClassNamePaginate
  );
  const pageItemClass = defaultNumPageClass;
  const pageLinkClass = "cursor-pointer";
  const pageDash = "cursor-default";

  const handlerClick = (page: number) => {
    if (page < 1 || page > totalPage) {
      return;
    }
    allowDefaultChangeHandler && setPage(page);
    if (typeof callback === "function") {
      callback(page);
    }
  };

  useEffect(() => {
    !allowDefaultChangeHandler && setPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center flex-wrap text-colorWhite">
      {(() => {
        let array: JSX.Element[] = [];
        if (page > 1 || allwaysShowPrevNext) {
          array.push(
            <div
              key={page + "-"}
              className={twMerge(pageItemClass, "px-1")}
              onClick={() => handlerClick(page - 1)}
            >
              <span
                className={twMerge(pageLinkClass, page === 1 ? pageDash : "")}
              >
                <HiChevronLeft size={defaultIconSize} />
              </span>
            </div>
          );
        }
        if (totalPage <= numPaging * 2 + 1) {
          for (let index = 1; index <= totalPage; index++) {
            array.push(
              <div
                key={index}
                className={twMerge(
                  index === page ? pageActive : pageDefault,
                  defaultNumPageClass
                )}
                onClick={() => handlerClick(index)}
              >
                <span className={twMerge(pageLinkClass)}>{index}</span>
              </div>
            );
          }
        } else {
          let start = 1;
          let end = numPaging * 2 + 1;
          if (page > numPaging) {
            start = page - numPaging;
            end = page + numPaging;
          }
          if (page + numPaging > totalPage) {
            start = totalPage - numPaging * 2;
            end = totalPage;
          }
          array.push(
            <div
              key={1}
              className={twMerge(
                1 === page ? pageActive : pageDefault,
                defaultNumPageClass
              )}
              onClick={() => handlerClick(1)}
            >
              <span className={twMerge(pageLinkClass)}>{1}</span>
            </div>
          );
          if (page - numPaging > 2) {
            array.push(
              <div key="blank_<<" className={twMerge(pageItemClass)}>
                <span className={twMerge(pageDash)}>...</span>
              </div>
            );
          }
          for (let index = start; index <= end; index++) {
            if (index === totalPage || index === 1) {
              continue;
            }
            array.push(
              <div
                key={index}
                className={twMerge(
                  index === page ? pageActive : pageDefault,
                  defaultNumPageClass
                )}
                onClick={() => handlerClick(index)}
              >
                <span className={twMerge(pageLinkClass)}>{index}</span>
              </div>
            );
          }
          if (page + numPaging < totalPage - 1) {
            array.push(
              <div key="blank_>" className={twMerge(pageItemClass)}>
                <span className={twMerge(pageDash)}>...</span>
              </div>
            );
          }
          array.push(
            <div
              key={totalPage}
              className={twMerge(
                totalPage === page ? pageActive : pageDefault,
                defaultNumPageClass
              )}
              onClick={() => handlerClick(totalPage)}
            >
              <span className={twMerge(pageLinkClass)}>{totalPage}</span>
            </div>
          );
        }
        if (page < totalPage || allwaysShowPrevNext) {
          array.push(
            <div
              key={page + "+"}
              className={twMerge(pageItemClass, "px-1")}
              onClick={() => handlerClick(page + 1)}
            >
              <span
                className={twMerge(
                  pageLinkClass,
                  page === totalPage ? pageDash : ""
                )}
              >
                <HiChevronRight size={defaultIconSize} />
              </span>
            </div>
          );
        }
        return array;
      })()}
    </div>
  );
};

export default Pagination;
