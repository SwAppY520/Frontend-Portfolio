
export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href="#" className="nav-item">Home</a>

        <a href="#Projects" className="nav-item">Projects</a>

        <a href="#About" className="nav-item">About</a>

        <a href="#Contact" className="nav-item sm:hidden lg:block">Contact</a>

        <a href="https://github.com/SwAppY520" className="nav-item bg-sky-500 text-white hover:bg-white hover:text-gray-900">GitHub</a>
      </nav>
    </div>
  );
};
