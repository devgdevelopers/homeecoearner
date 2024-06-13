"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${params?.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user posts");
        }
        const data = await response.json();
        setUserPosts(data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    if (params?.id) {
      fetchPosts();
    }
  }, [params?.id]);

  return (


    <p>hello</p>
  );
};

export default UserProfile;
