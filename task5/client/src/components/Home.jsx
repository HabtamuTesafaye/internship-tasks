import React from 'react';
import Section from '../components/sections/Section';
import IntroSection from '../components/sections/IntroSection';
import CourseCategories from '../components/sections/CourseCategories';
import PopularCourses from '../components/sections/PopularCourses';
import Statistics from '../components/sections/Statistics';

const Home = () => {
  return (
    <>
      <Section>
        < IntroSection />
      </Section>
      <Section>
        <CourseCategories />
      </Section>
      <Section>
        <PopularCourses />
      </Section>
      <Section>
       < Statistics />
      </Section>
    </>
  );
};

export default Home;
