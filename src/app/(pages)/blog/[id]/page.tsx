"use client"

import { Clock, MessageSquare, Reply, Search, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogDetailsPage() {
  return (
    <div>
      <div className="relative h-[530px] md:h-[600px] lg:h-[670px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_2.jpg')" }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Blog Details</h1>
            <nav className="flex space-x-4 items-center">
              <Link className="text-white hover:text-white/80 transition-colors" href="/">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link className="text-white hover:text-white/80 transition-colors" href="/blog/4">
                Blog Details
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-medium mb-6 transform transition-all duration-500 hover:translate-x-2">
              Solutions on upgrading technology
            </h1>
            <div className="prose max-w-none">
              <div className="flex items-center gap-4 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>September 25, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>3 Comments</span>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://preview.colorlib.com/theme/whitespace/images/image_1.jpg"
                  alt="Blog hero"
                  width={800}
                  height={500}
                  className="w-full rounded-lg transform transition-all duration-500 hover:scale-105"
                />
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ullamcorper sapien. Aliquam
                  efficitur varius consectetur, sed consequat justo maximus sed.
                </p>
                <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700 my-8">
                  Ut viverra porttitor sapien, condimentum varius eros volutpat et. Donec porttitor, sapien eget
                  tincidunt tincidunt, velit nulla condimentum magna.
                </blockquote>
                <h2 className="text-2xl font-medium mt-8 mb-4">Creative WordPress Themes</h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ullamcorper sapien.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t">
                <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-white">
                  css
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-white">
                  html
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-white">
                  tech
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-white">
                  design
                </span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-medium mb-8">2 Comments</h2>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="John Doe"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">John Doe</h4>
                        <span className="text-sm text-gray-500">June 27, 2023</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porta porttitor justo
                        condimentum varius.
                      </p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>12</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
                    alt="Jane Smith"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Jane Smith</h4>
                        <span className="text-sm text-gray-500">June 26, 2023</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Aliquam efficitur varius consectetur, sed consequat justo maximus sed.
                      </p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>8</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-6">Leave a Comment</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name*"
                        required
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="email"
                        placeholder="Email*"
                        required
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <textarea
                      placeholder="Your comment here..."
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full transform transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="mb-8 transform transition-all duration-300 hover:scale-105">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Type a keyword and hit enter"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:text-yellow-400 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-yellow-400 after:bottom-[-4px] after:left-0 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Popular Articles
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <Image
                    src="https://preview.colorlib.com/theme/whitespace/images/image_1.jpg"
                    alt="Even the all-powerful Pointing has no control about the blind texts"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
                      <Link href="/blog/1">Even the all-powerful Pointing has no control about the blind texts</Link>
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>3 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>24 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <Image
                    src="https://preview.colorlib.com/theme/whitespace/images/image_2.jpg"
                    alt="Creative WordPress Themes You Must Have"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
                      <Link href="/blog/2">Creative WordPress Themes You Must Have</Link>
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>5 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>12 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <Image
                    src="https://preview.colorlib.com/theme/whitespace/images/image_3.jpg"
                    alt="Top 10 Best Law Practice Management Software"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
                      <Link href="/blog/3">Top 10 Best Law Practice Management Software</Link>
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>4 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>8 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-yellow-400 after:bottom-[-4px] after:left-0 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Categories
              </h3>
              <ul className="space-y-3">
                <li className="group flex justify-between items-center transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300"
                    href="/blog/4"
                  >
                    Family Law
                  </Link>
                  <span className="text-gray-500 text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    (10)
                  </span>
                </li>
                <li className="group flex justify-between items-center transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300"
                    href="/blog/4"
                  >
                    Criminal Law
                  </Link>
                  <span className="text-gray-500 text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    (8)
                  </span>
                </li>
                <li className="group flex justify-between items-center transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300"
                    href="/blog/4"
                  >
                    Business Law
                  </Link>
                  <span className="text-gray-500 text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    (2)
                  </span>
                </li>
                <li className="group flex justify-between items-center transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300"
                    href="/blog/4"
                  >
                    Insurance Law
                  </Link>
                  <span className="text-gray-500 text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    (3)
                  </span>
                </li>
                <li className="group flex justify-between items-center transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300"
                    href="/blog/4"
                  >
                    Drug Control Law
                  </Link>
                  <span className="text-gray-500 text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    (5)
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-yellow-400 after:bottom-[-4px] after:left-0 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Tag Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  css
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  html
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  tech
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  design
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  web
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  digital
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  creative
                </Link>
                <Link
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 transform transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-110 hover:shadow-md"
                  href="/blog/4"
                >
                  more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

