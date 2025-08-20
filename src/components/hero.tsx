"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 9.8) {
        setIsVisible(false);
        setTimeout(() => {
          video.currentTime = 0.01;
          video.play();
          setIsVisible(true);
        }, 400);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 left-[20%] w-full h-full object-cover animate-slide-up"
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <source src="/assets/video-loop.webm" type="video/webm" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-br from-[#020540]/80 via-[#060126]/70 to-[#150259]/80 opacity-80 z-0"></div>
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#F244C4]/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#EF1BF2]/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#F244C4]/10 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto text-center max-w-6xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-[320px] md:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              IA sem complicação para{" "}
              <span className="text-[#F244C4]">profissionais e empresas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slide-up-delayed">
              Transforme sua rotina com IA. Mais clientes, mais produtividade,
              menos complicação — feito sob medida para profissionais e pequenas
              empresas.
            </p>
            <a href="#go-to-ai">
              <Button
                size="lg"
                className="w-auto md:w-full break-words bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F244C4]/25"
              >
                Quero aplicar IA no meu negócio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
