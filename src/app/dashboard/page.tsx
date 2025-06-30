"use client"
import Heading from "@/components/ui/heading";
import TextField from "@/components/ui/input";
import Paragraph from "@/components/ui/paragraph";
import styles from "../../styles/dashboard.module.scss";
import Button from "@/components/ui/button";
import data from "../../static-data/static.json"
import { useState } from "react";
import staticDetails from "../../static-data/companyData.json"
import Charts from "@/components/common/chart";
import Cards from "@/components/common/cards";

const Dashboard = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        company_domain: "",
        company_name: ""
    });
    const [showLoader, setShowLoader] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const [staticJson, setStaticJson] = useState({
        engagement: 0,
        awareness: 0,
        perception: 0,
        power_of_voice: 0,
        sentiments: 0,
        overall: 0
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const matchedCompany = staticDetails.company_data.find(company =>
            company.company_domain.toLowerCase() === formData.company_domain.trim().toLowerCase() &&
            company.company_name.toLowerCase() === formData.company_name.trim().toLowerCase()
        );

        if (matchedCompany) {
            setStaticJson(matchedCompany)
            setShowStats(true);
            setShowLoader(true);
        } else {
            console.log("Company is not registered with us");
        }
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    console.log(staticJson)
    const PieChart = {
        "labels": [
            "Overall Scrore"
        ],
        "datasets": [{
            "fill": false,
            "label": "Sales",
            "data": [staticJson?.overall, 100 - staticJson?.overall],
            "backgroundColor": [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            "borderColor": [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
            ],
            "borderWidth": 1
        }]
    }
    const Benchmark = {
        "labels": [
            "Benchmark", "Overall Scrore"
        ],
        "datasets": [{
            "fill": false,
            "label": "Sales",
            "data": [90, staticJson?.overall],
            "backgroundColor": [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            "borderColor": [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
            ],
            "borderWidth": 1
        }]
    }
    return (
        <div className={styles.dashboardLayout}>

            {showStats == false ?
                <div className="innerContainer">
                    <div className={styles.companyForm}>
                        <Heading tagName="h3" headingText="Enter Company Details" />
                        <Paragraph paraText="Input to get latest reputation-related scores" />
                        <form onSubmit={handleSubmit}>
                            <TextField type="url" placeholderText="Company Domain Url" onChange={handleInputChange} name="company_domain" />
                            <TextField type="text" placeholderText="Company Name" onChange={handleInputChange} name="company_name" />
                            <Button data={data?.submit_button} />
                        </form>
                    </div>
                </div> :
                Object.keys(staticJson)?.length > 0 &&
                <>
                    <Heading tagName="h4" headingText="Your Overall Brand Score" />
                    <Charts type="pie"
                        data={PieChart}
                        width={300}
                        height={300} />
                    <Charts type="bar"
                        data={Benchmark}
                        width={300}
                        height={300} />
                    <Heading tagName="h4" headingText="Score Breakdown" />
                    <Cards data={{
                        heading: "Awareness Score", 
                        text: `Your awareness score is ${staticJson?.awareness} out of 20.`,
                        chartData: staticJson?.awareness,
                    }} />
                    <Cards data={{
                        heading: "Power of Voice", 
                        text: `Your power of voice score is ${staticJson?.power_of_voice} out of 20.`,
                        chartData: staticJson?.power_of_voice,
                    }} />
                    <Cards data={{
                        heading: "Engagements", 
                        text: `Your engagements score is ${staticJson?.engagement} out of 20.`,
                        chartData: staticJson?.engagement,
                    }} />
                    <Cards data={{
                        heading: "Perception", 
                        text: `Your perception score is ${staticJson?.perception} out of 20.`,
                        chartData: staticJson?.perception,
                    }} />
                    <Cards data={{
                        heading: "Sentiments", 
                        text: `Your sentiments score is ${staticJson?.sentiments} out of 20.`,
                        chartData: staticJson?.sentiments,
                    }} />

                </>
            }

        </div>
    )
}
export default Dashboard;