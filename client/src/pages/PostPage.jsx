import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const [author, setAuthor] = useState(null); // State to hold the author's details

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        if (post) {
          const res = await fetch(`/api/user/${post.userId}`); // Fetch user details based on postId (which should represent userId)
          if (res.ok) {
            const data = await res.json();
            setAuthor(data); // Set the user who posted the page
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (post) {
      fetchAuthor(); // Fetch user details only if post is available
    }
  }, [post]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col items-center min-h-screen ">
      {/* Content */}

      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <div className="w-full max-w-screen-md overflow-hidden">
        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-10 p-3 w-full h-auto object-cover"
        />
      </div>
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-screen-md text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {`${(post.content.replace(/<[^>]*>/g, "").length / 1000).toFixed(
            0
          )} mins read`}
          <p className="text-sm mt-2 font-bold">
            Posted by: {author && author.username}
          </p>
        </span>
      </div>
    <div className="p-3 sm:text-[1rem] max-w-screen-md mx-auto text-wrap w-full post-content">
  {post && (
    <div className="max-w-screen-md text-wrap post-content-inner">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )}
</div>
<div className="max-w-screen-md mx-auto w-full">
  <CallToAction />
</div>
<CommentSection postId={post._id} />

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
