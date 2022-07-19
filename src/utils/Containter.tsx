import Head from "next/head";
import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

const Containter = ({ children }: any) => {
  return (
    <>
      <Head>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Formula 1 Database" />
        <meta
          property="og:description"
          content="With Formula 1 Database you can view all current drivers & teams with updated statistics. This is an unoficial app with no affiliation to Formula 1."
        />
        <meta
          property="og:image"
          content="https://rzxchqpondvqsxypkyks.supabase.co/storage/v1/object/public/f1dbimages/F1DB.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Formula 1 Database" />
        <meta
          property="twitter:description"
          content="With Formula 1 Database you can view all current drivers & teams with updated statistics. This is an unoficial app with no affiliation to Formula 1."
        />
        <meta
          property="twitter:image"
          content="https://rzxchqpondvqsxypkyks.supabase.co/storage/v1/object/public/f1dbimages/F1DB.png"
        />
      </Head>
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Containter;
