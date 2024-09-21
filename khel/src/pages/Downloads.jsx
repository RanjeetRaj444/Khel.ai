import React from "react";
import "../styles/Download.css";
import DownloadButton from "../components/Buttons/DownloadButton";
import ReactPlayer from "react-player";
import video1 from "../videos/WhatsApp Video 2024-07-07 at 00.27.26.mp4";
import VideoPlayer from "../components/Videoplayer";
import VideoCarousel from "../components/VideoCarousel";
const Downloads = () => {
	return (
		<div className="downloas-page">
			<section className="download-container">
				<div className="download-container-top-section">
					<div>
						<div>
							<h2>Khel Sync (Windows)</h2>
							<p>
								Khel Android – Pc Sync Client for seamless integration of DRS
								files. (Windows Installer) – Old Version FIX
							</p>
						</div>
						<div>
							{/* <NavButtob /> */}
							<DownloadButton />
						</div>
					</div>
					<div>
						<div>
							<h2>Khel Sync (Windows – OBS)</h2>
							<p>
								Khel Android – Pc Client with OBS integration. Now get DRS clips
								in your phone just a with a click. Old Version – Here
							</p>
						</div>
						<div>
							{/* <NavButtob /> */}
							<DownloadButton />
						</div>
					</div>
				</div>
				<div className="download-container-bottom-section">
					<div>
						<h2>Khel Media Server (Windows)</h2>
						<p>
							Khel Android – Pc Media Server, for Live Streaming Camera to PC
						</p>
					</div>
					<div>
						<DownloadButton />
					</div>
				</div>
			</section>

			<section className="installation-instructions">
				<h2>Khel-Sync</h2>
				<p>Installation Instructions</p>
				<div className="instruction-steps">
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>1. Install Khel.ai on Android</h3>
						<p>
							Install the Khel.ai Android App and activate it with a valid key.
						</p>
					</div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>2. Enable USB Debugging</h3>
						<p>
							Enable USB debugging on your Android Phone from the Developer
							Options.
						</p>
						<p>
							Refer to the video below. Or <a href="#">check this</a>
						</p>
					</div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>3. Install Khel Sync on Windows</h3>
						<p>
							Download Khel Sync Installer from above. Install it on your
							Windows PC.
						</p>
					</div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>4. Connect your Android phone</h3>
						<p>
							Connect your Android phone to your PC with a USB Cable. Run
							Khel-Sync and get running.
						</p>
					</div>
				</div>
			</section>
			<section className="video-section">
				<VideoCarousel />
			</section>
			<section className="doenload-section-use">
				<div className="download-secton-use-heading">
					<h2>How to use?</h2>
				</div>
				<div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>1. Copy DRS video to Folder</h3>
						<p>
							Once Khel-Sync is running. A folder should be created on the
							Desktop as ‘khel-drs’. Copy your DRS video to that folder.
						</p>
					</div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>2. Process on Mobile</h3>
						<p>
							Once copied. Khel.ai android should open with the given video.
							Process the video in Khel.ai Android.
						</p>
					</div>
					<div className="instruction-step">
						<div className="step-icon">✔️</div>
						<h3>3. Export Video</h3>
						<p>
							Export the video on Khel Android. It’ll get transferred to your
							‘khel-drs’ desktop folder inside ‘khel-output’
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Downloads;
