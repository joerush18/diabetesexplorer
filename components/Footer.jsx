const Footer = () => {
  return (
    <>
      <div className="flex justify-content item center space-x-10  mb-8 footer-content absolute bottom-0 right-[16%] lg:right-[40%]">
        <p className="">Made with &#x2665;</p>
        <p>by Joerush</p>
        <a href="#">Twitter</a>
        <a href="#">Donate</a>
        <a href="https://github.com/joerush18/diabetesexplorer" target="_blank">
          <img src="/images/github.png" alt="github" />
        </a>
      </div>
    </>
  );
};

export default Footer;
