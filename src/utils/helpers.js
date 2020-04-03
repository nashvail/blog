import React from "react"
import ArticlePreview from "../components/ArticlePreview"

export function renderArticlePreviews(articles) {
  // articles is an array of json article objects
  let articlesArray = []
  articles.forEach(article => {
    let { title, link, spoiler, category, publishDate, cover, recent } = article.node

    return articlesArray.push(
      <ArticlePreview
        title={title}
        link={link}
        spoiler={spoiler}
        category={category}
        publishDate={publishDate}
        cover={cover.childImageSharp.fluid}
        recent={recent}
      />
    )
  })
  return articlesArray
}

export function isExternalLink(link) {
  let re = new RegExp("^(http|https)://", "i")
  return re.test(link)
}

// Something is wrong
export function generateTweetLink(postTitle, postPath) {
  return `https://twitter.com/intent/tweet/?text=${postTitle}&url=https://nashvail.me${postPath}%2F&via=nashvail`
}

// TODO: Make this function return in format 2 Aug, 2018
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date
  }

  date = new Date(date)
  // console.log(date.getMonth());
  // const args = [
  //   lang,
  //   { day: 'numeric', month: 'long', year: 'numeric' },
  // ].filter(Boolean);
  // return date.toLocaleDateString(...args);
  return date.toDateString().slice(4)
}
