import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-1/4 overflow-hidden">
        <video
          src="../farmer.mp4"
          autoPlay
          muted
          loop
          className="w-auto min-w-full min-h-full max-w-none"
        ></video>
      </div>
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 bg-slate-500">
        <p className="text-center">Welcome!</p>
        <a>Browse our offerings</a>
      </div>
    </>
  );
}
