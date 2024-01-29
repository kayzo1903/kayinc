import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <div className="px-4 w-full mx-auto py-16 max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-relaxed">FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How long it took to recives products</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas
                        natus voluptatibus quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Are your company only deals with crops</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas natus voluptatibus
                        quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Are you own big scale farms</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas
                        natus voluptatibus
                        quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Are you own big scale farms</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas
                        natus voluptatibus
                        quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur?
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
