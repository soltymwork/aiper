import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { PoolChooser } from "@/components/PoolChooser";
import { WhyAiper } from "@/components/WhyAiper";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <PoolChooser />
      <WhyAiper />
      <Experience />
      <section className="reviewStrip">
        <div><span>★★★★★</span><b>4,8/5</b><small>+2 000 recenzií</small></div>
        <div><span>🚚</span><b>Doprava zdarma</b><small>nad 100 €</small></div>
        <div><span>📦</span><b>Rýchle dodanie</b><small>1–2 pracovné dni</small></div>
        <div><span>🎧</span><b>Slovenský servis</b><small>Sme tu pre vás</small></div>
      </section>
      <Footer />
    </main>
  );
}
