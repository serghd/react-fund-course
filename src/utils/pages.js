export const getPageCount = (totalCount, limit) => {
   if (limit > 0) {
      return Math.ceil(totalCount / limit);
   }
   return 1;
}