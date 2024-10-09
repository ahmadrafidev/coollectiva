import { FC } from "react"
import { Search, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface EmptyStatusProps {
  type: "no-results" | "no-category"
  onAction?: () => void
  actionLabel?: string
}

export const EmptyStatus: FC<EmptyStatusProps> = ({ type, onAction, actionLabel = "Try Again" }) => {
  const config = {
    "no-results": {
      icon: Search,
      title: "No results found",
      description: "We couldn't find any results matching your search. Try adjusting your query.",
    },
    "no-category": {
      icon: Layers,
      title: "No suitable category",
      description: "There are no items in this category. Try switching to a different tab.",
    },
  }

  const { icon: Icon, title, description } = config[type]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground mb-6">{description}</p>
        {onAction && (
          <Button onClick={onAction} className="w-full sm:w-auto">
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
