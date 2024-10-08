interface AITool {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export const AITools: AITool[] = [
  { id: 1, name: "AI Image Generator", description: "Generate images from text prompts.", image: "/placeholder.svg?height=200&width=200", category: "Image", link: "/ai-tools/image-generator" },
  { id: 2, name: "AI Text Summarizer", description: "Summarize long texts into concise summaries.", image: "/placeholder.svg?height=200&width=200", category: "Text", link: "/ai-tools/text-summarizer" },
  { id: 3, name: "AI Code Assistant", description: "Get code suggestions and assistance in various languages.", image: "/placeholder.svg?height=200&width=200", category: "Code", link: "/ai-tools/code-assistant" },
  { id: 4, name: "AI Voice Synthesizer", description: "Synthesize realistic voice from text.", image: "/placeholder.svg?height=200&width=200", category: "Audio", link: "/ai-tools/voice-synthesizer" },
  { id: 5, name: "AI Data Analyzer", description: "Analyze data and provide insights.", image: "/placeholder.svg?height=200&width=200", category: "Data", link: "/ai-tools/data-analyzer" },
  { id: 6, name: "AI Language Translator", description: "Translate text between different languages.", image: "/placeholder.svg?height=200&width=200", category: "Text", link: "/ai-tools/language-translator" },
];
