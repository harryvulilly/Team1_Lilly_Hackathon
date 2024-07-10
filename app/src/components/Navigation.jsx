function Navigation() {
  return (
    <nav className="py-4 min-w-full flex bg-[#212121] text-white text-2xl">
      <button className="flex" >
        <img
          src="https://dev.lilly.com/img/logo.svg"
          alt="Lilly Logo"
          width={50}
          height={50}
          className="mx-5"
        />
        <h1 className="pr-5">New Employee Resources</h1>
      </button>
    </nav>
  );
}

export default Navigation;
