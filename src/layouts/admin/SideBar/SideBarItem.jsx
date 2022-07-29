const SideBarItem = ({ title, icon, isActive }) => {
    return (
        <a href="#" className={`py-1 text-start pe-4 sidebar_menu_item ${isActive ? 'active' : ''}`}>
            <i className={`${icon} ms-3 icon text-light`} />
            <span className="hiddenable no_wrap font_08">{ title }</span>
        </a>
    );
}

export default SideBarItem;
