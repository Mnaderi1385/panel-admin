import { useEffect } from 'react';
import { dashboardChart, destroy } from '../../utils/dashboardChart';
import Card from './Card';
import ProductTable from './ProductTable';


const Dashboard = () => {
    useEffect(() => {
        const labels = ['فروردین' , 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند'];
        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

        dashboardChart(labels, datapoints);

        return () => {
            destroy();
        };
    }, []);

    return (
        <div id="dashboard_section" className="dashboard_section main_section">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                    <Card
                        currentValue={7}
                        title="سبد خرید امروز"
                        desc="سبد های خرید مانده امروز"
                        icon="fas fa-shopping-basket"
                        lastWeekValue={13}
                        lastMonthValue={18}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                    <Card
                       currentValue={5}
                       title="سفارشات مانده امروز"
                       desc="سفارشات معلق و فاقد پرداختی"
                       icon="fas fa-dolly"
                       lastWeekValue={9}
                       lastMonthValue={16} 
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                    <Card
                        currentValue={45}
                        title="سفارشات امروز"
                        desc="سفارشات کامل و دارای پرداختی"
                        icon="fas fa-luggage-cart"
                        lastWeekValue={263}
                        lastMonthValue={1038}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                    <Card
                        currentValue={1500000}
                        title="درآمد امروز"
                        desc="جمع مبالغ پرداختی (تومان)"
                        icon="fas fa-money-check-alt"
                        lastWeekValue={6380000}
                        lastMonthValue={22480000}
                    />
                </div>  

            </div>

            <div className="row">

                <div className="col-12 col-lg-6">

                    <h4 className="text-center mt-3 text-dark fs-6 fw-bold">محصولات رو به اتمام</h4>

                    <ProductTable />
                </div>

                
                <div className="col-12 col-lg-6">
                    <canvas id="myChart" height={200}></canvas>
                </div>

            </div>
        </div>
    );
};
export default Dashboard;