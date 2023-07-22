'use client';
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GallerProps {
    images: ImageType[];
}
const Gallery: React.FC<GallerProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6 ">
                    {images.map((image, index) => {
                        return <GalleryTab key={index} image={image} />;
                    })}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square  w-full"> 
                    {
                        images.map((image, index)=>(
                            <Tab.Panel key={index}>
                                    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
                                        <Image fill src={image.url} alt="Image" className="object-cover object-center" />
                                    </div>
                            </Tab.Panel>
                        ))
                    }
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;