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

// TODO: Make this function return in format 2 Aug, 2018
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  // console.log(date.getMonth());
  // const args = [
  //   lang,
  //   { day: 'numeric', month: 'long', year: 'numeric' },
  // ].filter(Boolean);
  // return date.toLocaleDateString(...args);
  return date.toDateString().slice(4);
}
