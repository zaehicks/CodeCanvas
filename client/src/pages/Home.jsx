import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className=" text-3xl font-bold lg:text-6xl">
          <span className="animate-pulse px-0.5 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to to-pink-500 rounded-lg bg-clip-text text-transparent">
            This
          </span>{" "}
          is{" "}
          <span className="animate-pulse px-0.5 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to to-pink-500 rounded-lg bg-clip-text text-transparent">
            Code
          </span>
          Canvas
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm animate-color-change ">
          Your Ultimate Destination for Coding and Tech Insights! Dive into a
          vibrant community of software engineers and tech enthusiasts where
          creativity meets innovation.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center ">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
