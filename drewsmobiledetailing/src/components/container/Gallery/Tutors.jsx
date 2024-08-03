import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const InstagramGallery = () => {
  const [images, setImages] = useState([]);

  const fetchPhotos = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data.data.filter(
        (photo) => photo.media_type === "IMAGE"
      );

      const formattedImages = filteredData.map((photo) => ({
        original: photo.media_url,
        thumbnail: photo.media_url,
      }));

      setImages(formattedImages);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;
    fetchPhotos(url);
  }, []);

  return (
    <section
      id="gallery"
      
    >
      <div className="p-8">
        <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
          <span className="text-primary">Gallery</span>
        </div>
        <article>
          <ImageGallery items={images} />
        </article>
      </div>
    </section>
  );
};

export default InstagramGallery;
