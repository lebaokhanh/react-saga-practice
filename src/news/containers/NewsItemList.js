import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect"
import NewsItem from "./NewsItem";
import _ from "lodash";


const renderNewsItemList = (articles) => {
  return articles.map((article, index) => (
    <NewsItem key={index} article={article} />
  ))
}

const articlesSelector = (state) => state.articles;
const articlesFromSourceSelector = createSelector(
  articlesSelector,
  (_, sourceName) => sourceName,
  (articles, sourceName) => _.filter(articles, article => _.isEqual(article.source.name, sourceName))
)

const NewsItemList = () => {
  const myArticles = useSelector(state => articlesFromSourceSelector(state, "New York Times"))
  return(
    <div>
      {renderNewsItemList(myArticles)}
    </div>
  )
}

export default NewsItemList;
