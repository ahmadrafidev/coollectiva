import Image from 'next/image'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardTitle 
} from "@/components/ui/card"

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export function ProductCard({ id, name, description, image, category, link }: ProductProps) {
  return (
    <Card key={id} className="grid grid-rows-3 gap-1">
      <Image 
        quality={100} 
        src={image} 
        alt={name} 
        height={300} 
        width={300} 
        className="w-full object-cover rounded-lg row-span-3" 
      />
      <CardContent className="flex-grow mt-2">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <h2 className="text-sm text-muted-foreground">{category}</h2>
        <p className="text-base mt-2">{description}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Link href={link} passHref>
          <Button>
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
