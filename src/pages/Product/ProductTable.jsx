import { useState, useEffect } from 'react';
import PaginatedTable from '../../Components/Table/PaginatedTable';
import AddProduct from './AddProduct';


const ProductTable = () => {
    const data = [
        {
            id: 1,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 2,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 3,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 4,
            category: 'mmm',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 5,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 6,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 7,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 8,
            category: 'ccc',
            title: 'mmmmmmm',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
        {
            id: 9,
            category: 'mmm',
            title: 'mmmmmmm',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 10,
            category: 'ccc',
            title: 'yyyyy',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 11,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 12,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 13,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 14,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },

        {
            id: 15,
            category: 'ccc',
            title: 'ddd',
            price: 2000000,
            stock: '7',
            like_count: 7,
            status: 1,
        },
    ];
    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'نام محصول' },
        { field: 'price', title: 'قیمت' },
    ];

    const additionalElement = (itemId) => {
        return (
            <>
                <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش محصول" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_modal" />
                <i className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip" title="ثبت ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal" />
                <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف محصول" data-bs-toggle="tooltip" data-bs-placement="top" />
            </>
        );
    };

    const additionField = {
        title: 'عملیات',
        elements: (itemId) => additionalElement(itemId),
    };
    const [numOfPage, setNumOfPage] = useState(10);

    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                additionField={additionField}
                searchParams={{
                    title: 'جستجو',
                    placeholder: 'قسمتی از عنوان را وارد کنید ...',
                    searchField: 'title',
                }}
                numOfPage={numOfPage}
            >
                <AddProduct />
            </PaginatedTable>
            
            <h4 className="fs-5">تعداد آیتم ها در صفحه</h4>
            <div className="d-flex align-items-center">
                <span className="btn btn-primary fs-5" onClick={() => setNumOfPage(numOfPage + 1)}>+</span>
                <span className="fs-4 mx-3">{ numOfPage }</span>
                <span className="btn btn-outline-danger fs-5" onClick={() => setNumOfPage(numOfPage - 1)}>-</span>
            </div>
        </>
    );
}

export default ProductTable;
