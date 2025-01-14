"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"; // Ensure correct import of your Sanity client

type Employee = {
  _id: string;
  name: string;
  position: string;
  photoUrl: string;
};

export const EmployeeSlider = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const query = groq`*[_type == "employee"]{
          _id,
          name,
          position,
          "photoUrl": photo.asset->url
        }`;
        const data: Employee[] = await client.fetch(query); // Use .fetch() method here
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-xl font-semibold text-gray-600">Loading team...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 py-8">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          {employees.map((employee) => (
            <SwiperSlide key={employee._id}>
              <div className="bg-neutral-800 rounded p-6">
                <div className="flex justify-center">
                  <Image
                    src={employee.photoUrl}
                    alt={employee.name}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">{employee.name}</h3>
                  <p className="text-gray-400">{employee.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
