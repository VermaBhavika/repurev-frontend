"use client";
import Heading from "@/components/ui/heading";
import TextField from "@/components/ui/input";
import Paragraph from "@/components/ui/paragraph";
import styles from "../../styles/dashboard.module.scss";
import Button from "@/components/ui/button";
import data from "../../static-data/static.json";
import { useEffect, useState } from "react";
import staticDetails from "../../static-data/companyData.json";
import Charts from "@/components/common/chart";
import Cards from "@/components/common/cards";
import CustomSlider from "@/components/layout/custom-slider";
import Header from "@/components/layout/header";

const Dashboard = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        company_domain: "",
        company_name: ""
    });

    const [showLoader, setShowLoader] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const [comparisonCompany, setComparisonCompany] = useState<string>("");

    const [staticJson, setStaticJson] = useState({
        engagement: 0,
        awareness: 0,
        perception: 0,
        power_of_voice: 0,
        sentiments: 0,
        overall: 0,
        historical: [0, 0, 0, 0]
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const matchedCompany = staticDetails.company_data.find(company =>
            company.company_domain.toLowerCase() === formData.company_domain.trim().toLowerCase() &&
            company.company_name.toLowerCase() === formData.company_name.trim().toLowerCase()
        );

        if (matchedCompany) {
            setStaticJson(matchedCompany);
            setShowStats(true);
            setShowLoader(true);
        } else {
            console.log("Company is not registered with us");
        }
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (showLoader) {
            const timeout = setTimeout(() => {
                setShowLoader(false);
            },10000); 
            return () => clearTimeout(timeout);
        }
    }, [showLoader]);

    const selectedComparisonData = staticDetails.company_data.find(
        (company) =>
            company.company_name.toLowerCase() === comparisonCompany.toLowerCase()
    );

    const PieChart = {
        labels: ["Overall Score", "Remaining"],
        datasets: [{
            data: [staticJson?.overall, 100 - staticJson?.overall],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)"],
            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
            borderWidth: 1
        }]
    };

    const Benchmark = {
        labels: ["Benchmark", "Overall Score"],
        datasets: [{
            data: [90, staticJson?.overall],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)"],
            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
            borderWidth: 1
        }]
    };

    const Historical = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{
            data: staticJson?.historical,
            backgroundColor: ["#FF6384"],
            borderColor: ["#FF6384"],
            borderWidth: 1
        }]
    };

    return (
        <div className={styles.dashboardLayout}>
             <Header/>
            {!showStats ? (
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
                </div>
            ) : showLoader ? (
                <div className="loader">
                    <Heading tagName="h3" headingText="Generating Your Report . . ." />
                    <CustomSlider slidesData={data?.slider} />
                </div>
            ) : (
                <div className="container">
                    <div className="brand-score">
                        <Heading tagName="h4" headingText="Your Overall Brand Score" />
                        <div className="chart-container">
                            <div className="chart-item">
                                <Charts type="doughnut" data={PieChart} width={400} height={400} />
                            </div>

                            <div className="chart-item">
                                <Charts type="bar" data={Benchmark} width={400} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className="score-breakdown">
                        <div className="main-heading">
                            <Heading tagName="h4" headingText="Score Breakdown" />
                        </div>

                        <div className="comparison-dropdown">
                            <label htmlFor="company-select" >
                                Compare with:
                            </label>
                            <select
                                id="company-select"
                                value={comparisonCompany}
                                onChange={(e) => setComparisonCompany(e.target.value)}
                                style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                            >
                                <option value="" disabled>Select a company</option>
                                {staticDetails.company_data
                                    .filter(company =>
                                        company.company_name.toLowerCase() !== formData.company_name.trim().toLowerCase()
                                    )
                                    .map((company, index) => (
                                        <option key={index} value={company.company_name}>
                                            {company.company_name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className={`comparison-cards-wrapper ${selectedComparisonData ? 'compare-cards' : ''}`}>
                            <div className={`card-container grid ${selectedComparisonData ? 'grid-1' : 'grid-3'}`} style={{ flex: 1 }}>
                                <Cards data={{ heading: "Awareness Score", text: `Your awareness score is ${staticJson.awareness} out of 20.`, chartData: staticJson.awareness }} />
                                <Cards data={{ heading: "Power of Voice", text: `Your power of voice score is ${staticJson.power_of_voice} out of 20.`, chartData: staticJson.power_of_voice }} />
                                <Cards data={{ heading: "Engagements", text: `Your engagements score is ${staticJson.engagement} out of 20.`, chartData: staticJson.engagement }} />
                                <Cards data={{ heading: "Perception", text: `Your perception score is ${staticJson.perception} out of 20.`, chartData: staticJson.perception }} />
                                <Cards data={{ heading: "Sentiments", text: `Your sentiments score is ${staticJson.sentiments} out of 20.`, chartData: staticJson.sentiments }} />
                            </div>
                            <div className="vertical-line"></div>
                            {selectedComparisonData && (
                                <div className="comparison-card-container grid grid-1" style={{ flex: 1 }}>
                                    <Cards data={{ heading: `Awareness - ${selectedComparisonData.company_name}`, text: `Score: ${selectedComparisonData.awareness} / 20`, chartData: selectedComparisonData.awareness }} />
                                    <Cards data={{ heading: "Power of Voice", text: `Score: ${selectedComparisonData.power_of_voice} / 20`, chartData: selectedComparisonData.power_of_voice }} />
                                    <Cards data={{ heading: "Engagements", text: `Score: ${selectedComparisonData.engagement} / 20`, chartData: selectedComparisonData.engagement }} />
                                    <Cards data={{ heading: "Perception", text: `Score: ${selectedComparisonData.perception} / 20`, chartData: selectedComparisonData.perception }} />
                                    <Cards data={{ heading: "Sentiments", text: `Score: ${selectedComparisonData.sentiments} / 20`, chartData: selectedComparisonData.sentiments }} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="line-chart">
                        <div className="main-heading">
                            <Heading tagName="h4" headingText="Historical Trends" />
                        </div>
                        <div className="line-chart-container">
                            <Charts type="line"
                                data={Historical}
                                width={1000}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
