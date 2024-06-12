const LogoCard = ({ imgUrl, title, price }) => {
  return (
    <figure className="w-full h-fit flex flex-col gap-10 items-center py-10 rounded-xl hover:bg-gray-500">
        <img src={imgUrl} alt="" />
        <div className="flex w-full justify-between items-center px-5">
            <p className="text-white-1 font-strong">{title}</p>
            <p className="text-white-1 font-strong">{price}</p>
        </div>
    </figure>
  )
}

export default LogoCard