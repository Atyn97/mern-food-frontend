const Footer = () => {
  return (
    <div className="bg-green-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight cursor-pointer">
          MernFood
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="hover:text-green-200 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-green-200 cursor-pointer">
            Term of Service
          </span>
        </span>
        <span>© MernFood 2024</span>
      </div>
    </div>
  );
};

export default Footer;
