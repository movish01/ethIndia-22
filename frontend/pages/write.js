import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [tags, setTags] = useState([]);
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    setLoad(true);
    try {
      await axios.post("http://localhost:4000/api/news", {
        // _id: Date.now().toString(),
        _tags: tags,
        _body: body,
        _title: title,
      });
    } catch (err) {
      console.log(err);
    }
    setLoad(false);
  };

  return (
    <div>
      <div className="text-2xl ml-14 mr-14 font-bold text-purple-500">
        Publish for the people:
      </div>
      <div className="flex flex-col ml-96 mb-24 mr-64 mt-8 gap-4">
        <div className="flex flex-row gap-4 items-center">
          <label className="text-xl">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs ml-20"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="text-xl">Tags</label>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary ml-24 btn-sm m-1">
              Choose Tags
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={(e) => setTags(["science"])}>
                <a>Science</a>
              </li>
              <li onClick={(e) => setTags(["education"])}>
                <a>Education</a>
              </li>
              <li onClick={(e) => setTags(["lifestle"])}>
                <a>Lifestyle</a>
              </li>
              <li onClick={(e) => setTags(["others"])}>
                <a>Others</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start grow">
          <label className="text-xl">Content</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="textarea textarea-bordered ml-16 w-96 h-96"
            placeholder="Write here!"
          ></textarea>
        </div>
        <Link href="">
          <button
            className="w-24 ml-32 btn btn-primary btn-outline"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
