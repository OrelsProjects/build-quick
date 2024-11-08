import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <MapPin className="h-24 w-24 text-blue-500 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          It seems you&apos;ve wandered off the beaten path. Don&apos;t worry,
          even the best explorers get lost sometimes!
        </p>
        <Link
          href="/"
          passHref
          className="w-full flex justify-center items-center"
        >
          <Button className="text-lg px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
