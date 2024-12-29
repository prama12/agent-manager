import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-full items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-3 text-lg text-gray-600">Page Not Found</p>
        <p className="mt-2 text-sm text-gray-500">
          Redirecting to the home page...
        </p>
        <div className="mt-5">
          <button
            onClick={() => router.push("/")}
            className="rounded bg-teal-400 transation px-4 text-xs py-2 text-white hover:bg-teal-600"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
