import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gaming Blog - Tips, Strategies & Community Insights | Big Mumbai Game',
  description: 'Discover the latest gaming tips, winning strategies, and community insights. Stay updated with Big Mumbai Game\'s official blog for players across India.',
  canonical: 'https://bigmumbai.game/blog/',
  openGraph: {
    title: 'Gaming Blog - Tips, Strategies & Community Insights | Big Mumbai Game',
    description: 'Discover the latest gaming tips, winning strategies, and community insights. Stay updated with Big Mumbai Game\'s official blog for players across India.',
    url: 'https://bigmumbai.game/blog/',
    type: 'website',
  },
};

export default function Blog() {
  const blogPosts = [
    {
      id: 'gaming-tips-beginners',
      title: '10 Essential Gaming Tips for Beginners in 2024',
      excerpt: 'Master the basics of online gaming with our comprehensive guide designed specifically for newcomers to the Big Mumbai Game platform.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      date: '2024-01-15',
      author: 'Gaming Expert Team',
      readTime: '5 min read',
      tags: ['Gaming Tips', 'Beginners Guide', 'Strategy']
    },
    {
      id: 'winning-strategies',
      title: 'Advanced Winning Strategies for Competitive Gaming',
      excerpt: 'Discover proven strategies used by top players to consistently win games and tournaments on our platform.',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
      date: '2024-01-12',
      author: 'Pro Gamer',
      readTime: '8 min read',
      tags: ['Strategy', 'Competitive', 'Advanced']
    },
    {
      id: 'community-building',
      title: 'Building Lasting Friendships in Online Gaming Communities',
      excerpt: 'Learn how to connect with like-minded players and build meaningful relationships through gaming.',
      image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
      date: '2024-01-10',
      author: 'Community Manager',
      readTime: '6 min read',
      tags: ['Community', 'Social', 'Friendship']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Big Mumbai Game</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/blog" className="text-red-600 font-semibold">Blog</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Games</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Community</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Gaming Insights & Tips
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Stay ahead of the game with expert tips, winning strategies, and community insights from India's premier gaming platform.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      {post.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                      <Link href={`/blog/${post.id}`} className="hover:text-red-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div>
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-20 max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Never Miss a Gaming Tip!
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter and get the latest gaming insights, strategies, and platform updates delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}