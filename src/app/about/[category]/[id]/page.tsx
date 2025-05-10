"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github, Heart } from 'lucide-react';
import { projectData } from "../../../components/projectData";

// Project data structure
interface ProjectImage {
  id: string;
  src: any; // StaticImageData
  alt: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  images: ProjectImage[];
  rtl: boolean;
  url: string;
}



export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [category, setCategory] = useState<ProjectCategory | null>(null);

  useEffect(() => {
    if (params.category && typeof params.category === 'string') {
      const categoryData = projectData[params.category];
      if (categoryData) {
        setCategory(categoryData);

        if (params.id && typeof params.id === 'string') {
          setSelectedImageId(params.id as string);
        } else if (categoryData.images.length > 0) {
          setSelectedImageId(categoryData.images[0].id);
        }
      }
    }
  }, [params]);

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>جاري تحميل تفاصيل المشروع...</p>
      </div>
    );
  }

  const selectedImage = category.images.find(img => img.id === selectedImageId) || category.images[0];
  const otherImages = category.images.filter(img => img.id !== selectedImageId);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8" dir={category.rtl ? "rtl" : "ltr"}>
      {/* Back button without shadcn Button */}
      <button 
        onClick={() => router.back()} 
        className="flex items-center mb-6 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ArrowLeft className="ml-2 h-4 w-4" /> العودة إلى الجدول الزمني
      </button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6">{category.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">المميزات</h2>
            <ul className="space-y-2">
              {category.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">التقنيات المستخدمة</h2>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            {/* Custom buttons instead of shadcn Button */}
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Github className="ml-2 h-4 w-4" /> عرض الكود المصدري
            </button>
            <a 
              href={category.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="ml-2 h-4 w-4" /> عرض المشروع
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <h3 className="text-lg font-medium">صور أخرى</h3>
          <div className="grid grid-cols-3 gap-4">
            {otherImages.map((image) => (
              <Link 
                key={image.id} 
                href={`/about/${category.id}/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover aspect-video w-full border border-gray-200 dark:border-gray-800"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom separator instead of shadcn Separator */}
      <div className="h-px bg-gray-200 dark:bg-gray-800 my-12"></div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">مشاريع ذات صلة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(projectData)
            .filter(proj => proj.id !== category.id)
            .flatMap(proj => proj.images.slice(0, 1))
            .slice(0, 4)
            .map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {Object.values(projectData).filter(proj => proj.id !== category.id)[index % Object.values(projectData).length].title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

