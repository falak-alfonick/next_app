import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div style={{backgroundColor: "#EEDDCC"}}>
        <Header />
      </div>
      <div style={{backgroundColor: "#faf5f5"}}>
        <Content />
      </div>
      <div style={{backgroundColor: "#34251F"}}>
        <Footer />
      </div>
    </main>
  );
}
