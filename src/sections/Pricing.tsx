'use client'
import CheckIcon from "@/assets/check.svg"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useRef } from "react"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10">
          {
            pricingTiers.map((tier, index) => (
              <motion.div style={{ translateY }} key={index} className={`card ${tier.inverse ? 'border-black bg-black text-white' : 'border-[#F1F1F1]'}`}>
                <div className="flex justify-between">
                  <h3 className={`text-lg font-bold ${tier.inverse ? 'text-white/60' : 'text-black/50'}`}>{tier.title}</h3>
                  {
                    tier.popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <span className="text-transparent bg-clip-text font-medium bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)]">Popular</span>
                      </div>
                    )
                  }
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">${tier.monthlyPrice}</span>
                  <span className="tracking-tight font-bold text-black/50">/month</span>
                </div>
                <button className={`btn btn-primary w-full mt-[30px] cursor-pointer ${tier.inverse ? 'bg-white text-black hover:bg-white/80' : 'hover:bg-black/60'}`}>{tier.buttonText}</button>
                <ul className="flex flex-col gap-5 mt-8">
                  {
                    tier.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-4">
                        <CheckIcon className="w-6 h-6" />
                        <span>{feature}</span>
                      </li>
                    ))
                  }
                </ul>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
};
