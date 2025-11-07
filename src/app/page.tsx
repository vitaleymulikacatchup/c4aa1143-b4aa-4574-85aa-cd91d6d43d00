"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TagAbout from '@/components/sections/about/TagAbout';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, CheckCircle, Clock, Eye, Globe, HelpCircle, Mail, MessageSquare, Newspaper, Rocket, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name": "Home", "id": "hero"},
            {"name": "Missions", "id": "feature"},
            {"name": "Gallery", "id": "product"},
            {"name": "Team", "id": "team"},
            {"name": "About", "id": "about"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="NASA Missions"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="NASA Space Missions Portfolio"
          description="Explore humanity's greatest achievements in space exploration, from the Apollo moon landings to cutting-edge Mars missions and deep space telescopes."
          tag="Space Exploration"
          tagIcon={Rocket}
          buttons={[
            {"text": "Explore Missions", "href": "feature"},
            {"text": "View Gallery", "href": "product"}
          ]}
          imageSrc="https://pixabay.com/get/g6459e0143161d1f0321b5f419a0a49799b81458170ff380561d67a73ea12853dca65e031a937a68a53381773d94b0a3d_1280.jpg"
          imageAlt="NASA space shuttle launching into space"
          frameStyle="card"
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Historic Space Missions"
          description="Discover the groundbreaking missions that have shaped our understanding of the universe and pushed the boundaries of human exploration."
          tag="Missions"
          tagIcon={Globe}
          features={[
            {
              "id": "01",
              "title": "Mars Exploration Program",
              "description": "Advanced rover missions exploring the Red Planet's surface, searching for signs of ancient life and preparing for human exploration.",
              "imageSrc": "https://pixabay.com/get/g068e7f1b89412e96255682523d0554c752cc7e0753e9f43a23f18627235b25368beb1f1025b0a04894c92059cf9cabf4_1280.jpg",
              "imageAlt": "Mars rover exploring the Martian surface"
            },
            {
              "id": "02",
              "title": "International Space Station",
              "description": "Orbiting laboratory conducting cutting-edge research in microgravity, fostering international cooperation in space exploration.",
              "imageSrc": "https://pixabay.com/get/g46d64ec2d887ce61b3a8c6e6c8ad96903d5faad26ab94896eaa66114ac744eef3a1d0f82e049578408184ecb57c26fcb_1280.jpg",
              "imageAlt": "International Space Station orbiting Earth"
            },
            {
              "id": "03",
              "title": "Apollo Moon Program",
              "description": "Historic missions that achieved humanity's first steps on the Moon, demonstrating our capability to reach other worlds.",
              "imageSrc": "https://pixabay.com/get/gfdaafc7a17cac3c00a7980bd97b8caf8d0ba6872f49d852e2e381a38308b60bc8f0c077fd4365be12e0ca843ace4788a_1280.jpg",
              "imageAlt": "Apollo mission moon landing site"
            },
            {
              "id": "04",
              "title": "Deep Space Telescopes",
              "description": "Revolutionary space observatories like Hubble and James Webb, revealing the mysteries of distant galaxies and cosmic phenomena.",
              "imageSrc": "https://pixabay.com/get/gdc572aec30140a4c5136052baf2c1f7d50a36142378ea8f7b9e850bda01683250bf4c3c3997450722c55918710b5a06d_1280.png",
              "imageAlt": "Hubble Space Telescope in orbit"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Spacecraft Gallery"
          description="Explore the incredible spacecraft and vehicles that have made these missions possible, showcasing decades of aerospace engineering excellence."
          tag="Spacecraft"
          tagIcon={Zap}
          products={[
            {
              "id": "1",
              "brand": "NASA",
              "name": "Saturn V Rocket",
              "price": "Historic",
              "rating": 5,
              "reviewCount": "Apollo Era",
              "imageSrc": "https://pixabay.com/get/ge5e86bda17f1b93a83f9dc6a46e3e9cd3fadbe459cc6fc6803d0f057d9b3a0870931d7ebb35da4aa7fc2eea06f705423_1280.jpg",
              "imageAlt": "Saturn V rocket on launch pad"
            },
            {
              "id": "2",
              "brand": "NASA/ESA",
              "name": "James Webb Space Telescope",
              "price": "Active",
              "rating": 5,
              "reviewCount": "2021+",
              "imageSrc": "https://pixabay.com/get/g0e6c5cd9855ecc755943d76fd6cc8eb01270d3a1d784bc76e98e377374d97d720087ad012610c0646bbd7ff7cb209634_1280.jpg",
              "imageAlt": "James Webb Space Telescope in deep space"
            },
            {
              "id": "3",
              "brand": "SpaceX/NASA",
              "name": "Dragon Capsule",
              "price": "Operational",
              "rating": 5,
              "reviewCount": "Current",
              "imageSrc": "https://pixabay.com/get/gfabfc2c8e8a866c2f59fba28b9d054e3a900da07f4116424c9c4140fdb9c194d5f93a93bccaa7644b40066b6a157f84d_1280.jpg",
              "imageAlt": "SpaceX Dragon capsule approaching ISS"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Mission Achievements"
          description="Remarkable milestones and statistics from NASA's space exploration programs that showcase humanity's reach into the cosmos."
          tag="Statistics"
          tagIcon={BarChart3}
          metrics={[
            {
              "id": "1",
              "value": "12",
              "title": "Astronauts",
              "description": "Have walked on the Moon during the Apollo missions",
              "icon": Users
            },
            {
              "id": "2",
              "value": "25+",
              "title": "Years",
              "description": "International Space Station has been continuously inhabited",
              "icon": Clock
            },
            {
              "id": "3",
              "value": "240K",
              "title": "Miles",
              "description": "Distance from Earth to the Moon traveled by Apollo astronauts",
              "icon": Rocket
            },
            {
              "id": "4",
              "value": "13.8B",
              "title": "Light Years",
              "description": "James Webb Telescope can observe back to the early universe",
              "icon": Eye
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Astronauts"
          description="The brave men and women who have ventured beyond Earth to advance human knowledge and explore the final frontier."
          tag="Astronauts"
          tagIcon={Users}
          members={[
            {
              "id": "1",
              "name": "Commander Sarah Chen",
              "role": "Mission Commander",
              "imageSrc": "https://pixabay.com/get/gd1dcd19383398befb904c9c7dede3cd6fe2dbf57b37349209f24f85550955c58ca698962e707e500f1c9a013f6a98dc7_1280.jpg",
              "imageAlt": "Portrait of Commander Sarah Chen in space suit"
            },
            {
              "id": "2",
              "name": "Dr. Michael Rodriguez",
              "role": "Mission Specialist",
              "imageSrc": "https://pixabay.com/get/g63f00afd8627b5ce4d46545c1a7c32a86619d79387fb1928338666adc9d5246ceebaa73431738a4f6791b6d232d76731_1280.jpg",
              "imageAlt": "Portrait of Dr. Michael Rodriguez"
            },
            {
              "id": "3",
              "name": "Lt. Col. Emily Watson",
              "role": "Pilot",
              "imageSrc": "https://pixabay.com/get/g228fbf7fa6b6ea34f2057f93d121ed7e902ba076f46def2740d880a496f2193425a969ae37d46b53a2c81dc7e0fe5d16_1280.jpg",
              "imageAlt": "Portrait of Lt. Col. Emily Watson"
            },
            {
              "id": "4",
              "name": "Dr. James Park",
              "role": "Science Officer",
              "imageSrc": "https://pixabay.com/get/g848249971a58f467d5d60a8921c38fb13983efe021a840905ac31a001ed915b29bf8b1592355d7571373bbfc4d147756_1280.jpg",
              "imageAlt": "Portrait of Dr. James Park"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Scientists Say"
          description="Insights and reflections from the researchers, engineers, and scientists who make these incredible missions possible."
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              "id": "1",
              "name": "Dr. Lisa Anderson",
              "role": "Planetary Scientist, JPL",
              "testimonial": "Working on Mars missions has been the most rewarding experience of my career. Every data transmission from our rovers reveals new secrets about the Red Planet.",
              "imageSrc": "https://pixabay.com/get/gba4602973c6a658e2828ded41a65762591cbb076738ddfbe9c063c23a9639d113576d2d8b7d80b4c1053737bfa66303b303948ab4c65f507dc853a6e1eced019_1280.jpg",
              "imageAlt": "Portrait of Dr. Lisa Anderson"
            },
            {
              "id": "2",
              "name": "Robert Martinez",
              "role": "Aerospace Engineer, NASA",
              "testimonial": "The precision required for deep space missions pushes the boundaries of engineering. Each successful launch represents years of meticulous planning and innovation.",
              "imageSrc": "https://pixabay.com/get/g73d64cde6c1ea941d300661b990cdfccbf9c180fcfed9e2169bc5f9479f6d9fdec598470d1c0e7878e0b1faf8c121b5c_1280.jpg",
              "imageAlt": "Portrait of Robert Martinez"
            },
            {
              "id": "3",
              "name": "Dr. Jennifer Kim",
              "role": "Astrophysicist, Goddard",
              "testimonial": "The James Webb Space Telescope is revolutionizing our understanding of the universe. The images we're receiving are beyond anything we imagined possible.",
              "imageSrc": "https://pixabay.com/get/g6208028a0cec85aff838d58ce1a1b758efe24b8dd8d86ed4accf848b218f426a66f91dff0c9d2bd9dabc61f9f24e28ea_1280.jpg",
              "imageAlt": "Portrait of Dr. Jennifer Kim"
            },
            {
              "id": "4",
              "name": "Captain David Thompson",
              "role": "Mission Control Director",
              "testimonial": "Coordinating international space missions requires seamless collaboration. The ISS program demonstrates what humanity can achieve when we work together.",
              "imageSrc": "https://pixabay.com/get/g0c1de6d57fccfc16b1b8717ca3cd12750d6456ecb121d33917e6ee84451ff49875317b297a9fe40d83b8a89e16a28d36_1280.jpg",
              "imageAlt": "Portrait of Captain David Thompson"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Mission Partners"
          description="Collaborating with leading aerospace companies and international space agencies to push the boundaries of human exploration."
          tag="Partners"
          tagIcon={CheckCircle}
          logos={[
            "https://pixabay.com/get/g712c31302fd2a1d94896605f8b7e28c3b5d123cf6a1ade224ee547990b11e06a1ac273ba77545e80044c7f4d3bf3874fcdf0c27bff3928b3754b2e9702ff70fe_1280.jpg",
            "https://pixabay.com/get/g5a01973d214d332591a7af06114e0528dad9c3a2a8f06f35547e7d61f068e257e12dd03f22f56a432bc3b4b3574109e25dbcfa27fad02a8c2725c48a49f0b663_1280.jpg",
            "https://pixabay.com/get/gf87a16e8853fbd653f4eff5ee422ff1268068719feed42a36ec790ca79981f0831dde8c966e26ce3d2099e9a4b28adc6ad006ae742c7c3fb4ec5479f3368707d_1280.jpg",
            "https://pixabay.com/get/g883163158ddd26b9906064653f468dfbe5d2b3f1506b7f5b9ce999864240aa22425c4333f4ca77e6a8ee6f4c20383974_1280.jpg",
            "https://pixabay.com/get/g9325c33ce867c77dc26aa687a2864f6d0d09c9071a15c6a6315f4c7e70abcb95949eadeae9a0f1cc328e3ca81b8271e7_1280.jpg",
            "https://pixabay.com/get/g00c398a8cc734a1dd8ee85954e1ffb5a13799f3527cb23148ac0a1c1109b5a352f6fae11d0b4c4d8817cec041c58ceed4fd5f0647f4fde6f0ed116c9e237d25e_1280.jpg",
            "https://pixabay.com/get/gb65d75ad167085763dc9e1d44bc016740b53080f540f3188cb2913acf1f89181a4e0022899a4bf7cb8d3f864b5fe49039c8bf9ffb0ec9bfa82412ed640468420_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At NASA, we explore the unknown in air and space, innovate for the benefit of humanity, and inspire the next generation of explorers. Through groundbreaking missions and cutting-edge technology, we continue to push the boundaries of what's possible, from landing rovers on Mars to peering deep into the cosmos with revolutionary telescopes."
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about NASA missions, space exploration, and our ongoing programs to expand human presence in the solar system."
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              "id": "1",
              "title": "What are NASA's current major missions?",
              "content": "NASA is currently operating numerous missions including the Mars Perseverance rover, the James Webb Space Telescope, the International Space Station, and the Artemis program to return humans to the Moon."
            },
            {
              "id": "2",
              "title": "How long does it take to get to Mars?",
              "content": "The journey to Mars typically takes between 6-9 months depending on the alignment of Earth and Mars. NASA carefully plans launch windows when the planets are optimally positioned for the most efficient trajectory."
            },
            {
              "id": "3",
              "title": "What is the Artemis program?",
              "content": "Artemis is NASA's program to land the first woman and the next man on the Moon by 2026, establishing a sustainable lunar presence and preparing for eventual human missions to Mars."
            },
            {
              "id": "4",
              "title": "How do astronauts train for space missions?",
              "content": "Astronaut training includes physical conditioning, spacecraft systems training, spacewalk preparation, scientific research training, and psychological preparation. The process typically takes 2-3 years of intensive preparation."
            },
            {
              "id": "5",
              "title": "What discoveries has the James Webb Telescope made?",
              "content": "JWST has revealed the most distant galaxies ever observed, provided unprecedented detail of star formation, discovered water vapor on exoplanets, and captured stunning images of nebulae and cosmic phenomena."
            }
          ]}
          animationType="smooth"
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Mission Updates"
          description="Stay informed about the latest developments, discoveries, and milestones from NASA's ongoing space exploration missions."
          tag="News"
          tagIcon={Newspaper}
          blogs={[
            {
              "id": "1",
              "category": "Mars Missions",
              "title": "Perseverance Rover Discovers Ancient River Delta",
              "excerpt": "NASA's Perseverance rover has uncovered evidence of an ancient river delta in Jezero Crater, providing new insights into Mars' watery past.",
              "imageSrc": "https://pixabay.com/get/g068e7f1b89412e96255682523d0554c752cc7e0753e9f43a23f18627235b25368beb1f1025b0a04894c92059cf9cabf4_1280.jpg",
              "imageAlt": "Perseverance rover on Martian surface",
              "authorName": "Dr. Sarah Chen",
              "authorAvatar": "https://pixabay.com/get/gba4602973c6a658e2828ded41a65762591cbb076738ddfbe9c063c23a9639d113576d2d8b7d80b4c1053737bfa66303b303948ab4c65f507dc853a6e1eced019_1280.jpg",
              "date": "15 Jan 2025"
            },
            {
              "id": "2",
              "category": "Deep Space",
              "title": "James Webb Captures Stunning Galaxy Formation",
              "excerpt": "New images from the James Webb Space Telescope reveal galaxies forming just 400 million years after the Big Bang, reshaping our understanding of early universe.",
              "imageSrc": "https://pixabay.com/get/g0e6c5cd9855ecc755943d76fd6cc8eb01270d3a1d784bc76e98e377374d97d720087ad012610c0646bbd7ff7cb209634_1280.jpg",
              "imageAlt": "James Webb Space Telescope deep field image",
              "authorName": "Dr. Michael Rodriguez",
              "authorAvatar": "https://pixabay.com/get/g73d64cde6c1ea941d300661b990cdfccbf9c180fcfed9e2169bc5f9479f6d9fdec598470d1c0e7878e0b1faf8c121b5c_1280.jpg",
              "date": "12 Jan 2025"
            },
            {
              "id": "3",
              "category": "ISS Research",
              "title": "Groundbreaking Medical Research in Microgravity",
              "excerpt": "Scientists aboard the ISS have made significant breakthroughs in understanding protein crystallization that could revolutionize drug development on Earth.",
              "imageSrc": "https://pixabay.com/get/g46d64ec2d887ce61b3a8c6e6c8ad96903d5faad26ab94896eaa66114ac744eef3a1d0f82e049578408184ecb57c26fcb_1280.jpg",
              "imageAlt": "International Space Station in orbit",
              "authorName": "Dr. Jennifer Kim",
              "authorAvatar": "https://pixabay.com/get/g6208028a0cec85aff838d58ce1a1b758efe24b8dd8d86ed4accf848b218f426a66f91dff0c9d2bd9dabc61f9f24e28ea_1280.jpg",
              "date": "08 Jan 2025"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Mission Updates Newsletter"
          description="Subscribe to receive the latest updates on NASA missions, scientific discoveries, and space exploration milestones delivered directly to your inbox."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive mission updates and space exploration news. You can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              "title": "Missions",
              "items": [
                {"label": "Mars Exploration", "href": "https://mars.nasa.gov"},
                {"label": "Artemis Program", "href": "https://nasa.gov/artemis"},
                {"label": "James Webb Telescope", "href": "https://jwst.nasa.gov"},
                {"label": "ISS Research", "href": "https://nasa.gov/iss"}
              ]
            },
            {
              "title": "Resources",
              "items": [
                {"label": "Mission Archives", "href": "https://nasa.gov/missions"},
                {"label": "Image Gallery", "href": "https://nasa.gov/images"},
                {"label": "Educational Materials", "href": "https://nasa.gov/education"},
                {"label": "Press Releases", "href": "https://nasa.gov/news"}
              ]
            },
            {
              "title": "Connect",
              "items": [
                {"label": "NASA Homepage", "href": "https://nasa.gov"},
                {"label": "Mission Updates", "href": "contact"},
                {"label": "Social Media", "href": "https://twitter.com/nasa"},
                {"label": "Contact Us", "href": "contact"}
              ]
            }
          ]}
          brandName="NASA Missions"
          copyrightText="© 2025 NASA Space Missions Portfolio"
          onPrivacyClick={null}
        />
      </div>
    </ThemeProvider>
  );
}