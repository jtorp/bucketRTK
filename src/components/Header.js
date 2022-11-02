const Header = ({ name }) => {
    return (
        <div className="flex flex-col mx-4 gap-2">
            <span className="tracking-tight uppercase font-base text-4xl text-orange-100 ">
                the Ultimate
            </span>
            <h1 className=" uppercase tracking-tight text-5xl font-black text-redred">
                {name}
            </h1>
            <span className="text-3xl md:text-5xl font-alex text-pumpkin tracking-wider">
                {" "}
                Bucket List{" "}
            </span>
        </div>
    );
};

export default Header;
