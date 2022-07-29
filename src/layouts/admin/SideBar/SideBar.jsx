import { useContext } from "react";
import { AdminContext } from "../../../Context/adminLayoutContext";
import Avatar from "./Avatar";
import SideBarGroupTitle from './SideBarGroupTitle';
import SideBarItem from './SideBarItem';

const SideBar = () => {
    const { showSideBar } = useContext(AdminContext);
    return (
        <>
            {/* <!-- #region(collapsed) sidebar start --> */}
            <section id="sidebar_section">
                <div className={`mini_sidebar collapsedd bg-dark h-100 overflow_y_auto overflow_x_hidden ${showSideBar ? 'expanded' : ''}`}>
                    <div className="p-0 m-0">
                        <Avatar
                            name="محمد نادری"
                            imagePath="/assets/images/avatar/user.png"
                        />
                        
                        <SideBarItem
                            title="داشبورد"
                            icon="fas fa-tachometer-alt"
                            isActive
                        />
                        {/* <!-- =================================== --> */}
                        <SideBarGroupTitle title="فروشگاه" />
                        
                        <SideBarItem
                            title="مدیریت گروه محصول"
                            icon="fas fa-stream"
                        />
                        <SideBarItem
                            title="مدیریت محصول"
                            icon="fas fa-cube"
                        />
                        <SideBarItem
                            title="مدیریت برند ها"
                            icon="fas fa-copyright"
                        />
                        <SideBarItem
                            title="مدیریت گارانتی ها"
                            icon="fab fa-pagelines"
                        />
                        <SideBarItem
                            title="مدیریت رنگ ها"
                            icon="fas fa-palette"
                        />
                        <SideBarItem
                            title="مدیریت تخفیف ها"
                            icon="fas fa-percentage"
                        />
                        {/* <!-- =================================== --> */}
                        <SideBarGroupTitle title="سفارشات و سبد" />
                        <SideBarItem
                            title="مدیریت سبد ها"
                            icon="fas fa-shopping-basket"
                        />
                        <SideBarItem
                            title="مدیریت سفارشات"
                            icon="fas fa-luggage-cart"
                        />
                        <SideBarItem
                            title="مدیریت نحوه ارسال"
                            icon="fas fa-truck-loading"
                        />
                        {/* <!-- =================================== --> */}
                        <SideBarGroupTitle title="کاربران و همکاران" />
                        <SideBarItem
                            title="مشاهده کاربران"
                            icon="fas fa-users"
                        />
                        <SideBarItem
                            title="نقش ها"
                            icon="fas fa-user-tag"
                        />
                        <SideBarItem
                            title="مجوز ها"
                            icon="fas fa-shield-alt"
                        />
                        {/* <!-- =================================== --> */}
                        <SideBarGroupTitle title="ارتباطات" />
                        <SideBarItem
                            title="سوال ها"
                            icon="fas fa-question-circle"
                        />
                        <SideBarItem
                            title="نظرات"
                            icon="fas fa-comment"
                        />
                        {/* <!-- <li className="py-2 btn-group dropstart pe-4">
                            <i className="ms-3 icon fas fa-check text-light" />
                            <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                            
                            <ul className="dropdown-menu px-2 sidebar_submenu_list">
                            <li className="d-none">اول</li>
                            <li>اول</li>
                            <li>دوم</li>
                            <li>سوم</li>
                            </ul>
                        </li> --> */}
                    </div>
                </div>
            </section>
            {/* <!-- #endregion --> */}  
        </>
    );
}

export default SideBar;
