import { api } from "@/utils/api";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

export const Home: NextPage = () => {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="flex flex-col items-center gap-2 text-foreground">
        <p className="text-2xl ">
          {/* {hello.data ? hello.data.greeting : "Loading tRPC query..."} */}
          Hi
        </p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", "common", nextI18nConfig)),
    },
  };
};

export default Home;
