'use client'
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useRef } from "react"

export const ProductShowcase = () => {

  const productShowCaseRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: productShowCaseRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={productShowCaseRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-desc mt-5">Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template</p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid image"
            width={262}
            height={262}
            className="hidden md:block md:absolute -right-36 -top-32 "
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube image"
            width={248}
            height={248}
            className="hidden md:block md:absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
