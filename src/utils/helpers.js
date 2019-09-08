import React from "react";
import ArticlePreview from "../components/ArticlePreview";

export function renderArticlePreviews(articles) {
  // articles is an array of json article objects
  let articlesArray = []
  articles.forEach(article => {
    let { title, link, spoiler, category, publishDate } = article.node
    return articlesArray.push(
      <ArticlePreview
        title={title}
        link={link}
        spoiler={spoiler}
        category={category}
        publishDate={publishDate}
      />
    )
  })
  return articlesArray
}

export function isExternalLink(link) {
  let re = new RegExp("^(http|https)://", "i");
  return re.test(link);
}
