import React, { useEffect, useState } from 'react';
import '../App.css'

interface IProps {
    allPagesNumber: number
    itemsPerPage: number
    itemsNumber: number
    pageChange: (page: number) => void
}

const Pagination: React.FC<IProps> = (props) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        props.pageChange(currentPage)
    }, [currentPage])

    const onFirstPage = (): void => {
        setCurrentPage(1)
    }

    const onLastPage = (): void => {
        setCurrentPage(props.allPagesNumber)
    }

    const onNextPage = (): void => {
        setCurrentPage(currentPage + 1)
    }

    const onPreviousPage = (): void => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <div className={`pagination__button pagination__page-first ${currentPage === 1 ? 'pagination__button--disabled' : ''}`}
                onClick={() => onFirstPage()}>
                First
            </div>
            <div className={`pagination__button pagination__page-previous ${currentPage === 1 && 'pagination__button--disabled'}`}
                onClick={() => onPreviousPage()}>
                Previous
            </div>

            <div>
                <span>{props.allPagesNumber}</span>
            </div>
            <div className={`pagination__button pagination__page-next ${currentPage === props.allPagesNumber && 'pagination__button--disabled'}`}
                onClick={() => onNextPage()}>
                Next
            </div>

            <div className={`pagination__button pagination__page-last ${currentPage === props.allPagesNumber && ' pagination__button--disabled'}`}
                onClick={() => onLastPage()}>
                Last
            </div>
        </div>
    )
}
export default Pagination;