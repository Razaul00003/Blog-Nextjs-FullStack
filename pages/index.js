import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
function HomePage(props) {
  const dummyPosts = [
    {
      slug: "getting-started-with-js",
      title: "javaxript introduction",
      image: "javascript.jpg",
      exerpt:
        "It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-react",
      title: " React",
      image: "react.png",
      exerpt:
        "It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed.      ",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-ts",
      title: " Typescript",
      image: "ts.png",
      exerpt:
        "It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals      ",
      date: "2022-02-10",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </>
  );
}

export default HomePage;
