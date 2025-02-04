'use client'
import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useRef } from "react"

export const CallToAction = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>

          <motion.img src={starImage.src} style={{ translateY }} alt="star" width={360} height={360} className="hidden md:block md:absolute -left-[350px] -top-[137px]" />
          <motion.img src={springImage.src} style={{ translateY }} alt="star" width={360} height={360} className="hidden md:block md:absolute -right-[331px] -top-[19px] " />

        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary cursor-pointer hover:bg-black/60">Get for free</button>
          <button className="btn btn-text gap-1 cursor-pointer hover:text-black/60">
            <span>Learn more</span>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
};
