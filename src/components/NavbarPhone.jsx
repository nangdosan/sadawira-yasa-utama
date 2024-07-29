import { FiMenu, FiX } from "react-icons/fi";

export default function NavbarPhone({ toggleAside, isAsideOpen }) {
  return (
    <nav className="bg-vintage text-white flex justify-between p-4 md:hidden">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button onClick={toggleAside} className="text-2xl">
        {isAsideOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
