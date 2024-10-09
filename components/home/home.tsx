'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Search, Filter, User } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination"

import { categories } from '../../constants/categories';
import { AITools } from '../../constants/tools';
import { ProductCard } from '../ProductCard/ProductCard';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("name")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filteredAndSortedTools = AITools
    .filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || tool.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const totalPages = Math.ceil(filteredAndSortedTools.length / itemsPerPage);

  const paginatedTools = filteredAndSortedTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">

      <nav>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link passHref href="/">
            <div className="flex flex-row items-center">
              <Image alt="coollectiva icon" src="/images/cube.png" width={40} height={40}/>
              <h1 className="text-2xl font-bold tracking-tighter mx-1">Coollectiva</h1>
            </div>
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
                      <Label htmlFor="toolName">Name</Label>
                      <Input type="text" placeholder="AI Notetakers" className="w-full" />
                    </div>

                    <div>
                      <Label htmlFor="toolDescription">Description</Label>
                      <Input type="text" placeholder="Automatically captures and organizes meeting notes." className="w-full" />
                    </div>  

                    <div>
                      <Label htmlFor="toolCategory">Category</Label>
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
                      <Label htmlFor="toolURL">URL</Label>
                      <Input type="url" placeholder="URL" className="w-full" />
                    </div>     

                    <div>
                      <Label htmlFor="toolSocials">Socials</Label>
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
          {paginatedTools.map((tool) => (
              <ProductCard
                key={tool.id}
                id={tool.id}
                name={tool.name}
                description={tool.description}
                image={tool.image}
                category={tool.category}
                link={tool.link}
              />
            ))}
        </div>

        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink href="#" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </main>
    </div>
  )
}
