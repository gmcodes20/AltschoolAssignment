// import React, { useMemo } from "react";

// const range = (start, end) => {
//   let lenght = end - start + 1;

//   return Array.from({ lenght }, (_, idx) => idx + start);
// };

// export const usePagination = (
//   totalCount,
//   pageSize,
//   sirblingsCount = 1,
//   currentPage
// ) => {
//   const paginationRage = useMemo(() => {
//     const totalPageCount = Math.ceil(totalCount / pageSize);
//     // Implementation logic goes here

//     //Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
//     const totalpageNumbers = sirblingsCount + 5;

//     /*
//       Case 1:
//       If the number of pages is less than the page numbers we want to show in our
//       paginationComponent, we return the range [1..totalPageCount]
//     */

//     if ((totalpageNumbers) => totalPageCount) {
//       return range(1, totalPageCount);
//     }

//     /*
//     	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
//     */

//     const just = currentPage - sirblingsCount;
//   }, [totalCount, pageSize, sirblingsCount, currentPage]);
//   return paginationRage;
// };
