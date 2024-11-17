import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Edit3 } from 'lucide-react';
export const metadata: Metadata = { title: 'Top 5 Tools for Subtitle Creation', description: 'Explore the best tools available for creating and editing subtitles, from beginner-friendly to advanced professional software.', };
function Header() {
  const router = useRouter();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors">
            <Edit3 className="w-6 h-6" />
            <span className="text-xl font-bold">Format My Script</span>
          </button>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default function SubtitleToolsBlog() {
  return (
    <>
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-8 mb-4">Best Tools for Creating Subtitles</h2>
          <p>Having the right tools can make a significant difference in your subtitle creation process. Here are our top picks:</p>
          <ul className="list-disc pl-6">
            <li>Camtasia - Great for video editing and subtitle generation.</li>
            <li>Rev - Professional transcription services.</li>
            <li>Amara - Collaborative subtitle editing platform.</li>
            <li>Aegisub - An advanced subtitle editor with timecoding features.</li>
            <li>Kapwing - Online video editing and subtitling tool.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-8 mb-4">Enhancing Your Content with Subtitles</h2>
          <p>Subtitles provide not only accessibility but also improve engagement and view times. They can even help with SEO, making your content more discoverable.</p>
          <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>Choosing the right subtitle tool is crucial for effective content creation. Explore these options and find one that fits your workflow best.</p>
        </div>
      </article>
    </>
  );
}