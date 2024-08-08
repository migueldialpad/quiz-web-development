'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Article {
  id: string
  title: string
  body: string
}

export function HomeArticles () {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const init = async () => {
      const data = await fetch('/api/home-articles')
      const json = await data.json()
      setArticles(json.posts)
    }
    init()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-4 mx-[3.5%] my-7'>
      {articles.map((article) => (
      <Card key={article.id} className="w-[350px]">
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{article.body}</CardDescription>
        </CardContent>
      </Card>
      ))}
    </div>
  )
}
