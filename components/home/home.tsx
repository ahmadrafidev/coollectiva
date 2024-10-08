'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Search, Filter, User } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { categories } from '../../constants/categories';
import { AITools } from '../../constants/tools';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("name")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAndSortedTools = AITools
    .filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || tool.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  

  return (
    <div className="min-h-screen bg-background">

      <nav>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link passHref href="/">
            <h1 className="text-3xl font-bold tracking-tight">Coollectiva</h1>
          </Link>
          <div className="flex space-x-4 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <p className="font-semibold text-base">
                    Submit
                  </p>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Submit AI Tool</DialogTitle>
                  <DialogDescription>
                    Please fill out the form below to submit a new AI tool.
                  </DialogDescription>
                </DialogHeader>
                <form>
                  <div className="space-y-4">

                    <div>
                      <Label Label htmlFor="toolName">Tool Name</Label>
                      <Input type="text" placeholder="AI Notetakers" className="w-full" />
                    </div>

                    <div>
                      <Label Label htmlFor="toolURL">Tool URL</Label>
                      <Input type="url" placeholder="URL" className="w-full" />
                    </div>

                    <div>
                      <Label Label htmlFor="toolDescription">Tool Description</Label>
                      <Input type="text" placeholder="Automatically captures and organizes meeting notes with real-time transcription and summaries." className="w-full" />
                    </div>

                    <div>
                      <Label htmlFor="toolCategory">Tool Category</Label>
                      <Select onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>


                    <div>
                      <Label Label htmlFor="toolSocials">Tool Socials</Label>
                      <Input type="url" placeholder="X, Github, etc" className="w-full" />
                    </div>
                        
                  </div>
                </form>
                <DialogFooter>
                  <Button variant="ghost">Cancel</Button>
                  <Button type="submit">Submit</Button> 
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
              placeholder="Search..."
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
                <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                <p className="mt-2">{tool.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" as="a" href={tool.link}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
