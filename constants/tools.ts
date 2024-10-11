interface AITool {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export const AITools: AITool[] = [
  { id: 1, name: "AI Image Generator", description: "Generate images from text prompts.", image: "/images/earth.png", category: "Image", link: "/ai-tools/image-generator" },
  { id: 2, name: "AI Text Summarizer", description: "Summarize long texts into concise summaries.", image: "/images/earth.png", category: "Text", link: "/ai-tools/text-summarizer" },
  { id: 3, name: "AI Code Assistant", description: "Get code suggestions and assistance in various languages.", image: "/images/earth.png", category: "Developer Tools", link: "/ai-tools/code-assistant" },
  { id: 4, name: "AI Voice Synthesizer", description: "Synthesize realistic voice from text.", image: "/images/earth.png", category: "Audio", link: "/ai-tools/voice-synthesizer" },
  { id: 5, name: "AI Data Analyzer", description: "Analyze data and provide insights.", image: "/images/earth.png", category: "Data", link: "/ai-tools/data-analyzer" },
  { id: 6, name: "AI Language Translator", description: "Translate text between different languages.", image: "/images/earth.png", category: "Text", link: "/ai-tools/language-translator" },
  { id: 7, name: "AI Music Composer", description: "Generate music from text descriptions.", image: "/images/earth.png", category: "Music", link: "/ai-tools/music-composer" },
  { id: 8, name: "AI Video Editor", description: "Edit videos using AI-generated suggestions.", image: "/images/earth.png", category: "Design", link: "/ai-tools/video-editor" },
  { id: 9, name: "AI Recipe Generator", description: "Generate recipes based on ingredients.", image: "/images/earth.png", category: "Food", link: "/ai-tools/recipe-generator" },
  { id: 10, name: "AI Financial Advisor", description: "Get financial advice from AI.", image: "/images/earth.png", category: "Finance", link: "/ai-tools/financial-advisor" },
  { id: 11, name: "AI Stock Predictor", description: "Predict stock movements using AI.", image: "/images/earth.png", category: "Finance", link: "/ai-tools/stock-predictor" },
  { id: 12, name: "AI Chatbot", description: "Automate customer service with an AI-powered chatbot.", image: "/images/earth.png", category: "Chat", link: "/ai-tools/chatbot" },
  { id: 13, name: "AI Sentiment Analyzer", description: "Analyze customer feedback and reviews for sentiment.", image: "/images/earth.png", category: "Text", link: "/ai-tools/sentiment-analyzer" },
  { id: 14, name: "AI Marketing Assistant", description: "Get marketing strategies and content suggestions.", image: "/images/earth.png", category: "Marketing & Sales", link: "/ai-tools/marketing-assistant" },
  { id: 15, name: "AI Social Media Manager", description: "Manage social media posts and interactions using AI.", image: "/images/earth.png", category: "Marketing & Sales", link: "/ai-tools/social-media-manager" },
  { id: 16, name: "AI Writing Assistant", description: "Improve your writing with AI suggestions.", image: "/images/earth.png", category: "Text", link: "/ai-tools/writing-assistant" },
  { id: 17, name: "AI Personal Trainer", description: "Get personalized workout plans from AI.", image: "/images/earth.png", category: "Health", link: "/ai-tools/personal-trainer" },
  { id: 18, name: "AI Nutrition Planner", description: "Get AI-generated meal plans.", image: "/images/earth.png", category: "Health", link: "/ai-tools/nutrition-planner" },
  { id: 19, name: "AI Medical Assistant", description: "Get medical advice and suggestions from AI.", image: "/images/earth.png", category: "Health", link: "/ai-tools/medical-assistant" },
  { id: 20, name: "AI Cybersecurity Assistant", description: "Improve your security with AI analysis.", image: "/images/earth.png", category: "AI Detection", link: "/ai-tools/cybersecurity-assistant" },
  { id: 21, name: "AI Facial Recognition", description: "Detect faces in images using AI.", image: "/images/earth.png", category: "AI Detection", link: "/ai-tools/facial-recognition" },
  { id: 22, name: "AI Object Detection", description: "Identify objects in images.", image: "/images/earth.png", category: "AI Detection", link: "/ai-tools/object-detection" },
  { id: 23, name: "AI Background Remover", description: "Automatically remove backgrounds from images.", image: "/images/earth.png", category: "Image", link: "/ai-tools/background-remover" },
  { id: 24, name: "AI Resume Builder", description: "Create professional resumes with AI assistance.", image: "/images/earth.png", category: "Career", link: "/ai-tools/resume-builder" },
  { id: 25, name: "AI Job Interview Coach", description: "Prepare for interviews with AI.", image: "/images/earth.png", category: "Career", link: "/ai-tools/job-interview-coach" },
  { id: 26, name: "AI Study Assistant", description: "Get study tips and organize notes with AI.", image: "/images/earth.png", category: "Education", link: "/ai-tools/study-assistant" },
  { id: 27, name: "AI Language Learning", description: "Learn new languages with AI tutors.", image: "/images/earth.png", category: "Education", link: "/ai-tools/language-learning" },
  { id: 28, name: "AI Math Solver", description: "Solve complex math problems with AI.", image: "/images/earth.png", category: "Education", link: "/ai-tools/math-solver" },
  { id: 29, name: "AI Document Scanner", description: "Scan and digitize documents using AI.", image: "/images/earth.png", category: "Document", link: "/ai-tools/document-scanner" },
  { id: 30, name: "AI Speech-to-Text", description: "Convert speech into text.", image: "/images/earth.png", category: "Audio", link: "/ai-tools/speech-to-text" },
  { id: 31, name: "AI Game Assistant", description: "Get help in video games with AI strategies.", image: "/images/earth.png", category: "Entertainment", link: "/ai-tools/game-assistant" },
  { id: 32, name: "AI Art Assistant", description: "Get creative art suggestions from AI.", image: "/images/earth.png", category: "Image", link: "/ai-tools/art-assistant" },
  { id: 33, name: "AI 3D Model Generator", description: "Generate 3D models from descriptions.", image: "/images/earth.png", category: "Design", link: "/ai-tools/3d-model-generator" },
  { id: 34, name: "AI Home Designer", description: "Create home designs with AI suggestions.", image: "/images/earth.png", category: "Design", link: "/ai-tools/home-designer" },
  { id: 35, name: "AI Travel Planner", description: "Plan trips with AI-generated itineraries.", image: "/images/earth.png", category: "Travel", link: "/ai-tools/travel-planner" },
  { id: 36, name: "AI Weather Forecaster", description: "Get weather predictions with AI.", image: "/images/earth.png", category: "Science", link: "/ai-tools/weather-forecaster" },
  { id: 37, name: "AI Virtual Stylist", description: "Get outfit suggestions from AI.", image: "/images/earth.png", category: "Fashion", link: "/ai-tools/virtual-stylist" },
  { id: 38, name: "AI Sports Analyzer", description: "Analyze sports strategies and performances.", image: "/images/earth.png", category: "Sports", link: "/ai-tools/sports-analyzer" },
  { id: 39, name: "AI Time Manager", description: "Organize your time with AI-powered calendars.", image: "/images/earth.png", category: "Productivity", link: "/ai-tools/time-manager" },
  { id: 40, name: "AI Task Automator", description: "Automate daily tasks with AI.", image: "/images/earth.png", category: "Productivity", link: "/ai-tools/task-automator" },
];
