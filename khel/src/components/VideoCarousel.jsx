import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VideoPlayer from "./Videoplayer";
import "../styles/VideoCarousel.css";
import video1 from "../videos/WhatsApp Video 2024-07-04 at 16.22.27 (1).mp4";
import video2 from "../videos/WhatsApp Video 2024-07-04 at 16.22.27 (2).mp4";
import video3 from "../videos/WhatsApp Video 2024-07-07 at 00.27.26.mp4";
import video4 from "../videos/WhatsApp Video 2024-07-07 at 00.27.27 (1).mp4";
import video5 from "../videos/WhatsApp Video 2024-07-07 at 00.27.27.mp4";
import video6 from "../videos/WhatsApp Video 2024-07-07 at 00.27.28.mp4";
import video7 from "../videos/WhatsApp Video 2024-07-07 at 00.27.29.mp4";

const VideoCarousel = () => {
	const videos = [
		{
			id: 1,
			url: video1,
			title: "Video 1",
		},
		{
			id: 2,
			url: video2,
			title: "Video 2",
		},
		{
			id: 3,
			url: video3,
			title: "Video 3",
		},
		{
			id: 4,
			url: video4,
			title: "Video 4",
		},
		{
			id: 5,
			url: video5,
			title: "Video 5",
		},
		{
			id: 6,
			url: video6,
			title: "Video 6",
		},
		{
			id: 7,
			url: video7,
			title: "Video 7",
		},
	];

	return (
		<div className="carousel-container">
			<Carousel
				showThumbs={true}
				showIndicators={true}
				autoPlay={true}
				infiniteLoop={true}
				dynamicHeight={true}
				className="carousel"
			>
				{videos.map((video) => (
					<div key={video.id} className="carousel-slide">
						<h3>{video.title}</h3>
						<VideoPlayer videoUrl={video.url} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default VideoCarousel;
