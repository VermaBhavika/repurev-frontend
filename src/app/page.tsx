import TextField from "@/components/shared/input";
import Heading from "@/components/shared/heading";
import Button from "@/components/shared/button";
import MyChart from "@/components/common/chart";
import CustomSlider from "@/components/common/custom-slider";
import ImageWithText from "@/components/common/image-with-text";
import data from '../static-data/static.json'

export default function Home() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      fill: false,
      label: 'Sales',
      data: [6, 59, 23, 100, 78, 99],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
    }],
  };
  const slides = [
    {
      "heading": "Build a perfect app that grows on you users",
      "p": "<ul><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li></ul>",
      "image": ""
    },
    {
      "heading": "Build a perfect app that grows on you users",
      "p": "<ul><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li><li>Speed up research using visual data insights</li></ul>",
      "image": ""
    }
  ]



  return (
    <main className="main">
     
    </main>
  );
}
