import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7B1E3A] text-white px-6">
      <Link href="/" className="text-2xl font-bold text-white hover:text-white/70 transition-colors mb-6">
        Website4You
      </Link>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-white/70 mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-[#7B1E3A] font-bold rounded-lg hover:bg-white/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
