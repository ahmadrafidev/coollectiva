import Image from 'next/image'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
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
    <Card key={id} className="flex flex-col">
      <CardHeader>
        <Image src={image} alt={name} height={20} width={20} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{category}</p>
        <p className="mt-2">{description}</p>
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
