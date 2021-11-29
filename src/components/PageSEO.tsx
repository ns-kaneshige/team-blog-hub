import Head from "next/head";

import { config } from "@site.config";

// types
type Props = {
  title: string;
  path?: string;
  description?: string;
  ogImageUrl?: string;
  noindex?: boolean;
  removeSiteNameFromTitle?: boolean;
};

export const PageSEO: React.FC<Props> = (props) => {
  const {
    path,
    title,
    description,
    ogImageUrl,
    noindex,
    removeSiteNameFromTitle,
  } = props;

  const pageUrl = `${config.siteRoot}${path || ""}`;
  return (
    <Head>
      <title>
        {removeSiteNameFromTitle
          ? title
          : `${title} | ${config.siteMeta.title}`}
      </title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.siteMeta.title} />
      <meta
        property="og:image"
        content={ogImageUrl || "https://assets-au-01.kc-usercontent.com/0ded0b6d-99ec-0224-05e5-cbb89f555eea/0c62ae08-aac8-4523-be06-3529caf18b18/og-image.png"}
      />
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {path && <link rel="canonical" href={pageUrl} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  );
};
