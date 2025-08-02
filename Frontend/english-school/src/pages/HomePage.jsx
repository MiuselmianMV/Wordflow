// pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionBlock from '../components/SectionBlock';
import TeacherCarousel from '../components/TeacherCarousel';
//import CoursesCarousel from '../components/CoursesCarousel';

function HomePage() {
    return (
        <div className="font-sans">

            {/* Navbar */}


            {/* Hero-секция */}
            <SectionBlock
                background={`url("/archit-bg-green.png")`}
                textColor="text-white"
                title="Learn English with Experts"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
                <Link
                    to="/register"
                    className="inline-block bg-white text-black px-6 py-2 mt-4 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    Начать сейчас
                </Link>
            </SectionBlock>

            {/* Блок текста */}
            <SectionBlock
                background="white"
                textColor="text-black"
                title="Practice Speaking with Native Teachers"
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            {/* Ещё один фоновый блок */}
            <SectionBlock
                background={`url("/blurry-bg.png")`}
                textColor="text-white"
                title="Your Path to Fluency Starts Here"
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />

            {/* Карусель преподавателей */}
            <SectionBlock
                background="white"
                textColor="text-black"
                title="Наши преподаватели"
                description="Опытные, сертифицированные и вдохновляющие"
            >
                <TeacherCarousel />
            </SectionBlock>

            {/* Карусель курсов / отзывов
            <SectionBlock
                background="white"
                textColor="text-black"
                title="Наши курсы"
                description="Выберите направление, которое подходит именно вам"
            >
                <CoursesCarousel />
            </SectionBlock> */}


        </div>
    );
}

export default HomePage;
