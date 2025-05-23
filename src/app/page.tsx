import Heading from "@/components/shared/heading";
import Button from "@/components/shared/button";
import data from '../static-data/static.json'

export default function Home() {
  return (
    <main className="main">
     <Heading tagName="h2" headingText="Style Guide"/>
     <Button data={data?.style_guide}/>
    </main>
  );
}
