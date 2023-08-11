import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { useNavigate } from 'react-router-dom';

export default () => {
    const [activeHref, setActiveHref] = React.useState(
        "/bar-chart"
    );
    const navigate = useNavigate();

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ href: "#/", text: "Service name" }}
            onFollow={event => {
                if (!event.detail.external) {
                    event.preventDefault();
                    navigate(event.detail.href);
                    setActiveHref(event.detail.href);
                }
            }}
            items={[
                { type: "link", text: "Bar Chart", href: "/bar-chart" },
                { type: "link", text: "Line Chart", href: "/line-chart" },
                { type: "link", text: "Area Chart", href: "/area-chart" },
                { type: "link", text: "Mixed Line Bar Chart", href: "/mixed-line-bar-chart" },
                { type: "link", text: "Pie Chart", href: "/pie-chart" },
            ]}
        />
    );
}


