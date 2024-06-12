import { BentoPortfolio } from "./BentoPortfolio"

const Portfolio = () => {
  return (
    <div className="py-20 lg:px-12 flex flex-col gap-10">
        <h1 data-aos="fade-up-left" className="font-semibold font-helvetica text-white-1 max-lg:text-[40px] max-lg:text-center lg:text-[45px] xl:text-[60px]"><span className="text-red-1">RED</span>WOOD PORTFOLIO</h1>

        <BentoPortfolio />
    </div>
  )
}

export default Portfolio