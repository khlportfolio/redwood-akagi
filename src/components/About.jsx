import HeroBox from "../assets/herobox.svg"
import Button from "./Button"

const About = () => {
  return (
    <div className="py-20 flex max-lg:flex-col max-lg:gap-8">
        <div data-aos="fade-right" className="w-full lg:w-[45vw] flex justify-center items-center ">
            <img src={HeroBox} alt="About Image" width={450} height={450} className="aspect-square max-lg:w-[300px] max-lg:h-[300px]"/>
        </div>
        <div data-aos="fade-left" className="flex-1 flex flex-col gap-9 ">
            <h1 className="font-semibold font-helvetica text-white-1 max-sm:text-[35px] max-lg:text-[40px] max-lg:text-center lg:text-[45px] xl:text-[60px]">ABOUT <span className="text-red-1">RED</span>WOOD</h1>
            <p className="text-[18px] text-black-light font-helvetica  max-w-2xl max-lg:mx-auto max-lg:w-full max-lg:text-center">Redwood Akagi berdiri sejak 5 februari 2020, adalah komunitas game dan musik produser. Game yang difokuskan antara lain ayodance, dan valorant. selain game game yang dikuasai, Redwood Akagi juga membuka kelas music produser di digital platform yaitu discord. </p>
            <Button value="JOIN COMMUNITY" className="w-fit mt-3 max-lg:mx-auto"/>
        </div>
    </div>
  )
}

export default About