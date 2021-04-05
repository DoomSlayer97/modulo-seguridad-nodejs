
module.exports = ( totalItems, page, pageSize ) => {

  pageSize = pageSize ? parseInt(pageSize) : parseInt(totalItems);

  let currentPage = page ? parseInt(page) : 1;

  let totalPages = totalItems ? Math.ceil( parseFloat( totalItems ) / parseFloat( pageSize ) ) : 0;
  let startPage = currentPage - 5;
  let endPage = currentPage + 4;

  if ( startPage <= 0 ) {

    endPage -= ( startPage - 1 );
    startPage = 1;

  }

  if ( endPage > totalPages ) {

    endPage = totalPages;

    if ( endPage > 10 ) {

      startPage = endPage - 9;

    }

  }

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    offset: ( currentPage - 1 ) * pageSize
  };

}