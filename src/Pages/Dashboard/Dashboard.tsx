import React from 'react';
import HeroSectionStyle from './HeroSectionStyle';
import { house1, house2, house3, logo1, temp } from '../../assets';
import AboutUsSectionOne from './AboutUsSection';
import AboutUsSectionTwo from './AboutUsSectionTwo';
import Feature from './Services';
import ApartmentPlan from './ApartmentPlan';

// Sample data for Hero Section
const heroData = [
  {
    subtitle: 'Welcome Home',
    Title: 'Find Your Dream Home',
    Desc: 'Discover the best homes available today, with beautiful views and comfortable living spaces.',
    buttonText: 'Explore Now',
    learnMoreButtonText: 'Learn More',
    videoButton: true,
    heroimage: logo1,
    variationLeft: false,
  },
  {
    subtitle: 'Luxury Living',
    Title: 'Live in Luxury',
    Desc: 'Experience the epitome of luxury living in our exclusive properties.',
    buttonText: 'Get Started',
    learnMoreButtonText: 'Learn More',
    videoButton: false,
    heroimage: logo1,
    variationLeft: true,
  },
  {
    subtitle: 'Modern Design',
    Title: 'Modern Living Spaces',
    Desc: 'Discover the best modern living spaces with the latest designs and amenities.',
    buttonText: 'Explore Now',
    learnMoreButtonText: 'Learn More',
    videoButton: false,
    heroimage: logo1,
    variationLeft: false,
  }
];

// Sample data for Features Section
const featureData = [
  {
    title: 'Personalized Services',
    shortDescription: 'We offer tailored services to meet your individual needs.',
    icon: 'build',
    img: house1,
    buttonText: 'Learn More',
    active: true,
  },
  {
    title: 'Quality Homes',
    shortDescription: 'Our homes are built with the highest quality materials.',
    icon: 'home',
    img: house2,
    buttonText: 'Explore Homes',
    active: false,
  },
  {
    title: 'Experienced Agents',
    shortDescription: 'Our agents have years of experience in the real estate market.',
    icon: 'people',
    img: house3,
    buttonText: 'Meet Our Team',
    active: false,
  }
];

// Sample data for Title Section (Features)
const titleSectionData = {
  sectionClasses: 'custom-section-class',
  headingClasses: 'custom-heading-class',
  title: 'Our Services',
  subtitle: 'Explore the services we offer',
};


const apartmentsPlanData = {
  "first": {
    "title": "The Studio",
    "description": "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    "imageUrl": "/img/others/10.png",
    "details": [
      { "label": "Living Area", "value": "2800 Sq. Ft" },
      { "label": "Master Bedroom", "value": "160 Sq. Ft" },
      { "label": "Ensuite Bathroom", "value": "50 Sq. Ft" },
      { "label": "Balcony Space", "value": "75 Sq.Ft" },
      { "label": "Dining Area", "value": "700 Sq. Ft" }
    ]
  },
  "second": {
    "title": "Deluxe Portion",
    "description": "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    "imageUrl": "/img/others/10.png",
    "details": [
      { "label": "Total Space", "value": "3000 Sq. Ft" },
      { "label": "Guest Bedroom", "value": "140 Sq. Ft" },
      { "label": "Bath with Tub", "value": "60 Sq. Ft" },
      { "label": "Outdoor Terrace", "value": "85 Sq.Ft" },
      { "label": "Open Kitchen", "value": "800 Sq. Ft" }
    ]
  },
  "third": {
    "title": "Penthouse",
    "description": "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    "imageUrl": "/img/others/10.png",
    "details": [
      { "label": "Overall Area", "value": "3500 Sq. Ft" },
      { "label": "King Suite", "value": "180 Sq. Ft" },
      { "label": "Luxury Bathroom", "value": "70 Sq. Ft" },
      { "label": "Private Balcony", "value": "100 Sq.Ft" },
      { "label": "Entertainment Lounge", "value": "900 Sq. Ft" }
    ]
  },
  "fourth": {
    "title": "Top Garden",
    "description": "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    "imageUrl": "/img/others/10.png",
    "details": [
      { "label": "Garden Area", "value": "4000 Sq. Ft" },
      { "label": "Herb Garden", "value": "120 Sq. Ft" },
      { "label": "Jacuzzi Bath", "value": "80 Sq. Ft" },
      { "label": "Sky Deck", "value": "150 Sq.Ft" },
      { "label": "BBQ Area", "value": "950 Sq. Ft" }
    ]
  },
  "five": {
    "title": "Double Height",
    "description": "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    "imageUrl": "/img/others/10.png",
    "details": [
      { "label": "Duplex Area", "value": "3200 Sq. Ft" },
      { "label": "Gallery Space", "value": "200 Sq. Ft" },
      { "label": "Spa Bathroom", "value": "90 Sq. Ft" },
      { "label": "Rooftop Terrace", "value": "110 Sq.Ft" },
      { "label": "Double Height Living Room", "value": "1000 Sq. Ft" }
    ]
  }
};

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSectionStyle data={heroData} />

      {/* About Us Sections */}
      <AboutUsSectionOne imageSrc={temp} />
      <AboutUsSectionTwo />

      {/* Features Section */}
      <Feature data={featureData} titleSectionData={titleSectionData} />

      <ApartmentPlan tabData={apartmentsPlanData} />

    </div>
  );
};

export default Dashboard;
