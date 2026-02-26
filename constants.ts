
import { Project, ProjectCategory, Experience } from './types';

export const SOCIAL_LINKS = {
  email: "gcxuennn@gmail.com",
  phone: "+6012-214 2918",
  linkedin: "https://www.linkedin.com/in/chiao-xuen-goh-76863937b/"
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Digital Preservation Intern",
    company: "Yungang Research Institute",
    period: "2024",
    description: [
      "Executed image acquisition, color calibration, and 3D modeling for cultural heritage digitalization.",
      "Contributed to international website redesign for usability and accessibility."
    ]
  }
];

export const SKILLS = {
  design: ["Figma", "Wireframing", "Prototyping", "Information Architecture", "User Research"],
  tech: ["HTML", "CSS", "JavaScript", "Python", "Data Visualization"],
  data: ["Stata", "SPSS", "Excel", "Requirement Gathering"]
};

export const PROJECTS: Project[] = [
  {
    id: "peking-archive",
    title: "Peking University History Archive",
    category: ProjectCategory.IA,
    shortDescription: "Restructuring complex historical data into an accessible digital archive.",
    role: "IA Lead & Developer",
    year: "2023",
    image: "https://drive.google.com/thumbnail?id=1VSmlO3qd2dGganCr4MVwwSkQ8uiT7fDz&sz=w2000",
    tags: ["Web Design", "Information Architecture", "History"],
    
    // BASED ON PDF PAGE 1 & 2 "Context" & "Goals"
    problem: "Peking University’s historical archives were fragmented and difficult to navigate. Users lacked a structured, intuitive way to explore key events, figures, and archival materials, limiting accessibility and engagement with the university’s historical narrative.",
    
    outcome: "We designed Yanyuan Events, a structured and interactive archival platform that organizes historical content by timeline and category, integrates search and filtering systems, and enables users to browse, discover, and engage with Peking University’s history in a clear and meaningful way.",
    
    overview: "The 'Yanyuan Events' website collects and displays major historical events of Peking University since the founding of the Imperial University of Peking in 1898. The content includes historical activities, key figures, and campus transformations, displayed flexibly by timeline and theme to help users quickly access effective information.",
    
    duration: "4 Months",
    tools: ["JavaScript", "CSS", "Python", "Figma", "XMind"],
    context: "Peking University Campus & Archives",
    
    // BASED ON PDF PAGE 1, 2, 3 (Scenario & Persona)
    research: [
      {
        type: 'scenario',
        title: "User Context: Xiao Bei's Journey",
        subtitle: "The curious freshman",
        content: "Xiao Bei is a 2023 freshman who loves exploring. One day, cycling past the 'Red Building' (Archives), he became curious about PKU's history but found the doors closed.",
        items: [
          "Trigger: Sees the Archives building while cycling to Weiming Lake.",
          "Pain Point: The Archives are closed; he cannot enter to learn more.",
          "Action: Searches online for a 'Yanyuan Events' website to find photos and summaries.",
          "Goal: To satisfy his curiosity about the school's heritage and share it with classmates."
        ]
      },
      {
        type: 'persona',
        title: "Typical User: Li Ting",
        subtitle: "Information Management Student",
        content: "A junior student who searches for information ~7 times a week. She values accuracy and visual evidence over generic descriptions.",
        items: [
          "Behavior: Uses mobile/tablet/PC; browses daily for >6 hours.",
          "Pain Points: Information loss, lack of authenticity, difficulty in verifying sources.",
          "Needs: Clear categorization (Time, Person, Location), accurate metadata, and citation-ready details."
        ]
      }
    ],

    // BASED ON PDF PAGE 3, 4, 5 (Content & Structure)
    process: [
      { 
        title: "Content Strategy", 
        description: "Organized 73 historical items into 6 core periods: 1. National Salvation (1898-1911), 2. Awakening & Revolution (1912-1948), 3. Socialist Construction (1949-1978), 4. Reform Era (1978-1998), 5. Centennial Century (1998-2012), 6. New Era (2012-Present)." 
      },
      { 
        title: "Metadata Definition", 
        description: "Defined core metadata for every event to ensure retrievability: ID, Name, Description, Type (Photo/Text), Format (PNG/JPG), Source (PKU Archives), and Update Frequency." 
      },
      { 
        title: "Structure Design", 
        description: "Created a dual-entry system: 'Timeline' for chronological exploration and 'Categories' (Establishment, Campus Construction, Academics, Figures, Student Life) for thematic browsing." 
      }
    ],

    // BASED ON PDF PAGE 5, 6 (Diagrams)
    uxDecisions: [
      {
        title: "Information Architecture",
        description: "The organizational structure divides the site into 5 main sections: Home, Timeline (Chronological), Categories (Thematic), Search, and Details. This supports both browsing (serendipity) and searching (precision).",
        image: "https://drive.google.com/thumbnail?id=1eqI5aUaGqJv9ZlkVQooV5oswJKaNvCX-&sz=w2000" 
      },
      {
        title: "Site Map",
        description: "Visualizing the hierarchy of the archive, dividing content into chronological timelines and thematic categories to support different browsing behaviors.",
        image: "https://drive.google.com/thumbnail?id=1X09SKyU45b-ORVmapAsn4OSe6E6ER47b&sz=w2000"
      },
      {
        title: "User Flow & Path",
        description: "Designing the path from entry to detail: Users can start from the Homepage → Select Filter (Time/Theme) → View Search Results → Click 'View Details' → Interact (Save/Share/Correct).",
        image: "https://drive.google.com/thumbnail?id=1dKlSQ5GxoTWC98DG4yGJ96nwJz_oKce6&sz=w2000"
      },
      {
        title: "Wireframe Exploration",
        description: "Low-fidelity prototyping to establish layout patterns for detail views.",
        // Using the first wireframe as the cover
        image: "https://drive.google.com/thumbnail?id=1xPYT97zzF_diTkG32V3ac1T1bWtvs9wf&sz=w2000",
        detailImages: [
          "https://drive.google.com/thumbnail?id=1xPYT97zzF_diTkG32V3ac1T1bWtvs9wf&sz=w2000",
          "https://drive.google.com/thumbnail?id=19Wje_xesVDm4enHWtA9aXZX9H3sPcAaS&sz=w2000",
          "https://drive.google.com/thumbnail?id=1aXawgBqbBJG7aUKdF5Gg9Cc2458YwM_P&sz=w2000",
          "https://drive.google.com/thumbnail?id=12D2YnFM2Bw1kQaFr0zOffbk5ei6yQoY8&sz=w2000",
          "https://drive.google.com/thumbnail?id=1L0B7x1VmBYC77MufOhMplvPzvxRfMrXl&sz=w2000"
        ]
      },
      {
        title: "Final Interface Design",
        description: "High-fidelity visual design implementation.",
        // Using the first final design as cover
        image: "https://drive.google.com/thumbnail?id=1jsLJj1uTu5v7TW4QEk3UKjRbKmao_NxO&sz=w2000",
        detailImages: [
          "https://drive.google.com/thumbnail?id=1jsLJj1uTu5v7TW4QEk3UKjRbKmao_NxO&sz=w2000",
          "https://drive.google.com/thumbnail?id=1TA747beXZDHTRa-yKYA6BpDlkGA772dY&sz=w2000"
        ]
      }
    ],
    keyTakeaways: "This project strengthened my ability to design not just interfaces, but coherent systems that make information usable."
  },
  {
    id: "naknak-ordering-app",
    title: "NakNak Ordering App",
    category: ProjectCategory.PRODUCT,
    shortDescription: "Designing a frictionless ordering experience for a fast-growing food brand.",
    role: "UI Designer",
    year: "2024",
    image: "https://drive.google.com/thumbnail?id=1-7Yezoavh_tbo6rb4sUPnYlcP2bu_VaY&sz=w2000",
    tags: ["Product Design", "Mobile App", "UX Research"],
    
    overview: "This project focuses on designing a brand-owned ordering experience for NakNak, with an emphasis on improving speed, clarity, and repeat usage. The goal is to streamline how users place orders—especially returning users—by reducing friction across the ordering flow.",
    
    context: "Currently, users rely on third-party delivery platforms to order from NakNak. While these platforms offer reliability and clear pricing, they are not designed for a single-brand experience, limiting consistency and long-term engagement. This creates an opportunity to design a more focused and efficient ordering flow within a dedicated app.",
    
    problem: [
      "NakNak does not yet have an official brand-owned ordering app, creating a gap in brand presence and direct customer engagement.",
      "While general food delivery platforms are reliable and offer clear pricing, they are not designed for a single brand, limiting brand immersion and long-term loyalty.",
      "Frequent customers lack a streamlined, brand-specific reordering experience."
    ],
    
    outcome: "This project presents a structured approach to designing a brand-owned ordering experience. The focus is on improving efficiency and clarity, particularly for users who reorder frequently.",
    
    duration: "3 Months",
    tools: ["Figma", "Canva", "Xmind", "User Interviews"],
    
    process: [
      { 
        title: "Goals", 
        description: [
          "Fill the market gap by launching Nak Nak’s first brand-owned ordering app.",
          "Enable fast, low-friction ordering and reordering for core users.",
          "Provide clear pricing, customization, and reliable order tracking within a consistent brand experience."
        ] 
      },
      { 
        title: "Approach", 
        description: [
          "The design process focused on structuring the ordering experience through key interaction points:",
          "Mapping the overall ordering journey",
          "Defining a repeat-order flow",
          "Translating flows into wireframes",
          "Refining into final UI screens"
        ] 
      }
    ],
    
    uxDecisions: [
      {
        title: "Personas",
        description: [
          "Two personas were defined to capture key ordering behaviors:",
          "A time-pressed student focused on speed and efficiency",
          "A family-oriented user focused on clarity and reliability"
        ],
        image: "https://drive.google.com/thumbnail?id=1ZpP2OthfN8XJyW4abbpMA8UFLEwxGs2e&sz=w2000",
        detailImages: [
          "https://drive.google.com/thumbnail?id=1ZpP2OthfN8XJyW4abbpMA8UFLEwxGs2e&sz=w2000",
          "https://drive.google.com/thumbnail?id=1RW_SuD_-ZZWVJ1V1s9RoYoZtXbaWrRdi&sz=w2000"
        ]
      },
      { 
        title: "User Journey Map", 
        description: "The journey map outlines the end-to-end ordering experience, from browsing to post-order tracking. It helps frame the overall structure of the experience and identify key stages in the ordering flow.",
        image: "https://drive.google.com/thumbnail?id=1GFQ5UZ55imkiUg85Mo-p0Hto4iQqBjTE&sz=w2000"
      },
      { 
        title: "User Flow: Repeat Order", 
        description: "This flow focuses on enabling users to quickly reorder from past purchases, reducing repeated decision-making. Flow: Login → Homepage → Order history → Select past order → Customize → Payment → Tracking",
        image: "https://drive.google.com/thumbnail?id=1FSQUDI-ZVgdAJTLTTc8k1gDsh9D3FewJ&sz=w2000"
      },
      { 
        title: "Wireframes", 
        description: "Wireframes were used to define the structure and hierarchy of the ordering process, ensuring clarity across each step of the flow.",
        image: "https://drive.google.com/thumbnail?id=1M3Z3rSasIp-zffeEDQkuzFy1yiD_Olca&sz=w2000"
      },
      {
        title: "Key Insights",
        description: [
          "Reducing repeated decisions improves ordering efficiency",
          "Clear structure increases user confidence during checkout",
          "Supporting repeat interactions is key for frequent users"
        ]
      },
      {
        title: "Design Opportunities",
        description: [
          "Simplify repeat ordering through order history",
          "Improve clarity in customization and pricing",
          "Strengthen consistency within a brand-focused experience"
        ]
      }
    ],
    
    uiExecution: [
      {
        title: "Final UI Screens",
        description: [
          "The final screens support the full ordering journey:",
          "Browsing and selecting items",
          "Customizing orders",
          "Completing checkout",
          "Tracking order status",
          "Leaving reviews and ratings",
          "Managing personal profile and preferences"
        ],
        images: ["https://drive.google.com/thumbnail?id=1T66HUVgk4CByQk_FaNK2sUleSxP5uGlv&sz=w2000"]
      }
    ],
    
    prototypeLink: "https://www.figma.com/proto/9Mu7YvvefMSg0d15e4MVbg/Nak-Nak-Ordeing-App?node-id=17-4304&t=MuBlSRWoQdQy1R5M-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A282&show-proto-sidebar=1",
    
    keyTakeaways: [
      "This project reinforced the importance of designing within a controlled product environment.",
      "A brand-owned app creates the conditions for clearer structure, more efficient interactions, and a more consistent user experience over time."
    ]
  },
  {
    id: "mbti-search",
    title: "MBTI & Search Behaviors",
    category: ProjectCategory.RESEARCH,
    shortDescription: "Investigating how personality types influence information retrieval strategies.",
    role: "Lead Researcher",
    year: "2024",
    image: "https://drive.google.com/thumbnail?id=1vpnTogdkR-WKvX93tO1hYG7d_GbSppSB&sz=w2000",
    tags: ["Quantitative Research", "HCI", "SPSS", "Cognitive Psych"],
    
    overview: "This project explores how personality traits (MBTI) influence user behavior during learning-oriented search tasks. The goal is to uncover how different users search, process, and interact with information, and how search systems can better support personalized learning experiences.",
    
    context: "Search is increasingly recognized as a learning process rather than just an information retrieval activity. However, most search systems are designed with a “one-size-fits-all” approach, overlooking individual differences in cognition and decision-making. This project investigates how personality traits (specifically MBTI dimensions S/N and T/F) and task complexity shape users’ search, reading, and note-taking behaviors.",
    
    problem: "Current search experiences do not adapt to different cognitive styles (e.g., intuitive vs. sensory users), decision-making patterns (thinking vs. feeling), or levels of task complexity. This creates a gap between how users naturally learn and how search systems are designed.",
    
    outcome: "This project highlights the importance of designing search systems that align with users’ cognitive styles and learning behaviors. By bridging personality, task context, and interaction design, we can create more personalized and effective learning experiences.",
    
    duration: "6 Months",
    tools: ["YASBIL (Log Analysis)", "EV (Screen Recording)", "SPSS", "Bloom's Taxonomy"],
    
    process: [
      { 
        title: "Research Questions", 
        description: "1. How do MBTI personality dimensions (S/N, T/F) influence search interaction behavior? 2. How does task complexity affect user behavior in learning-oriented search tasks? 3. How do personality and task complexity interact to shape user strategies?" 
      },
      { 
        title: "Methodology", 
        description: "We conducted a controlled user experiment with undergraduate participants. Process: Participants completed an MBTI-based questionnaire. Each participant performed three types of learning-oriented search tasks: Fact-based (low complexity), Evaluation (medium complexity), and Creation (high complexity)." 
      },
      { 
        title: "Data Collection", 
        description: "User interactions were recorded and analyzed across three behavioral dimensions: Search behavior (queries, SERP interactions), Reading behavior (time, content engagement), and Note-taking behavior (frequency, timing, duration)." 
      }
    ],
    
    uxDecisions: [
      {
        title: "Task Complexity Drives Behavior",
        description: [
          "Higher complexity tasks led to more queries, longer sessions, and more iterative search behavior.",
          "Users spent more time processing and organizing information in complex tasks."
        ]
      },
      {
        title: "Personality Affects Search Strategy",
        description: [
          "Intuitive users (N) explored more pages and interacted more broadly with search results.",
          "Sensory users (S) were more focused and selective in their interactions."
        ]
      },
      {
        title: "Interaction Effects Matter",
        description: [
          "Personality traits and task complexity together significantly influence information exploration depth.",
          "Note-taking behavior and engagement with search results vary based on these interactions."
        ]
      },
      {
        title: "Learning Behavior is Multi-Stage",
        description: [
          "Search is not just about finding answers, but includes Exploration, Evaluation, and Synthesis."
        ]
      },
      {
        title: "Insights",
        description: [
          "Users approach search differently based on how they perceive and process information.",
          "A single static search interface cannot effectively support all users.",
          "Learning-oriented search requires support for both exploration and structured thinking."
        ]
      },
      {
        title: "Design Opportunities",
        description: [
          "Adaptive search interfaces based on user behavior patterns.",
          "Support for different cognitive styles (e.g., exploratory vs. structured navigation).",
          "Integrated note-taking and knowledge organization tools.",
          "Context-aware UI that adapts to task complexity."
        ]
      }
    ],
    
    uiExecution: [], // Pure research project
    
    keyTakeaways: "This project reshaped my understanding of search as a learning process rather than a simple interaction. It taught me that good UX is not only about clarity and usability, but about adapting to how different users think, explore, and make decisions."
  },
  {
    id: "llm-code-switching",
    title: "Code-Switching in LLMs",
    category: ProjectCategory.RESEARCH,
    shortDescription: "Analyzing multilingual interactions with Large Language Models.",
    role: "Researcher",
    year: "2025",
    image: "https://drive.google.com/thumbnail?id=10MJ0vFZzuyrlxw3_44o0gwMTtN90CTHG&sz=w2000",
    tags: ["HCI", "LLM", "Mixed Methods", "Linguistics"],
    
    overview: "This project explores how multilingual users naturally switch between languages (code-switching) when interacting with large language models (LLMs). The goal is to understand how users choose languages, when and why they switch, and how current AI systems fail to support these behaviors — in order to inform better multilingual interaction design.",
    
    context: "With the rapid adoption of LLMs, conversational AI has become a new form of search and knowledge interaction. Unlike traditional search engines, LLMs allow users to interact using natural language — often across multiple languages within a single conversation. However, most existing research focuses on model performance rather than real user behavior in multilingual contexts. This creates a gap between how users actually communicate and how AI systems are designed.",
    
    problem: "Current LLM interactions do not effectively support multilingual behavior: Limited understanding of code-switching within a single conversation, inconsistent translation quality across mixed-language inputs, lack of adaptation to user language preference and context, and poor handling of cultural nuance and multilingual intent. As a result, users must manually adjust their language strategies instead of being supported by the system.",
    
    outcome: "This project reframes multilingual interaction as a core UX challenge in AI systems. By understanding real user behavior, we can design more natural, adaptive, and human-centered AI interactions.",
    
    duration: "5 Months",
    tools: ["Survey", "Semi-structured Interviews", "User Log Analysis"],
    
    process: [
      { 
        title: "Research Questions", 
        description: [
          "How do multilingual users choose languages when interacting with LLMs?",
          "What forms of code-switching occur in real interactions?",
          "What motivates users to switch languages?",
          "What challenges do users face in multilingual AI interactions?"
        ]
      },
      { 
        title: "Methodology", 
        description: [
          "A mixed-methods approach was used to capture both breadth and depth:",
          "Survey (n = 84): Multilingual users to establish baseline behaviors.",
          "Semi-structured Interviews (n = 20): To explore motivations and 'why' behind the behavior.",
          "User Log Analysis: Analyzing real interaction screenshots to verify reported behaviors."
        ]
      },
      {
        title: "Data Collected",
        description: [
          "Language choice behavior",
          "Code-switching frequency and patterns",
          "User motivations",
          "Pain points in interaction experience"
        ]
      }
    ],
    
    uxDecisions: [
      {
        title: "Code-Switching is the Norm",
        description: [
          "96.4% of users reported switching or mixing languages during interaction.",
          "Multilingual interaction is not an edge case, but a default behavior."
        ]
      },
      {
        title: "Language Familiarity Drives Choice",
        description: [
          "Users primarily choose the language they are most fluent in.",
          "Efficiency and clarity are key decision factors."
        ]
      },
      {
        title: "Context Determines Language",
        description: [
          "Users switch languages based on task domain (e.g., academic vs casual), output requirements, and cultural relevance."
        ]
      },
      {
        title: "Three Types of Code-Switching",
        description: [
          "Inter-sentential (switching between sentences).",
          "Intra-sentential (mixing within a sentence).",
          "Tag switching (inserting words or phrases)."
        ]
      },
      {
        title: "Motivation: Efficiency Over Purity",
        description: [
          "Users switch languages to express ideas more precisely, reduce cognitive effort, and match expected output language."
        ]
      },
      {
        title: "Pain Points",
        description: [
          "Poor recognition of mixed-language input.",
          "Inconsistent or inaccurate translation.",
          "Lack of contextual understanding across languages.",
          "Rigid interaction flow that ignores user language patterns."
        ]
      },
      {
        title: "Insights",
        description: [
          "Multilingual interaction is fluid, not segmented.",
          "Language is part of user cognition, not just interface input.",
          "Users expect AI to adapt — not the other way around.",
          "Code-switching is a feature, not a problem."
        ]
      },
      {
        title: "Design Opportunities",
        description: [
          "Context-aware language detection within conversations.",
          "Seamless code-switching support without breaking flow.",
          "Adaptive response language based on user intent.",
          "Improved translation aligned with context and domain.",
          "Cultural-aware response generation."
        ]
      }
    ],
    
    uiExecution: [], // Pure research project
    
    keyTakeaways: "This project changed how I think about language in UX. Language is not just a medium of interaction — it reflects how users think, switch contexts, and express meaning. Designing for multilingual users means designing for fluidity, not constraints."
  }
];

export const PLAYGROUND_ITEMS = [
  {
    id: "exploration-01",
    title: "Neumorphism Calculator",
    date: "Jan 2024",
    description: "Exploring soft UI trends with a functional calculator interface.",
    image: "https://picsum.photos/seed/playground1/400/400"
  },
  {
    id: "exploration-02",
    title: "Glassmorphism Dashboard",
    date: "Dec 2023",
    description: "A study on background blur and hierarchy in complex data sets.",
    image: "https://picsum.photos/seed/playground2/400/400"
  },
  {
    id: "exploration-03",
    title: "Kinetic Typography",
    date: "Nov 2023",
    description: "Motion experiment using GSAP and splitting.js.",
    image: "https://picsum.photos/seed/playground3/400/400"
  }
];
