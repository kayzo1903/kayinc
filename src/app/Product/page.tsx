import Herosection from "@/components/Herosection/ProductHerosection";
import ProductGalery from "@/components/Product/ProductGallery";

export default function ProductPage() {
    return (
        <section className="w-full min-h-screen">
           <Herosection />
           <ProductGalery />
        </section>
    )
}