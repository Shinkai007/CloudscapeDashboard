import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout, BreadcrumbGroup, Header } from "@cloudscape-design/components";
import SideNavigation from "./components/SideNavigation";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import MixedLineBarChart from "./components/MixedLineBarChart";
import PieChart from "./components/PieChart";
import CardViews from "./components/CardViews";
import styles from './index.css'
export default function App() {
    return (
        <Router>
            <AppLayout
                toolsHide={true}
                breadcrumbs={<BreadcrumbGroup
                    items={[
                        { text: "System", href: "#" },
                        { text: "Components", href: "#components" },
                        { text: "Breadcrumb group", href: "#components/breadcrumb-group" }
                    ]}
                    ariaLabel="Breadcrumbs" />}
                contentHeader={<Header variant="h1">Hello From page 1</Header>}
                navigation={<SideNavigation />}
                content={
                    <CardViews data-card></CardViews>
                    // <Routes>
                    //     <Route path="bar-chart" element={<BarChart />} />
                    //     <Route path="line-chart" element={<LineChart />} />
                    //     <Route path="area-chart" element={<AreaChart />} />
                    //     <Route path="mixed-line-bar-chart" element={<MixedLineBarChart />} />
                    //     <Route path="pie-chart" element={<PieChart />} />
                    // </Routes>
                }
            />
        </Router>
    );
}
