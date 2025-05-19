"use client"
import Button from "@/components/shared/button";
import Heading from "@/components/shared/heading";
import TextField from "@/components/shared/input";
import Paragraph from "@/components/shared/paragraph";

const Dashboard = () =>{
    const handleSubmit = () => {

    }
    return(
        <div className="dashboard-layout">
            <Heading tagName="h1" headingText="Enter Company Details"/>
            <Paragraph paraText="Input to get latest reputation-related scores"/>
            <form onSubmit={handleSubmit}>
                <TextField type="url" placeholderText="Company Domain Url"/>
                <TextField type="text" placeholderText="Company Name"/>
                <Button buttonText="Analyse"/>
            </form>
        </div>
    )
}
export default Dashboard;