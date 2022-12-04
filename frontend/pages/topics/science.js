import { useState, useEffect } from "react";
import Link from "next/link";

export default function Science() {
  const [news, setNews] = useState([
    {
      _title: "Integration of Science in Daily Lives",
      _body:
        " Here goes the content, we have to specify how much content is to be shown, as it is not possible to show all the contents of the article, so we have to restrict the text of the content shown.",
      _date: "3rd December, 2020 | 05:36 AM",
      _tags: ["science", "lifestyle"],
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
    <div className="ml-12 mr-12 font-mono flex flex-col">
      <div className="text-4xl font-bold text-purple-500 mb-4">Science</div>
      <div className="flex flex-col">
        {news.map((data, idx) => {
          return (
            <div className="flex flex-row gap-4">
              <div className="border-4 border-purple-300 flex flex-col rounded-lg basis-1/4">
                <span className="mt-4 ml-4 inline-block font-bold text-2xl">
                  {data._title}
                </span>
                <div className="flex flex-row gap-2 ml-4 mt-2 text-purple-500">
                  {data._tags.map((tag, idx) => {
                    return (
                      <text className="bg-purple-300 border-0 text-xs rounded-lg px-2">
                        {tag}
                      </text>
                    );
                  })}
                </div>
                <div className="mt-2 ml-4 italic text-s text-gray-500">
                  {data._date}
                </div>
                <div className="mt-3 ml-4 mr-4 grow">{data._body}</div>
                <div>
                  <button className="btn btn-primary btn-outline mb-4 mr-4 float-right">
                    Read More
                  </button>
                </div>
              </div>
              {/* <div className="border-4 border-purple-300 flex flex-col rounded-lg basis-1/4">
                <span className="mt-4 ml-4 inline-block font-bold text-2xl">
                  Evolvement of Science and Technology
                </span>
                <div className="flex flex-row gap-2 ml-4 mt-2 text-purple-500">
                  <text className="bg-purple-300 border-0 text-xs rounded-lg px-2">
                    science
                  </text>
                  <text className="bg-purple-300 border-0 text-xs rounded-lg px-2">
                    technology
                  </text>
                </div>
                <div className="mt-2 ml-4 italic text-s text-gray-500">
                  3rd December, 2020 | 05:36 AM
                </div>
                <div className="mt-3 ml-4 mr-4 grow">
                  Here goes the content, we have to specify how much content is
                  to be shown, as it is not possible to show all the contents of
                  the article.
                </div>
                <div>
                  <button className="btn btn-primary btn-outline mb-4 mr-4 float-right">
                    Read More
                  </button>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
