function Navigation() {
  return (
    <nav className="py-2.5 min-w-full flex bg-[#1c1e21] text-white text-xl">
      <div className="flex w-4/5">
        <img 
          src="https://dev.lilly.com/img/logo.svg"
          width={50}
          height={50}
          className="mx-5"
        />
        <h1 className="pr-5">New Employee Resources</h1>
      </div>

      <ul className="flex w-2/6 justify-around">
        <li>Owner</li>
        <li>New Hires</li>
      </ul>
    </nav>
  )
}

export default Navigation;