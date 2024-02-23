import LatestPost from "@/components/Blog/latestPost";
import Herosection from "@/components/Herosection/News-Herosection";

export default function BlogPage() {
    return (
        <section className="w-full min-h-screen space-y-8">
           <Herosection />
           <LatestPost />
        </section>
    )
}



