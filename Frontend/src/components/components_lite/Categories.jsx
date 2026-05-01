import React from 'react';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
const Category = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mern Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Artificial Intelligence Engineer",
    "Cybersecurity Engineer",
    "Product Manager",
    "UX/UI Designer",
    "Graphics Engineer",
    "Graphics Designer",
    "Video Editor",
];

const Categories = () => {
    return (
        <div>
            <div>
        <h1 className="text-2xl font-bold text-center text-blue-900">
          Categories
        </h1>
        <p className="text-center text-red-950">
          Explore our extensive job market.
        </p>
      </div>
            <Carousel className="relative w-full max-w-xl gap-1 mx-auto my-20">
                <CarouselContent  className="overflow-visible">
                    {
                        Category.map((category, index) => {
                            return (
                                <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3 ">
                                    <Button className="w-full text-center break-words bg-red-900 text-red-50 rounded-xl py-6 text-lg font-medium hover:bg-blue-900 hover:text-white hover:shadow-md transition duration-300">
                                        {category}
                                    </Button>
                                </CarouselItem>
                            );
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Categories;