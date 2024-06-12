import MemberOne from "../assets/member1.svg"
import MemberTwo from "../assets/member2.svg"

const Member = () => {
  return (
    <div className="py-20 lg:px-12 flex flex-col gap-10">
        <h1 className="font-semibold font-helvetica text-white-1 max-lg:text-[40px] max-lg:text-center lg:text-[45px] xl:text-[60px]"><span className="text-red-1">RED</span>WOOD MEMBER</h1>
        <div className="flex max-md:flex-col max-md:gap-10">
            <div data-aos="fade-down" data-aos-duration="1000" className="flex-1 items-center justify-center">
                <img src={MemberOne} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex-1 items-center justify-center">
                <img src={MemberTwo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Member