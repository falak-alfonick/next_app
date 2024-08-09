import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main >
      <div style={{backgroundColor: "#EEDDCC"}}>
        <Header />
      </div>
      <div style={{backgroundColor: "#f0e4e4"}}>
        <Content />
      </div>
      <div style={{backgroundColor: "#34251F"}}>
        <Footer />
      </div>
    </main>
  );
}
