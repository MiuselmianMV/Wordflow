// src/components/TeacherCarousel.jsx
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const teachers = [
    { name: 'John Doe', subject: 'English', avatar: '/default-avatar-m.png' },
    { name: 'Jane Smith', subject: 'English', avatar: '/default-avatar-m.png' },
    { name: 'Alice Johnson', subject: 'English', avatar: '/default-avatar-m.png' },
    { name: 'Mark Wilson', subject: 'English', avatar: '/default-avatar-m.png' },
    { name: 'Emily Davis', subject: 'English', avatar: '/default-avatar-m.png' },
];

const TeacherCarousel = () => {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const scrollWidth = carouselRef.current?.scrollWidth || 0;
        const offsetWidth = carouselRef.current?.offsetWidth || 0;
        setWidth(scrollWidth - offsetWidth);
    }, []);

    return (
        <section className="w-full py-10 px-4">
            <motion.div
                ref={carouselRef}
                className="overflow-hidden w-full"
            >
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                >
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[250px] bg-gray-100 rounded-lg shadow-md p-4 flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={teacher.avatar}
                                alt={teacher.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">{teacher.name}</h3>
                            <p className="text-gray-500 text-center">{teacher.subject}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TeacherCarousel;
