import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

interface IndexProps {
  name: string;
  description: string;
}

export default function LanguageSwitcherPage2() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="next-i18next"
        description="The easiest way to translate your NextJs apps."
      />
      <main className="mb-auto pt-5 px-10">
        <section
          style={{
            textAlign: "right",
            marginRight: "20px",
          }}
        >
          <Link
            href={router.pathname}
            locale={router.locale === "en-US" ? "zh-TW" : "en-US"}
          >
            <a>
              Switch to <strong>{t("lang.title")}</strong>
            </a>
          </Link>
        </section>
        <hr
          style={{
            margin: "20px 0",
          }}
        />
        <section>
          <header
            style={{
              textAlign: "center",
            }}
          >
            Page 2
          </header>
          {t<string, IndexProps[]>("document.items", {
            returnObjects: true,
          }).map(({ name, description }, index: number) => (
            <article key={index}>
              <header>{name}</header>
              <p>{description}</p>
            </article>
          ))}
        </section>
        <hr
          style={{
            margin: "20px 0",
          }}
        />
        <section
          style={{
            textAlign: "center",
          }}
        >
          Pagination:{" "}
          <Link href="/next-i18next/next-i18next-page1">
            <a>1</a>
          </Link>
          {", "}
          <Link href="/next-i18next/next-i18next-page2">
            <a>2</a>
          </Link>
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            next-i18next:
            <br />
            <a
              href="https://next.i18next.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://next.i18next.com
            </a>
          </li>
          <li>
            next-i18next (GitHub):
            <br />
            <a
              href="https://github.com/isaachinman/next-i18next"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/isaachinman/next-i18next
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});