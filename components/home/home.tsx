'use client'

import { useState } from 'react'
import Image  from 'next/image'
import Link from 'next/link'

import { Search, Filter, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { categories } from '../../constants/categories';


const aiTools = [
  { id: 1, name: "AI Image Generator", price: 0.05, image: "/placeholder.svg?height=200&width=200", category: "Image" },
  { id: 2, name: "AI Text Summarizer", price: 0.03, image: "/placeholder.svg?height=200&width=200", category: "Text" },
  { id: 3, name: "AI Code Assistant", price: 0.08, image: "/placeholder.svg?height=200&width=200", category: "Code" },
  { id: 4, name: "AI Voice Synthesizer", price: 0.06, image: "/placeholder.svg?height=200&width=200", category: "Audio" },
  { id: 5, name: "AI Data Analyzer", price: 0.07, image: "/placeholder.svg?height=200&width=200", category: "Data" },
  { id: 6, name: "AI Language Translator", price: 0.04, image: "/placeholder.svg?height=200&width=200", category: "Text" },
]

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("name")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAndSortedTools = aiTools
    .filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || tool.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "name") return a.name.localeCompare(b.name)
      if (sortOrder === "price") return a.price - b.price
      return 0
    })

  return (
    <div className="min-h-screen bg-background">

      <nav>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link passHref href="/">
            <h1 className="text-4xl font-bold tracking-tight">Coollectiva</h1>
          </Link>
          <div className="flex space-x-4 items-center">
            <Button variant="default">
              <p className="font-semibold text-base">
                Submit a Tool
              </p>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search your favorite AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2" size={20} />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortOrder("name")}>Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder("price")}>Price</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-1.5 rounded-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTools.map((tool) => (
            <Card key={tool.id} className="flex flex-col">
              <CardHeader>
                <Image src={tool.image} alt={tool.name} height={20} width={20} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2">{tool.name}</CardTitle>
                <p className="text-2xl font-bold text-primary">{tool.price} ETH</p>
                <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}