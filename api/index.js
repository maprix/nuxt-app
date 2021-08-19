import express from 'express';

const app = express();

app.use(express.json());

/** 
* logic for our api will go here
*/
app.get('/drafts', async (req, res) => {
    const posts = await prisma.post.findMany({
      where: { published: false },
      include: { author: true }
    })
    res.json(posts)
});

export default {
  path: '/api',
  handler: app
};
