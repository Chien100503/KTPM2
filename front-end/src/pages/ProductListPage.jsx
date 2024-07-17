import React, { useCallback, useMemo, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import _Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

const className =
  "hover:text-blue-500 duration-150 border-b-2 hover:border-blue-500 border-transparent p-4";

const FilterOption = [
  {
    title: "Mới nhất",
    sort: "createdAt:DESC",
  },
  {
    title: "New",
    sort: "createdAt:ASC",
  },
  {
    title: "Sale",
    sort: "true",
  },
  {
    title: "Hot",
    sort: "true",
  },
  {
    title: "Giá Thấp",
    sort: "price:ASC",
  },
  {
    title: "Giá cao",
    sort: "price:DESC",
  },
];

export default function ProductPage() {
  const [activeButton, setActiveButton] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sort");
  const titleParam = searchParams.get("title");
  // console.log("aaa",sortParam + titleParam)
  const handleFilterChange = (item, index) => {
    //lưu id button
    setActiveButton(index);
    setSearchParams(item);
  };

  return (
    <div>
      <_Breadcrumb title={"Sản phẩm"}></_Breadcrumb>
      <div className="flex sm:gap-10 border-b text-xs sm:text-base">
        <span className="p-4 hidden sm:block">Sắp xếp theo</span>
        {FilterOption.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilterChange(item, index)}
              className={`${className} ${
                activeButton === index ? "text-blue-500 border-blue-500" : ""
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <ProductList sortParam={sortParam} titleParam={titleParam} />
    </div>
  );
}
