const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((totalLikes, blog) => totalLikes + blog.likes, 0)
}

const favoriteBlog = blogs =>
  blogs.reduce((a, b) => {
    return a.likes > b.likes
      ? { title: a.title, author: a.author, likes: a.likes }
      : { title: b.title, author: b.author, likes: b.likes }
  })

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
