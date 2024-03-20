import React from "react";

function ShopSVG({ setShowSelectedF, showSelectedF, selectedFlowersCount }) {
  return (
    <>
      <div onClick={() => setShowSelectedF(!showSelectedF)}>
        <div className="select-none">
          <span className="indicator-item badge badge-accent badge-xs absolute right-1 top-3">
            {selectedFlowersCount !== 0 && selectedFlowersCount}
          </span>
          <svg
            className="w-[30px] text-base-content cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M14 7h-4v3a1 1 0 1 1-2 0V7H6a1 1 0 0 0-1 1L4 19.7A2 2 0 0 0 6 22h12c1 0 2-1 2-2.2L19 8c0-.5-.5-.9-1-.9h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 1 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ShopSVG;
