import CallToAction from "@/components/CTA/CTA";
import Commitment from "@/components/Commitment/Commitment";
import Footer from "@/components/Footer/Footer";
import Herosection from "@/components/Herosection/Herosection";
import HomeArticle from "@/components/HomeArticle/HomeArticle";
import Product from "@/components/Product/Product";
import Testimonials from "@/components/Testimonial/Testmonial";


export default function Home() {
  return (
     <main className="w-full">
         <Herosection />
         <HomeArticle />
         <Commitment />
         <Product />
         <Testimonials/>
         <CallToAction />
         <Footer />
     </main>
  );
}
