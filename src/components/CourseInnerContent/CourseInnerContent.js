import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseInnerContent.css";
import CourseInnerBannerImage from "../../assets/images/blog26.png";
import CourseInnerAbout from "../CourseInnerAbout/CourseInnerAbout";
import CourseWork from "../CourseWork/CourseWork";
import CourseReview from "../CourseReview/CourseReview";
import CourseOutcome from "../CourseOutcome/CourseOutcome";
import CourseEnrollmentForm from "../CourseEnrollmentForm/CourseEnrollmentForm";

const coursesData = [
  {
    id: "1",
    Title: "English Essentials: Building Confidence in Speaking and Listening",
    description:
      "Embark on your English journey with our foundational A1 course, designed specifically for beginners eager to study English online. This comprehensive program focuses on essential communication skills, pronunciation, and everyday English usage. Through interactive lessons and practical exercises, you'll build confidence in speaking, listening, and basic writing. Our course is tailored to Indian learners, addressing common challenges and cultural nuances to ensure a smooth learning experience",
    whyChoose:
      "If you’re looking to boost your English skills then our A1 course is your perfect launchpad. Ideal for professionals, students, and anyone seeking to improve their English, this course offers a structured path to language proficiency. By choosing to study English online with us, you'll gain the flexibility to learn at your own pace while benefiting from expert guidance. Master greetings, introductions, daily conversations, and more, setting a solid foundation for your English language journey",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Great course!",
        author: "Lisa",
        timestamp: "2w ago",
      },
      {
        rating: 4,
        testimonial: "Very informative.",
        author: "John",
        timestamp: "1w ago",
      },
    ],
    units: [
      {
        title: "Unit 1: Greetings, Introductions, and Family",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: Daily Life and Routines",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: Sports and Fitness",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 4: Movies and Entertainment",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 5: Weather, Seasons, and Clothing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 6: Nature and Environment",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 7: Food and Cuisine",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 8: Travel and Transportation",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 9: Shopping and Money",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: Hobbies, Interests, and Entertainment",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 11: Health and Well-being",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 12: Directions, Locations, and Places",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 13: Art and Culture",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 14: Technology and Communication",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 15: Education and Learning",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 16: News and Current Events",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 17: Everyday Objects and Possessions",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 18: Consolidation and Practice",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
    ],
    includes: [
      {
        points: [
          "Vocabulary building exercises",
          "Grammar lessons tailored to beginners",
          "Pronunciation practice",
          "Interactive activities and role-plays",
          "Cultural insights relevant to Indian learners",
        ],
      },
    ],
    outcome: [
      "Confidently greet others, introduce yourself, discuss family relationships, and describe daily routines in an Indian context",
      "Engage in conversations about popular Indian sports, movies, entertainment, hobbies, and leisure activities",
      "Use a wide range of vocabulary related to weather, nature, clothing, food, travel, and transportation",
      "Navigate shopping scenarios, describe health issues, and discuss traditional Indian remedies",
      "Give and understand directions, navigate Indian cities and towns, and describe famous tourist destinations",
      "Discuss art, culture, and the rich cultural heritage of India with basic proficiency",
      "Use fundamental technological and communication terminology, and participate in discussions about the Indian education system and current events",
      "Employ simple grammar structures in everyday conversations",
      "Participate effectively in role-plays, dialogues, discussions, debates, and give short presentations on familiar topics",
    ],
    price: "$99",
    discount: "50% Off",
    assesments: [
      "4 Unit Tests to gauge your progress",
      "1 Grand Test covering Units 13-18",
      "Continuous evaluation through quizzes and assignments",
    ],
  },
  {
    id: "2",
    Title: "Accent Improvement: Developing Natural English Speech Patterns",
    description:
      "Take your English skills to the next level with our A2 course, designed for learners ready to enhance their confidence and fluency. This program focuses on refining your accent, mastering essential grammar structures, and developing practical communication skills for various real-life scenarios. Through interactive lessons and targeted exercises, you'll unlock the secret to confident English usage, perfect for those who want to study English online and excel in personal and professional settings",
    whyChoose:
      "If you’re looking to elevate your English from basic to confident and proficient, our A2 course is your key to unlocking fluent, natural-sounding English. Ideal for professionals, students, and anyone seeking to improve their English communication skills, this course offers a structured path to language mastery. By choosing to study English online with us, you'll gain the flexibility to learn at your own pace while benefiting from expert guidance. Master tenses, express opinions, handle professional conversations, and more, setting yourself apart in today's competitive world",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Excellent course!",
        author: "Alice",
        timestamp: "3w ago",
      },
      {
        rating: 3,
        testimonial: "Good content.",
        author: "Bob",
        timestamp: "2w ago",
      },
    ],
    units: [
      {
        title: "Unit 1: Mastering Tenses for Effective Communication",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: Modal Verbs for Ability, Permission, and Requests",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: Expressing Opinions and Agreeing/Disagreeing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 4: Giving and Following Instructions",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 5: Describing Feelings and Emotions",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 6: Writing Emails for Various Purposes",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 7: Handling Phone Conversations",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 8: Giving and Responding to Feedback",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 9: Techniques for Strategic Communications",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: Reporting and Summarizing Information",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 11: Expressing Cause and Effect",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 12: Handling Complaints and Resolving Conflicts",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 13: Discussing Cultural Differences and Norms",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 14: Expressing Hypothetical Situations and Possibilities",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 15: Debating and Presenting Arguments",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 16: English for Digital Communication and Online Presence",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
    ],
    includes: [
      {
        points: [
          "Advanced vocabulary building exercises",
          "In-depth grammar lessons",
          "Pronunciation and accent refinement",
          "Interactive activities and role-plays",
          "Cultural insights for global communication",
        ],
      },
    ],
    outcome: [
      " Master using simple present, present continuous, and simple past tenses accurately in everyday communication",
      "Use modal verbs like 'can,' 'could,' 'may,' and 'might' to express ability, possibility, permission, and make polite requests",
      "Express opinions, agree/disagree politely, and support viewpoints with reasons and examples",
      "Give and follow instructions, directions, and describe processes using appropriate language structures",
      " Describe feelings and emotions using a wide range of vocabulary, adjectives, and idiomatic expressions",
      "Write effective emails for various purposes, following etiquette and formatting conventions",
      "Handle phone conversations professionally, including making/receiving calls and taking/leaving messages",
      "Provide, seek, and respond to feedback constructively in personal and professional contexts",
      "Use persuasive language techniques and handle negotiations effectively",
      "Report and summarize information accurately, avoiding plagiarism",
      "Discuss cultural differences with sensitivity and adapt to various cultural norms",
      "Express hypothetical situations and possibilities using conditional sentences",
      "Structure and present arguments effectively in debates and discussions",
      "Navigate digital communication channels with proper netiquette",
    ],
    price: "$199",
    discount: "30% Off",
    assesments: [
      "4 Unit Tests to gauge your progress",
      "Continuous evaluation through quizzes and assignments",
    ],
  },
  {
    id: "3",
    Title: "Intermediate Communication: Expanding Vocabulary and Fluency",
    description:
      "Elevate your English proficiency to new heights with our B1 course, designed for intermediate learners ready to develop their unique voice in English. This program focuses on enhancing your vocabulary, mastering idiomatic expressions, and refining your communication skills for diverse professional and personal scenarios. Through immersive lessons and practical exercises, you'll craft your signature English accent and style, perfect for those who want to study English online and stand out in global settings",
    whyChoose:
      "If you are seeking to move beyond basic English and develop a distinctive, confident communication style, our B1 course is your gateway to mastering the nuances of English that set fluent speakers apart. Ideal for professionals, aspiring leaders, and anyone aiming to excel in English-speaking environments, this course offers a comprehensive path to language sophistication. By choosing to study English online with us, you'll gain the flexibility to learn at your own pace while benefiting from expert guidance. Enhance your negotiation skills, perfect your business writing, and develop a rich vocabulary that reflects your personality and cultural background",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Excellent course!",
        author: "Alice",
        timestamp: "3w ago",
      },
      {
        rating: 3,
        testimonial: "Good content.",
        author: "Bob",
        timestamp: "2w ago",
      },
    ],
    units: [
      {
        title: "Unit 1: Enhancing English Vocabulary for Everyday Life",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: Indian English: Unique Expressions and Phrases",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: English for Negotiation and Persuasion",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 4: Mastering Business Writing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 5: English for Customer Service and Sales",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 6: Storytelling for Effective Communication",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 7: English for Intercultural Communication",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 8: Mastering English Idioms and Proverbs",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 9: English for Interviews and Job Search",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: Mastering English Pronunciation: Regional Variations",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 11: English for Effective Presentations",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 12: English Through Indian Cinema and Music",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 13: English for Leadership and Team Building",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 14: Mastering English Collocations and Word Partnerships",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 15: English for Creative Writing and Self-Expression",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 16: Mastering English Humor and Wordplay",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 17: English for Startups and Entrepreneurship",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 18: English for Small Business Owners and Managers",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
    ],
    includes: [
      {
        points: [
          "Advanced vocabulary expansion techniques",
          "Cultural insights and practical applications",
          "Interactive role-plays and simulations",
          "Creative writing and self-expression exercises",
          "Pronunciation refinement focusing on your unique accent",
        ],
      },
    ],
    outcome: [
      "Expand your vocabulary through context, word associations, and explore unique Indian English expressions and phrases",
      "Use advanced language techniques for negotiation, persuasion, and effective business writing",
      "Handle customer service interactions, complaints, and use persuasive language for sales",
      "Employ storytelling techniques, understand cultural differences, and build rapport in intercultural communication",
      "Master English idioms, proverbs, and regional pronunciation variations",
      "Prepare for interviews, write compelling resumes and cover letters, and excel in mock interviews",
      "Plan and deliver engaging presentations using visual aids and storytelling, handling audience questions confidently",
      "Explore Indian cinema and music to improve listening comprehension and vocabulary",
      "Express yourself creatively through various writing genres while understanding English humor and wordplay",
      "Develop leadership and team-building skills through English communication",
      "Master English collocations and word partnerships for more natural expression",
      "Craft your unique voice in English, reflecting your personality and cultural background",
    ],
    price: "$199",
    discount: "30% Off",
    assesments: [
      "4 Comprehensive Unit Tests",
      "Continuous evaluation through quizzes, role-plays, and projects",
    ],
  },
  {
    id: "4",
    Title: "Academic English: Preparing for University Success",
    description:
      "Embark on a transformative journey to academic excellence with our B2 course, tailored for ambitious learners aiming for university distinction. This comprehensive program focuses on advanced English skills essential for thriving in higher education and international academic settings. Through rigorous lessons and practical applications, you'll develop the sophisticated language skills needed to excel in university lectures, research, and scholarly discussions. Perfect for those who want to study English online and prepare for success on the global academic stage",
    whyChoose:
      "If you are aspiring to shine in international universities or seeking to elevate your academic English to world-class standard, our B2 course is your passport to academic distinction. Ideal for university applicants, current students, and professionals pursuing higher education abroad, this course offers an intensive path to mastering academic English. By choosing to study English online with us, you'll gain the flexibility to prepare for your academic journey while benefiting from expert guidance. Develop critical thinking skills, perfect your academic writing, and cultivate the communication prowess needed to stand out in prestigious educational institutions worldwide",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Excellent course!",
        author: "Alice",
        timestamp: "3w ago",
      },
      {
        rating: 3,
        testimonial: "Good content.",
        author: "Bob",
        timestamp: "2w ago",
      },
    ],
    units: [
      {
        title:
          "Unit 1: Building Advanced Vocabulary for Academic and Professional Success",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: Optimal Communication in Diverse Academic Settings",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: Enhancing Advanced English Grammar in Academic Writing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 4: Effective Writing for University Applications and Scholarships",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 5: Developing Critical Thinking and Problem-Solving Skills for Higher Education",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 6: Mastering Academic Writing: Research Papers and Dissertations",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 7: Efficient Presentation Skills for Academic Seminars and Conferences",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 8: English for Intercultural Communication and Global Awareness in Higher Education",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 9: Building Academic Listening and Note-Taking Skills for Lectures",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: English for Research and Academic Collaboration",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 11: Relevant Email Writing for Academic and Professional Purposes",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 12: Enhancing English for Academic Debates and Discussions",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 13: Mastering Advanced English Pronunciation for Academic Interactions",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 14: English for Academic Networking and Career Development",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 15: Adapting to Different Academic Writing Styles and Formats",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 16: Mastering Advanced English Vocabulary for Specific Academic Disciplines",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
    ],
    includes: [
      {
        points: [
          "Advanced vocabulary expansion techniques",
          "Cultural insights and practical applications",
          "Interactive role-plays and simulations",
          "Creative writing and self-expression exercises",
          "Pronunciation refinement focusing on your unique accent",
        ],
      },
    ],
    outcome: [
      "Expand your vocabulary through context, word associations, and explore unique Indian English expressions and phrases",
      "Use advanced language techniques for negotiation, persuasion, and effective business writing",
      "Handle customer service interactions, complaints, and use persuasive language for sales",
      "Employ storytelling techniques, understand cultural differences, and build rapport in intercultural communication",
      "Master English idioms, proverbs, and regional pronunciation variations",
      "Prepare for interviews, write compelling resumes and cover letters, and excel in mock interviews",
      "Plan and deliver engaging presentations using visual aids and storytelling, handling audience questions confidently",
      "Explore Indian cinema and music to improve listening comprehension and vocabulary",
      "Express yourself creatively through various writing genres while understanding English humor and wordplay",
      "Develop leadership and team-building skills through English communication",
      "Master English collocations and word partnerships for more natural expression",
      "Craft your unique voice in English, reflecting your personality and cultural background",
    ],
    price: "$199",
    discount: "30% Off",
    assesments: [
      "4 Comprehensive Unit Tests",
      "Continuous evaluation through quizzes, role-plays, and projects",
    ],
  },

  {
    id: "5",
    Title: "The Iridescent Quill: Mastering the Art of Accent and Aura of English",
    description:
      "Unleash your creative potential and elevate your English mastery with our C1 course, The Iridescent Quill. This advanced program is designed for those who want to study English online and dive deep into the art of storytelling, creative writing, and sophisticated language use. Perfect for aspiring writers, poets, and language enthusiasts, this course will help you develop a unique voice, craft compelling narratives, and explore various genres of writing. From world-building to advanced grammar, you'll gain the skills to express yourself with flair and precision in English.",
    whyChoose:
      "If you are ready to transform your English skills from proficient to extraordinary, our C1 course is your gateway to becoming a master of the written and spoken word. Whether you're an aspiring author, a professional seeking to enhance your communication skills, or simply passionate about language, this course offers an immersive journey into the depths of English creativity. By choosing to study English online with us, you'll gain the flexibility to nurture your talent while receiving expert guidance. Develop your unique voice, learn to craft captivating stories, and unlock the full potential of your imagination in English.",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Excellent course!",
        author: "Alice",
        timestamp: "3w ago",
      },
      {
        rating: 3,
        testimonial: "Good content.",
        author: "Bob",
        timestamp: "2w ago",
      },
    ],
    units: [
      {
        title:
          "Unit 1: The Art of Storytelling: Engaging Your Audience",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: Creative Writing: Developing Your Unique Voice and Style",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: Creative Writing: World-Building and Setting",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 4: The Power of Poetry: Mastering Rhythm, Rhyme, and Figurative Language",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 5: The Art of Non-Fiction Writing: Memoirs, Essays, and Autobiographies",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 6: Creative Writing: Crafting Compelling Characters and Dialogue",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 7: Creative Writing: Editing, Revising, and Polishing Your Work",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 8: The Art of Fiction Writing: Plot, Structure, and Pacing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 9: The Art of Short Story Writing: Mastering the Craft",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: Creative Writing: Experimenting with Form and Style",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 11: Creative Writing: Writing for Children and Young Adults",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 12: Advanced English Grammar: Mastering Complex Structures",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      }
    ],
    includes: [
      {
        points: [
          "In-depth exploration of creative writing techniques",
          "Advanced grammar and stylistic exercises",
          "Interactive workshops and peer feedback sessions",
          "Analysis of exemplary works in various genres",
          "Practical writing assignments and projects",
        ],
      },
    ],
    outcome: [
      "Apply storytelling techniques, develop unique writing voices and styles, and craft compelling narratives across various genres",
      "Create immersive fictional worlds, multi-dimensional characters, authentic dialogues, and master advanced poetic techniques and forms",
      "Compose compelling non-fiction narratives, memoirs, and essays, and adapt writing styles for different formats and audiences",
      "Understand and apply advanced grammar concepts and structures for sophistication and variety in writing and speech",
      "Craft age-appropriate and engaging stories for children and young adults and write effectively for stage and screen",
      "Experiment with innovative and unconventional forms of creative writing, pushing the boundaries of language and narrative conventions",
      "Develop versatility, flexibility, and confidence as a creative writer through experimentation, workshops, and peer feedback",
      "Master self-editing revision techniques and polish writing for clarity, coherence, and impact"
    ],
    price: "$199",
    discount: "30% Off",
    assesments: [
      "3 Comprehensive Unit Tests",
      "Continuous evaluation through quizzes, role-plays, and projects",
    ],
  },

  {
    id: "6",
    Title: "The Alchemy of Aura: From Accented Words to World-Class English",
    description:
      "Elevate your English to the pinnacle of proficiency with our C2 course, The Alchemy of Aura. This elite program is designed for those who aspire to command the English language with unparalleled mastery. Perfect for professionals, academics, writers, and language enthusiasts seeking the highest level of linguistic excellence, this course will transform your English skills from advanced to extraordinary. When you study English online with us, you'll delve into the intricacies of advanced vocabulary, persuasive writing, complex grammar, and sophisticated communication techniques. From crafting compelling content to navigating global leadership scenarios, this course equips you with the language prowess to excel in any English-speaking environment.",
    whyChoose:
      "If you are ready to join the ranks of world-class English communicators then our C2 course is your gateway to linguistic alchemy, where accented words transform into pure gold. Whether you're an executive aiming for international success, an academic pursuing groundbreaking research, or a writer seeking to captivate global audiences, this course offers an unparalleled opportunity to refine your English to perfection. By choosing to study English online with us, you'll gain the flexibility to hone your skills while receiving expert guidance. Master the art of persuasion, dive deep into literary analysis, and develop the linguistic agility to lead in a global context. This course is your key to unlocking the full potential of English as a tool for influence, creativity, and professional excellence.",
    bannerUrl: CourseInnerBannerImage,
    reviews: [
      {
        rating: 5,
        testimonial: "Excellent course!",
        author: "Alice",
        timestamp: "3w ago",
      },
      {
        rating: 3,
        testimonial: "Good content.",
        author: "Bob",
        timestamp: "2w ago",
      },
    ],
    units: [
      {
        title:
          "Unit 1: Mastering Advanced English Vocabulary and Word Choice",
        points: [
          "Introduction to the course",
          "Overview of the syllabus",
          "Expectations and outcomes",
        ],
      },
      {
        title: "Unit 2: English for Effective Copywriting and Persuasion",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 3: Advanced English Grammar and Syntax for Clear Communication",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 4: Writing Engaging Content for Digital Platforms",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 5: Advanced English Discourse Analysis and Pragmatics",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 6: Mastering Technical Writing for User Guides and Manuals",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 7: English for Thought Leadership and Influence",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 8: Mastering Literary Analysis and Criticism",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 9: Writing Persuasive Product Descriptions and Reviews",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title: "Unit 10: Advanced English for Research and Academic Writing",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 11: English for Social Media Writing and Online Presence",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
      {
        title:
          "Unit 12: Mastering SEO Writing and Keyword Optimization",
        points: [
          "Basic concepts",
          "Terminologies",
          "Introduction to key topics",
        ],
      },
    ],
    includes: [
      {
        points: [
          "In-depth exploration of advanced linguistic concepts",
          "Practical application of sophisticated communication techniques",
          "Interactive workshops and peer review sessions",
          "Analysis of exemplary texts across various genres and contexts",
          "Challenging writing assignments and projects",
        ],
      },
    ],
    outcome: [
      "Master advanced English vocabulary, word choice, grammar, and syntax for clear and persuasive communication",
      "Craft compelling copywriting, digital content, product descriptions, and SEO-optimized writing",
      "Analyze complex discourse, apply pragmatic principles, and conduct in-depth literary analysis and criticism",
      "Write persuasive thought leadership pieces, speeches, and presentations using advanced rhetorical devices",
      "Conduct thorough research and write complex academic papers, investigative reports, and dissertations",
      "Build a strong online presence, master social media writing, and navigate global issues through English",
      "Develop advanced language skills for international relations, diplomacy, and global leadership",
      "Edit and proofread writing for maximum clarity, coherence, and professional publication readiness",
    ],
    price: "$199",
    discount: "30% Off",
    assesments: [
      "3 Comprehensive Unit Tests",
      "Continuous evaluation through quizzes, role-plays, and projects",
    ],
  },

  // Add more courses as needed
];

