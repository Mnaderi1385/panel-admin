const LeftContent = () => {
    return (
        <div className="left_content d-flex flex-row-reverse">
            <i className="fas fa-grip-vertical fa-2x me-3 pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu mini_menu" aria-labelledby="dropdownMenuButton1">
                <li className="my-2 dropdown-item">
                    <a className="d-block text-center w-100 text-dark fw-bold">
                        <i className="fas fa-user ms-2"></i>
                        <span>قاسم بساکی</span>
                    </a>
                </li>
                <li className="my-2 dropdown-item d-flex justify-content-center align-items-center px-2">
                    <a className="w-100 text-center mx-auto text-dark" href="#">
                        <i className="fas ms-2 fa-tachometer-alt" />
                        <span>داشبورد</span>
                    </a>
                </li>
                <li className="dropdown-item my-2 d-flex justify-content-center align-items-center px-2">
                    <a className="text-center w-100 mx-auto text-dark" href="#">
                        <i className="fas ms-2 fa-paper-plane" />
                        <span>تیکت ها</span>
                    </a>
                </li>
                <li className="my-2 w-100 dropdown-item d-flex justify-content-center align-items-center px-2">
                    <a className="mx-auto text-center w-100 text-dark" href="#">
                        <i className="fas ms-2 fa-envelope" />
                        <span>پیام ها</span>
                    </a>
                </li>
                <hr/>
                <li className="d-flex dropdown-item justify-content-center align-items-center px-2">
                    <a className="mx-auto text-center w-100 text-dark" href="#">
                        <i className="fas ms-2 fa-power-off" />
                        <span>خروج</span>
                    </a>
                </li>
            </ul>
            <i className="far fa-bell fa-2x mx-3 pointer position-relative">
                <span className="alarm_count">4</span>
            </i>
            <i className="fas fa-search fa-2x mx-3 pointer" />
        </div>
    );
}

export default LeftContent;
