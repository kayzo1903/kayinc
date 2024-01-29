import { AccordionDemo } from "@/components/Accordion/Accordion";
import OurAddress from "@/components/Contacts-Adress/Contacts-address";
import EnguiryForm from "@/components/Contacts-Adress/EnguiryForm";
import Herosection from "@/components/Herosection/contacts-Herosection";
import { Accordion } from "@/components/ui/accordion";

export default function ContactPage() {
    return (
        <section className="w-full min-h-screen">
           <Herosection />
           <OurAddress />
           <EnguiryForm />
           <AccordionDemo />
        </section>
    )
}