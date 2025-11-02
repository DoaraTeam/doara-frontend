"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Sparkles } from "lucide-react";

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "/images/product/wildhouse.png",
    link: "https://wildhouse.io.vn/",
    title: "wildhouse",
    author: "Dat09",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "https://meet.mobifone.vn/m/_next/static/media/meta-image-resize.cc7b80e2.png",
    author: "MobiFone meet",
    link: "https://meet.mobifone.vn/",
    title: "Landing page MobiFone meet",
  },
];

const Preview = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-black py-10">
      {/* Badge ở trên cùng giữa */}
      <div className="relative z-50 flex justify-center pt-2 pb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white/80">Product</span>
        </motion.div>
      </div>

      <div
        className="relative w-full h-full min-h-[600px] flex justify-center items-center"
        ref={scope}
      >
        <Floating sensitivity={-1} className="pointer-events-none">
          <FloatingElement depth={0.5} className="top-[15%] left-[20%] pointer-events-auto">
            <a
              href={exampleImages[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="w-16 h-16 md:w-24 md:h-24 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[0].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[0].author}
                </p>
              </div>
            </a>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[38%] pointer-events-auto">
            <a
              href={exampleImages[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="w-20 h-20 md:w-28 md:h-28 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[1].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[1].author}
                </p>
              </div>
            </a>
          </FloatingElement>
          <FloatingElement depth={2} className="top-[5%] left-[56%] pointer-events-auto">
            <a
              href={exampleImages[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="w-28 h-40 md:w-40 md:h-52 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[9px] md:text-sm font-medium text-center line-clamp-3">
                  {exampleImages[2].title}
                </p>
                <p className="text-white/60 text-[7px] md:text-xs mt-1">
                  {exampleImages[2].author}
                </p>
              </div>
            </a>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[8%] left-[75%] pointer-events-auto">
            <a
              href={exampleImages[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[3].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[3].author}
                </p>
              </div>
            </a>
          </FloatingElement>

          <FloatingElement depth={1} className="top-[50%] left-[12%] pointer-events-auto">
            <a
              href={exampleImages[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="w-28 h-28 md:w-36 md:h-36 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[4].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[4].author}
                </p>
              </div>
            </a>
          </FloatingElement>
          <FloatingElement depth={2} className="top-[60%] left-[70%] pointer-events-auto">
            <a
              href={exampleImages[7].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[7].url}
                alt={exampleImages[7].title}
                className="w-28 h-28 md:w-36 md:h-48 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[7].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[7].author}
                </p>
              </div>
            </a>
          </FloatingElement>

          <FloatingElement depth={4} className="top-[68%] left-[25%] pointer-events-auto">
            <a
              href={exampleImages[5].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[5].url}
                alt={exampleImages[5].title}
                className="w-40 md:w-52 h-full object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[9px] md:text-sm font-medium text-center line-clamp-3">
                  {exampleImages[5].title}
                </p>
                <p className="text-white/60 text-[7px] md:text-xs mt-1">
                  {exampleImages[5].author}
                </p>
              </div>
            </a>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[75%] left-[55%] pointer-events-auto">
            <a
              href={exampleImages[6].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-sm"
            >
              <motion.img
                initial={{ opacity: 0 }}
                src={exampleImages[6].url}
                alt={exampleImages[6].title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover group-hover:scale-110 duration-300 cursor-pointer transition-transform"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                <p className="text-white text-[8px] md:text-xs font-medium text-center line-clamp-2">
                  {exampleImages[6].title}
                </p>
                <p className="text-white/60 text-[6px] md:text-[10px] mt-1">
                  {exampleImages[6].author}
                </p>
              </div>
            </a>
          </FloatingElement>
        </Floating>

        <motion.div
          className="relative z-50 text-center space-y-4 items-center flex flex-col pointer-events-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
          <p className="text-5xl md:text-7xl text-white font-calendas italic">Product.</p>
        </motion.div>
      </div>
    </section>
  );
};

export { Preview };
