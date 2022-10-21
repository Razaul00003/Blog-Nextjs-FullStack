import React from "react";
import AllPosts from "../../components/posts/all-posts";

function AllPostsPage(props) {
  const dummyPosts = [
    {
      slug: "getting-started-with-js",
      title: "javaxript introduction",
      image: "javascript.jpg",
      exerpt:
        "It is a sequence of Latin words that, as they  composed by communication professionals.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-react",
      title: " React",
      image: "react.png",
      exerpt:
        "It is a sequence of Latin words that, as they  be occupied from ad hoc texts composed.      ",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-ts",
      title: " Typescript",
      image: "ts.png",
      exerpt:
        "It is a sequence of Latin words that, as they are positioned, doprofessionals      ",
      date: "2022-02-10",
    },
  ];

  return <AllPosts posts={dummyPosts} />;
}

export default AllPostsPage;
