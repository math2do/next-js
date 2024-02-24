import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // dynamically fetch the post details from database using id.
  return {
    title: `My Blog Post: ${params.id}`,
  };
}

const BlogById = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default BlogById;
