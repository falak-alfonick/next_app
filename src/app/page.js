import Content from "@/components/Content";
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
    </main>
  );
}
