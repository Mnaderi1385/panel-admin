import { useEffect, useState } from "react";

const PaginatedTable = ({ children, data, dataInfo, additionField, searchParams, numOfPage }) => {
    const [initData, setInitData] = useState(data);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [pages, setPages] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [searchChar, setSearchChar] = useState('');

    const { title, placeholder, searchField } = searchParams;

    useEffect(() => {
        let pCount = Math.ceil(initData.length / numOfPage);
        setCountPage(pCount);
        let pArray = [];
        for (let i = 1; i <= pCount; i++) pArray = [...pArray, i];
        setPages(pArray);
    }, [initData]);

    useEffect(() => {
        let start = (currentPage * numOfPage) - numOfPage;
        let end = (currentPage * numOfPage);
        setTableData(initData.slice(start, end));
    }, [currentPage, initData]);

    useEffect(() => {
        setInitData(data.filter((d) => d[searchField].includes(searchChar)));
        setCurrentPage(1);
    }, [searchChar]);
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder={placeholder} onChange={(e) => setSearchChar(e.target.value)} />
                        <span className="input-group-text" >{ title }</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    {children}
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-responsive text-center table-hover table-bordered">
                    <thead className="table-secondary">
                        <tr>
                            {
                                dataInfo.map((item) => (
                                    <th key={item.field}>{item.title}</th>
                                ))
                            }
                            {
                                (additionField) ? (
                                    <th>{additionField.title}</th>
                                ) : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((d) => (
                                <tr key={d.id}>
                                    {
                                        dataInfo.map((item) => (
                                            <td key={item.field + '_' + item.field}>{d[item.field]}</td>
                                        ))
                                    }
                                    {
                                        (additionField) ? (
                                            <td>{additionField.elements(d.id)}</td>
                                        ) : null
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    (countPage === 0) ? (
                        <p className="text-center text-danger fw-bold">موردی وجود ندارد !!!</p>
                    ) : null
                }
            </div>

            {
                (pages.length > 1) ? (
                    <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                        <ul className="pagination dir_ltr">
                            <li className={`page-item  ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span className="page-link pointer" href="#" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                                    <span aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                        </svg>
                                    </span>
                                </span>
                            </li>
                            {
                                pages.map((page) => (
                                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}><span className="page-link pointer" onClick={() => setCurrentPage(page)}>{page}</span></li>
                                ))
                            }
                            <li className={`page-item ${currentPage === countPage ? 'disabled' : ''}`}>
                                <span className="page-link pointer" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                                    <span aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </nav>
                ) : null
            }

        </>
    );
};

export default PaginatedTable;