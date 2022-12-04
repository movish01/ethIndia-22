import { useState, useEffect } from "react";
import Link from "next/link";
import NewsDetails from "./news/news-details";
import axios from "axios";

export default function Home() {
  const [news, setNews] = useState([
    {
      _title: "DAO Maker - Community Investigates",
      _body:
        " Here goes the content, we have to specify how much content is to be shown, as it is not possible to show all the contents of the article, so we have to restrict the text of the content shown.",
      _date: "3rd December, 2020 | 05:36 AM",
      _tags: ["DAO", "Investigations"],
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("http://localhost:4000//api/news");
        setNews(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-16 font-mono">
      <div className="flex gap-4 flex-row ml-12 mr-12 h-96">
        <div className="border-4 border-purple-300 flex flex-col rounded-lg basis-1/2">
          <span className="mt-4 ml-4 inline-block font-bold text-4xl">
            {news[0]._title}
          </span>
          <div className="flex flex-row gap-2 ml-4 mt-2 text-purple-500">
            {news[0]._tags.map((data, idx) => {
              return (
                <text
                  id={idx}
                  className="bg-purple-200 border-0 rounded-lg px-2"
                >
                  {data}
                </text>
              );
            })}
          </div>
          <div className="mt-2 ml-4 italic text-gray-500">{news[0]._date}</div>
          <div className="mt-3 ml-4 mr-4 grow">{news[0]._body}</div>
          <div>
            <Link href="./news/dao-news">
              <button className="btn btn-primary btn-outline mb-4 mr-4 float-right">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 flex-col basis-1/2 h-96">
          {news.map((data, idx) => {
            return idx === 0 ? (
              <></>
            ) : (
              <>
                <div className="border-4 border-purple-300 rounded-lg basis-1/2">
                  {data._title}
                </div>
                <div className="border-4 border-purple-300 rounded-lg basis-1/2">
                  {data._body}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 flex-col ml-12 mr-12 h-96">
        <span className="text-4xl font-bold text-purple-500">
          <Link href="/">All News</Link>
        </span>
        <div className="flex gap-4 flex-row">
          <div className="border-4 border-purple-300 rounded-lg basis-1/4 news"></div>
          <div className="border-4 border-purple-300 rounded-lg basis-1/4"></div>
        </div>
      </div>
    </div>
  );
}
