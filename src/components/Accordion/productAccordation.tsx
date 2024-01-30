import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ProductAccordation = () => {
    return (
        <div className='max-w-md mx-auto py-8 px-4'>
            <div className='w-full text-center'>
                <h6 className='text-xl font-semibold leading-relaxed'>Product Information</h6>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Description</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas
                        natus voluptatibus quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Return and Refund Policy</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas natus voluptatibus
                        quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Shipping Information</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa
                        dignissimos excepturi voluptate vitae consequatur dolorem qui sed, voluptas
                        natus voluptatibus
                        quia eveniet enim voluptates aspernatur voluptatum soluta nam consectetur
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProductAccordation