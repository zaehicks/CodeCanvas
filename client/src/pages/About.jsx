import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About CodeCanvas
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to CodeCanvas! CodeCanvas is more than just a tech
              blog—it's a vibrant community dedicated to empowering individuals
              from all corners of the globe to dive deep into the world of
              coding and technology. As the creator of CodeCanvas, my mission is
              to provide a platform where users can not only learn valuable
              coding insights but also discover new ideas, share innovative
              projects, and connect with like-minded enthusiasts.
            </p>

            <p>
              With a passion for technology and a commitment to fostering a
              supportive learning environment, CodeCanvas offers a diverse range
              of articles, tutorials, and resources covering a myriad of coding
              languages, frameworks, and tech trends. Whether you're a seasoned
              developer seeking to expand your skill set or a curious beginner
              eager to explore the vast landscape of programming, CodeCanvas has
              something for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
