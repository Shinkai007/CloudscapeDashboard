import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import {Link} from "@cloudscape-design/components";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import MixedLineBarChart from "./MixedLineBarChart";
import PieChart from "./PieChart";

export default (props) => {
    return (
        <Cards
            data-card={props['data-card']}
            cardDefinition={{
                sections: [
                    {
                        id: "chart",
                        header: "Chart",
                        content: item => (
                            <div style={{ height: '250px', width: '100%', overflow:'auto' }}>
                                    {item.chart}
                            </div>
                        )
                    },
                    {
                        id: "name",
                        content: item => (
                            <Link fontSize="heading-m">{item.name}</Link>
                        )
                    },
                    {
                        id: "description",
                        header: "Type",
                        content: item => item.description
                    }

                ]
            }}
            cardsPerRow={[
                { cards: 1 },
                { minWidth: 500, cards: 3 }
            ]}
            items={[
                {
                    name: "Bar Chart",
                    description: "This is the Bar Chart",
                    chart: <BarChart />
                },
                {
                    name: "Line Chart",
                    description: "This is the Line Chart",
                    chart: <LineChart />
                },
                {
                    name: "Area Chart",
                    description: "This is the Area Chart",
                    chart: <AreaChart />
                },
                {
                    name: "Mixed Line Bar Chart",
                    description: "This is the Mixed Line Bar Chart",
                    chart: <MixedLineBarChart />
                },
                {
                    name: "Pie Chart",
                    description: "This is the Pie Chart",
                    chart: <PieChart />
                }
            ]}
            empty={
                <Box textAlign="center" color="inherit">
                    <b>No resources</b>
                    <Box
                        padding={{ bottom: "s" }}
                        variant="p"
                        color="inherit"
                    >
                        No resources to display.
                    </Box>
                    <Button>Create resource</Button>
                </Box>
            }
            header={<Header>Charts</Header>}
        />
    );
}