function CourseInnerContent() {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKnowMoreVisible, setIsKnowMoreVisible] = useState(true);


  useEffect(() => {
    const fetchCourse = () => {
      const courseData = coursesData.find((course) => course.id === courseId);
      setCourse(courseData);
    };

    fetchCourse();
  }, [courseId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownVisibility = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 769) {
      setIsDropdownOpen(true);
      setIsKnowMoreVisible(false);
    } else {
      setIsDropdownOpen(false);
      setIsKnowMoreVisible(true);
    }
  };

  useEffect(() => {
    handleDropdownVisibility();

    window.addEventListener('resize', handleDropdownVisibility);
    return () => window.removeEventListener('resize', handleDropdownVisibility);
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-inner-content-section">
      <div className="course-inner-content-container">
        <div className="course-inner-content-banner">
          <img src={course.bannerUrl} alt={course.title} />
        </div>
        <div className="course-inner-content-main">
          <div className="course-inner-content-sidebar">
            <div className="course-inner-content-sidebar-image">
              <img src={course.bannerUrl} alt="" />
            </div>
            <div className="course-inner-content-sidebar-price">
              {/* <h2 className="actual-price">{course.price}</h2>
              <h4 className="discount-percent">{course.discount}</h4> */}
            </div>
            <div className="get-course-btn">
              <button onClick={handleOpenModal}>Get Course</button>
            </div>
            <CourseEnrollmentForm
              open={isModalOpen}
              onClose={handleCloseModal}
              courseTitle={course.Title}
            />
            <hr />
            {isKnowMoreVisible && (
              <button className="know-more-btn" onClick={handleDropdownToggle}>
                {isDropdownOpen ? 'Show Less' : 'Know More'}
              </button>
            )}
            
            {isDropdownOpen && (
              <>
                
                <div className="course-inner-content-sidebar-inclusion">
                  <h3>Each Unit Includes</h3>
                  <ul>
                    {course.includes && course.includes.length > 0 ? (
                      course.includes.map((include, index) =>
                        include.points.map((point, i) => (
                          <li key={`${index}-${i}`}>{point}</li>
                        ))
                      )
                    ) : (
                      <li>No includes available</li>
                    )}
                  </ul>
                </div>
                <hr />
                <div className="course-inner-content-sidebar-instructor">
                  <h3>Assessments</h3>
                  <ul>
                    {course.assesments.map((assesment, index) => (
                      <li key={index}>{assesment}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="course-inner-content-description">
            <div className="course-inner-content-tab">
              <button
                className={`tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab ${activeTab === "coursework" ? "active" : ""}`}
                onClick={() => setActiveTab("coursework")}
                id="coursework"
              >
                Coursework
              </button>
              <button
                className={`tab ${activeTab === "learning" ? "active" : ""}`}
                onClick={() => setActiveTab("learning")}
              >
                Learning
              </button>
              {/* <button
                className={`tab ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button> */}
            </div>
            <div className="course-inner-content-tab-description">
              {activeTab === "overview" && (
                <CourseInnerAbout
                  description={course.description}
                  whyChoose={course.whyChoose}
                />
              )}
              {activeTab === "coursework" && (
                <CourseWork units={course.units} />
              )}
              {activeTab === "learning" && (
                <CourseOutcome outcome={course.outcome} />
              )}
              {activeTab === "reviews" && (
                <CourseReview reviews={course.reviews} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInnerContent;
