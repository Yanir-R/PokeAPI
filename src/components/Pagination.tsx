import React from 'react';
import '../App.css'

const Pagination: React.FC<any> = ({ setPageNumber, pageNumber }: any) => {

    const onNextPage = (): void => {
        setPageNumber(pageNumber + 1)
    }

    const onPreviousPage = (): void => {
        if (pageNumber === 1) return;
        setPageNumber(pageNumber - 1)
    }

    return (
        <div>

            <div className={`pagination__button pagination__page-previous ${pageNumber === 1 && 'pagination__button--disabled'}`}
                onClick={() => onPreviousPage()}>
                Previous
            </div>

            <div>
                {/* <span>{pageNumber}</span> */}
            </div>
            <div className={`pagination__button pagination__page-next `}
                onClick={() => onNextPage()}>
                Next
            </div>

        </div>
    )
}
export default Pagination;