import React, { useEffect, useState } from "react";
import Image from "./Image";

const InstagramGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [currentCount, setCurrentCount] = useState(6);

  const initialCount = 6;

  const fetchPhotos = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data.data.filter(
        (photo) => photo.media_type === "IMAGE"
      );
      setPhotos(filteredData);
      setNextUrl(data.paging.next);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${initialCount}&access_token=${accessToken}`;
    fetchPhotos(url);
  }, []);

  useEffect(() => {
    setVisiblePhotos(photos.slice(0, currentCount));
  }, [photos, currentCount]);

  const loadMore = () => {
    if (nextUrl) {
      setCurrentCount((prevCount) => prevCount + initialCount);
      fetchPhotos(nextUrl);
    }
  };

  return (
    <div className="section" id="gallery">
      <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
        <span className="text-primary">Gallery</span>
      </div>
      <Image photos={visiblePhotos} />
      {nextUrl && (
        <button
          onClick={loadMore}
          className="bg-primary text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default InstagramGallery;
