import { useContext } from 'react';
import { AdminContext } from '../Context/adminLayoutContext';
import Category from './Category/Category';
import Dashboard from './Dashboard/Dashboard';
import Product from './Product/Product';

const Content = () => {
    const { showSideBar } = useContext(AdminContext);

    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSideBar ? 'with_sidebar' : ''}`}>
            {/* <Dashboard /> */}
            {/* <Category /> */}
            <Product />
        </section>
    );
}

export default Content;
