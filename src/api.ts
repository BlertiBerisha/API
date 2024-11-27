import { type Express, type Request, type Response } from 'express'

export const initializeAPI = (app: Express) => {
  let posts = [{ id: 1, content: 'I feel like' }]
 
  app.get('/posts', (req: Request, res: Response) => {
    res.send(posts)
  })

  app.post('/post', function (req, res) {
      res.send(posts)
      let post = req.body
      console.log(post)
  })
  
  app.put('/', function (req, res) {
      res.send(posts)
  })
  
  app.delete('/', function (req, res) {
      res.send(posts)
  })

}