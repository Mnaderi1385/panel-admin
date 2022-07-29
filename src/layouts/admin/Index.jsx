import AdminContextContainer from '../../Context/adminLayoutContext';
import Content from '../../pages/Content';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

const Index = () => {

    return (
        <AdminContextContainer>
            <Content />
            <NavBar />
            <SideBar />
        </AdminContextContainer>
    );
}

export default Index;