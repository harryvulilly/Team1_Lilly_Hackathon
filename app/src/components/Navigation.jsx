function Navigation() {
  return (
    <nav className="py-4 min-w-full flex bg-[#242526] text-white text-2xl">
      <div className="flex w-4/5">
        <img
          src="https://dev.lilly.com/img/logo.svg"
          alt="Lilly Logo"
          width={50}
          height={50}
          className="mx-5"
        />
        <h1 className="pr-5">New Employee Resources</h1>
      </div>
    </nav>
  );
}

export default Navigation;
