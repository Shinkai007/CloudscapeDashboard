import {AppLayout, BreadcrumbGroup, Container, Header} from "@cloudscape-design/components";
import React, {useState} from 'react';
import SideNavigation from "./components/SideNavigation";
// import * as awsui from '@cloudscape-design/design-tokens';
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import MixedLineBarChart from "./components/MixedLineBarChart"
import PieChart from "./components/PieChart";
export default function App() {

    return (
        <AppLayout
            toolsHide={true}
            breadcrumbs={<BreadcrumbGroup
                items={[
                    {text: "System", href: "#"},
                    {text: "Components", href: "#components"},
                    {text: "Breadcrumb group", href: "#components/breadcrumb-group"}
                ]}
                ariaLabel="Breadcrumbs"/>}
            contentHeader={<Header variant="h1">Hello From page 1</Header>}
            navigation={<SideNavigation/>}
            // content={<BarChart/>}
            // content={<LineChart/>}
            // content={<AreaChart/>}
            // content={<MixedLineBarChart/>}
            content={<PieChart/>}
            // splitPanel={<MixedLineBarChart/>}
        >
        </AppLayout>
    );
}
