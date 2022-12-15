import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../app/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Starter</h1>

        <div className="mt-4 mt-md-0 text-xl">
          With TypeScript, TailwindCSS, Emotion
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className="p-2 leading-none bg-pink-50 text-slate-900">
            pages/index.tsx
          </code>
        </p>

        <section className={styles.grid}>
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className={styles.card}
          >
            <header>Next.js &rarr;</header>
            <p>
              Gives you the best developer experience with all the features you
              need for production. No config needed.
            </p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            className={styles.card}
          >
            <header>TypeScript &rarr;</header>
            <p>
              A strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale.
            </p>
          </a>

          <a
            href="https://tailwindcss.com/docs/utility-first"
            className={styles.card}
          >
            <header>Tailwind CSS &rarr;</header>
            <p>
              A utility-first CSS framework packed with classes that can be
              composed to build any design, directly in your markup.
            </p>
          </a>

          <a href="https://emotion.sh/docs/css-prop" className={styles.card}>
            <header>Emotion &rarr;</header>
            <p>
              Provides powerful and predictable style composition in addition to
              a great developer experience with features.
            </p>
          </a>
        </section>

        <section className={styles.board}>
          <header>Example</header>
          <article>
            <header>classnames</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/classnames">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    classnames
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>dnd-kit</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/dnd-kit-draggable-and-droppable">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Draggable and Droppable
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/dnd-kit-sortable-tree">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Sortable Tree
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/dnd-kit-sortable-tree-with-overlay">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Sortable Tree with Overlay
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>Emotion</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/emotion-css-prop">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Emotion using CSS Prop
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/emotion-styled">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Emotion using styled component
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>Floating UI</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/floating-ui-tooltip">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Floating UI (Tooltip)
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>Font Awesome</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/fontawesome-individually">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Font Awesome (Individually)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/fontawesome-dynamically">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Font Awesome (Dynamically)
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>next-i18next</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/next-i18next-page1">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    next-i18next
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>next-seo</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/next-seo">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    next-seo
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>React Hook</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/useState">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useState
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useState-clsss-component">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useState (Class Component)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useState-function-component">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useState (Function Component)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useEffect">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useEffect
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useEffect-clsss-component">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useEffect (Class Component)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useEffect-function-component">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useEffect (Function Component)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useEffect-class-component2">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useEffect (Class Component 2)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/useEffect-function-component2">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    useEffect (Function Component 2)
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>React Hook Form</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/react-hook-form">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    React Hook Form
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>Tailwind CSS</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/tailwindcss">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Tailwind CSS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/examples/tailwind-styled-components">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    Tailwind-Styled-Component
                  </a>
                </Link>
              </li>
            </ol>
          </article>
          <article>
            <header>XState</header>
            <ol
              style={{
                listStyleType: "number",
              }}
            >
              <li>
                <Link href="/examples/xstate">
                  <a className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200">
                    XState
                  </a>
                </Link>
              </li>
            </ol>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
