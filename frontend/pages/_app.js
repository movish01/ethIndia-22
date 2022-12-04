import "../styles/index.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 20 - backgroundTransparacyVar * 10;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div className="font-mono">
      <head>
        <title>Journalism</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <nav className="top-0">
        <div className="ml-12 mr-12 mt-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-6xl text-gray-900 font-semibold">
              <Link href="/">
                <a className="mr-6 text-black-500 font-mono">
                  DAC<span className="text-purple-500">RJ</span>
                </a>
              </Link>
            </span>
            <div className="flex flex-row gap-4">
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-primary btn-outline btn-sm btn-circle absolute right-4 top-4"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Help us in maintaining this app
                  </h3>
                  <p className="py-4">
                    Donate on the following address through zkBob: address
                  </p>
                </div>
              </div>
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary btn-outline"
              >
                Support Us
              </label>
              <button className="btn btn-primary">Connect Wallet</button>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className="sticky top-0 z-10 flex items-center justify-between"
        style={{
          background: `rgba(255, 255, 255)`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="flex grow ml-12 text-gray-900 border-2 border-gray-400 rounded-lg mr-6">
          <Link href="/">
            <a className="mr-4 ml-4 mt-3 mb-2 text-gray-500 hover:text-purple-500 font-medium">
              Home
            </a>
          </Link>
          <Link href="/topics/science">
            <a className="mr-4 ml-4 mt-3 mb-2 text-gray-500 hover:text-purple-500 font-medium">
              Science
            </a>
          </Link>
          <Link href="/topics/education">
            <a className="ml-4 mr-4 mt-3 mb-2 text-gray-500 hover:text-purple-500 font-medium">
              Education
            </a>
          </Link>
          <Link href="/topics/lifestyle">
            <a className="mr-4 ml-4 mt-3 mb-2 text-gray-500 hover:text-purple-500 font-medium">
              Lifestyle
            </a>
          </Link>
        </div>

        <div className="mr-12">
          <Link href="/write">
            <button className="btn btn-primary btn-outline">Write News </button>
          </Link>
        </div>
      </nav>

      <Component {...pageProps} />
      <footer className="mr-12 mt-24 ml-12 bg-purple-500 h-48 mb-4 border-0 rounded-lg">
        <div className="flex flex-row mr-12 ml-12 items-center justify-between">
          <div className="flex flex-col">
            <div className="text-6xl font-bold mt-12 text-slate-50">DACRJ</div>
            <div className="text-2xl text-slate-50 mt-2"></div>
          </div>
          <div className="flex flex-col mt-8">
            <Link href="/">
              <label className="text-2xl font-bold text-slate-50">
                View Source Code
              </label>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
