import { useState } from "react";

export const UsePagination = (jobs) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const totalItems = jobs.length;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const offset = (currentPage - 1) * itemsPerPage;
    const limit = offset + itemsPerPage;

    const itemCurrent = jobs.slice(offset, limit);

    const backToPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextToPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleindexPage = () => {
        setCurrentPage(1);
    }

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    }

    return {
        currentPage,
        itemsPerPage,
        totalItems,
        totalPages,
        itemCurrent,
        offset,
        limit,
        backToPage,
        nextToPage,
        handleindexPage,
        handleLastPage
    }
}
