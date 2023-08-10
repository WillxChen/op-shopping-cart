import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          src="../farmer.mp4"
          autoPlay
          muted
          loop
          className="absolute w-auto min-w-full min-h-full max-w-none"
        ></video>
      </div>
      <div>Description</div>
      <a>Browse our offerings</a>
    </>
  );
}
