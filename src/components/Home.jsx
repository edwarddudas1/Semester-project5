import Header from "./header";
import Footer from "./Footer";
import Nature from "./Nature";
import LineChart from "./LineChart";
import Weather from "./Weather";
import News from "./News";

export default function Home() {
  return (
 
    <>
      <Header />
      <Weather />
      <LineChart />
      <News />
      <Nature />
      <Footer />
    </>
  );
}
