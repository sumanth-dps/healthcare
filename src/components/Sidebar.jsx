import { TbLayoutDashboardFilled } from "react-icons/tb";
import {
  ArrowUpDown,
  X,
  Settings,
  Phone,
  MessageCircleMore,
  SquarePlus,
  CalendarDays,
  ChartNoAxesCombined,
} from "lucide-react";
const links = [
  { name: "Dashboard", icon: <TbLayoutDashboardFilled size={20} /> },

  { name: "History", icon: <ArrowUpDown size={20} /> },
  { name: "Calendar", icon: <CalendarDays size={20} /> },
  { name: "Appointments", icon: <SquarePlus size={20} /> },
  { name: "Statistics", icon: <ChartNoAxesCombined size={20} /> },
];
const tools = [
  { name: "Chat", icon: <MessageCircleMore size={20} /> },
  { name: "Support", icon: <Phone size={20} /> },
];
const Sidebar = ({ isOpen, onClose }) => (
  <>
    <div
      className={`
        fixed top-0 left-0 h-screen w-45 lg:w-50 bg-violet-50  p-4 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block
      `}
    >
      {/* Close button (only on mobile) */}
      <div className="flex justify-between items-center lg:hidden mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose}>
          <X className="h-6 w-6 text-violet-900" />
        </button>
      </div>
      <h1 className="text-xl font-bold text-cyan-400 mb-8 text-center">
        Health<span className="text-violet-900">care.</span>
      </h1>
      <div className="flex flex-col justify-around">
        <div>
          <p className="text-sm text-gray-400 pb-5">General</p>

          <nav className="space-y-5">
            {links.map((link, idx) => (
              <div
                key={idx}
                className="flex items-center text-gray-400 text-center hover:text-blue-600  cursor-pointer"
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </div>
            ))}
          </nav>
          <p className="text-sm text-gray-400 py-5 pt-8">Tools</p>
          <nav className="space-y-5">
            {tools.map((link, idx) => (
              <div
                key={idx}
                className="flex items-center text-gray-400 text-center hover:text-blue-600 cursor-pointer"
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </div>
            ))}
          </nav>
        </div>
        <nav className="space-y-5">
          <div className="flex  items-center mt-55  text-gray-400 text-center hover:text-blue-600 cursor-pointer">
            <span className="mr-3">
              <Settings size={20} />
            </span>
            Setting
          </div>
        </nav>
      </div>
    </div>

    {/* Overlay for mobile */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
    )}
  </>
);

export default Sidebar;
