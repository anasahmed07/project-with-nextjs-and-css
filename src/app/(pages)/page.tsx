'use client'

import { useState, useEffect } from 'react';
import { Mail, Phone} from 'lucide-react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import Header from "@/components/layout/header";
import Footer from '@/components/layout/footer';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import NumberTicker from "@/components/ui/number-ticker";
import HyperText from "@/components/ui/hyper-text";
import { AnimatePresence } from 'framer-motion';

export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
  
  const ReviewCard = ({img, name, username, body,}: { img: string; name: string; username: string; body: string;}) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex-1 md:ml-40 lg:mr-40 ">
      {/* Mobile Header - Only visible on mobile */}
      <Header />
      {/* Content Area */}
      <div className=" max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <Image
              src="/anas-profile-pic.png"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-lg w-24 h-24 md:w-72 md:h-60"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-2">👋 Hello I Am</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Anas Ahmed</h2>
              <p className="text-gray-400 max-w-2xl">
                Experienced Frontend Developer from Karachi, Pakistan, with a passion for creating seamless digital experiences and a focus on user needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="secondary" className="gap-2">
                  <Mail className="w-4 h-4" /><HyperText className='text-white text-xl' duration={150} text='EMAIL ME'/>
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Phone className="w-4 h-4" /><HyperText className='text-white text-xl' duration={150} text='SHEDULE CALL'/>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className=" pt-8">
          <Marquee className="[--duration:40s]">
            <AnimatePresence mode="sync">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </AnimatePresence>
          </Marquee>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className='text-center'>
              <div className="text-4xl font-bold"><NumberTicker className='text-white' value={25} /> +</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className="text-4xl font-bold"><NumberTicker className='text-white' value={4} /> +</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className='text-center'>
              <div className="text-4xl font-bold"><NumberTicker className='text-white' value={25} /> +</div>
              <div className="text-sm text-gray-400">Completed Projects</div>
            </div>
            <div className='text-center'>
              <div className="text-4xl font-bold"><NumberTicker className='text-white' value={4} /> +</div>
              <div className="text-sm text-gray-400">Awards Received</div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6">💼 My Experience</h2>
          <p className="text-gray-400 mb-8">Adapting to different situations with skill to provide complete solutions.</p>
          <div className="space-y-6">
            <Card className="p-4 md:p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Upwork"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="font-bold">Product Designer</h3>
                      <p className="text-sm text-gray-400">Upwork</p>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 sm:mt-0">2023 - Present</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Led product design projects, developed design strategies, and ensured alignment with business goals to create market-leading products.
                  </p>
                </div>
              </div>
            </Card>
            {/* Additional experience cards... */}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6">💡 My Services</h2>
          <p className="text-gray-400 mb-8">Formulating comprehensive strategies to meet your design goals and exceed expectations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Web Design</h3>
              <p className="text-sm text-gray-400">
                Designing visually pleasing and user-centric websites for optimal online success.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Mobile Design</h3>
              <p className="text-sm text-gray-400">
                Creating intuitive UI/UX and user-focused mobile designs for seamless digital experiences.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Prototyping</h3>
              <p className="text-sm text-gray-400">
                Building interactive prototypes for seamless design-to-development transitions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Animation</h3>
              <p className="text-sm text-gray-400">
                Creating dynamic, engaging animations that bring digital experiences to life.
              </p>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}




