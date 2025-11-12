import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = "Vanisree",
}) => {
  const siteUrl = "https://vanisree.com";
  const defaultImage = `${siteUrl}/logo512.png`;
  const fullTitle = title
    ? `${title} | Vanisree Portfolio`
    : "Vanisree - Software Engineer & Frontend Developer Portfolio";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image || defaultImage;

  const defaultDescription =
    "Experienced Software Engineer passionate about building thoughtful, elegant, and user-focused experiences. Specializing in React, React Native, Next.js, and modern web technologies.";

  const defaultKeywords =
    "Vanisree, Software Engineer, Frontend Developer, React Developer, React Native Developer, Web Developer, Portfolio, JavaScript, TypeScript, Next.js";

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vanisree",
    jobTitle: "Software Engineer",
    description: description || defaultDescription,
    url: fullUrl,
    image: fullImage,
    sameAs: [
      // Add your social media profiles here
      // "https://linkedin.com/in/vanisree",
      // "https://github.com/vanisree",
      // "https://youtube.com/@vanisree",
    ],
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Mobile App Development",
      "Frontend Development",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Vanisree Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
