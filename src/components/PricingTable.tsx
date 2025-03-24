import ScrollAnimation from "./ui/ScrollAnimation"

const PricingCard = ({
  tier,
  price,
  subtitle,
  bandwidth,
  storage,
  overage,
}: {
  tier: string
  price: string
  subtitle: string
  bandwidth: string
  storage: string
  overage: string
}) => {
  return (
    <div className="bg-white p-8 rounded-lg  flex flex-col items-center text-center border border-gray-100">
      <h2 className="text-gray-800 font-medium text-[14px] leading-[14px] uppercase ">{tier}</h2>

      <div className="flex items-start mb-4">
        <span className="text-yellow-400  font-light text-[20px]">$</span>
        <span className="text-yellow-400  text-[40px] font-medium leading-[72px] ">{price}</span>
      </div>

      <p className="text-gray-500 mb-8 text-[15px] font-light leading-[27px] ">{subtitle}</p>

      <button
        className={`rounded-full py-3 px-8 mb-8 w-full font-medium transition-colors ${tier === "FREE" ? "bg-yellow-400 text-white" : "bg-white text-yellow-400 border border-yellow-400 hover:bg-yellow-50"}`}
      >
        Get Started
      </button>

      <p className="font-medium bg-[#FAFAFA] text-gray-800 mb-6 text-[16px] leading-[24px] text-center ">
        Enjoy All The Features
      </p>

      <div className="w-full space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">{bandwidth} GB</span>
          <span className="text-gray-400">Bandwidth</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-800">{storage} GB</span>
          <span className="text-gray-400">Storage</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-800">${overage} / GB</span>
          <span className="text-gray-400">Overages</span>
        </div>
      </div>

      <p className="text-gray-400">All features</p>
    </div>
  )
}
const PricingTable = () => {
  const plans = [
    {
      tier: "FREE",
      price: "0",
      subtitle: "100% free. Forever",
      bandwidth: "150",
      storage: "100",
      overage: "1.00",
    },
    {
      tier: "STARTUP",
      price: "19",
      subtitle: "All features are included",
      bandwidth: "450",
      storage: "400",
      overage: "2.00",
    },
    {
      tier: "PREMIUM",
      price: "49",
      subtitle: "All features are included",
      bandwidth: "250",
      storage: "200",
      overage: "5.00",
    },
    {
      tier: "PRO",
      price: "99",
      subtitle: "All features are included",
      bandwidth: "450",
      storage: "400",
      overage: "20.00",
    },
  ]

  return (
    <ScrollAnimation>
      <div className=" mx-auto py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.tier} delay={index * 0.1}>
              <PricingCard
                tier={plan.tier}
                price={plan.price}
                subtitle={plan.subtitle}
                bandwidth={plan.bandwidth}
                storage={plan.storage}
                overage={plan.overage}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default PricingTable