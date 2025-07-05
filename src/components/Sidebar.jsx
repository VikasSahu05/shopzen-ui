import React, { useState, useEffect } from 'react';
import {
  House,
  ArchiveBox,
  Tag,
  Users,
  FileText,
  Coins,
  ChartBar,
  Megaphone,
  Storefront,
  Package,
  ShoppingCart,
  SquaresFour,
  Gear
} from 'phosphor-react';
import { FiChevronLeft } from 'react-icons/fi';

const menuConfig = [
  {
    label: "Home",
    icon: <House size={22} weight="regular" />,
    key: "home",
  },
  {
    label: "Orders",
    icon: <ArchiveBox size={22} weight="regular" />,
    key: "orders",
    children: [
      { label: "Drafts", key: "drafts" },
      { label: "Shipping labels", key: "shipping-labels" },
      { label: "Abandoned checkouts", key: "abandoned-checkouts" },
    ],
  },
  {
    label: "Products",
    icon: <Tag size={22} weight="regular" />,
    key: "products",
    children: [],
  },
  {
    label: "Customers",
    icon: <Users size={22} weight="regular" />,
    key: "customers",
    children: [],
  },
  {
    label: "Content",
    icon: <FileText size={22} weight="regular" />,
    key: "content",
    children: [],
  },
  {
    label: "Finances",
    icon: <Coins size={22} weight="regular" />,
    key: "finances",
    children: [],
  },
  {
    label: "Analytics",
    icon: <ChartBar size={22} weight="regular" />,
    key: "analytics",
    children: [],
  },
  {
    label: "Marketing",
    icon: <Megaphone size={22} weight="regular" />,
    key: "marketing",
    children: [],
  },
  {
    label: "Discounts",
    icon: <Tag size={22} weight="regular" />,
    key: "discounts",
    badge: "New",
    children: [],
  },
];

const salesChannels = [
  {
    label: "Online Store",
    icon: <Storefront size={22} weight="regular" />,
    key: "online-store",
    children: [],
  },
  {
    label: "Point of Sale",
    icon: <Package size={22} weight="regular" />,
    key: "point-of-sale",
    children: [],
  },
  {
    label: "Shop",
    icon: <ShoppingCart size={22} weight="regular" />,
    key: "shop",
    children: [],
  },
];

const apps = [
  {
    label: "Add Apps",
    icon: <SquaresFour size={22} weight="regular" />,
    key: "add-apps",
    children: [],
  },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState(["orders"]);
  const [selected, setSelected] = useState("orders");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Automatically close all submenus and hide logo when sidebar is collapsed
  useEffect(() => {
    if (!sidebarOpen) {
      setOpenMenus([]);
    }
  }, [sidebarOpen]);

  const handleMenuClick = (key, hasChildren) => {
    setSelected(key);
    if (hasChildren) {
      setOpenMenus((prev) =>
        prev.includes(key)
          ? prev.filter((k) => k !== key)
          : [...prev, key]
      );
    }
  };

  const renderMenu = (menu, isSub = false) => {
    const isOpen = openMenus.includes(menu.key);
    const isSelected = selected === menu.key;
    return (
      <div key={menu.key}>
        <div
          className={`flex items-center justify-between cursor-pointer px-4 py-2 mb-1 transition
            ${isSelected && !isSub
              ? "bg-gradient-to-b from-[#f3f1f9] to-[#f7f4f9] border border-[#f6f2fd] shadow-sm text-purple-600 font-semibold rounded-xl"
              : "text-gray-700 rounded-lg hover:bg-gray-100"}
            `}
          onClick={() => handleMenuClick(menu.key, !!menu.children)}
        >
          <div className="flex items-center gap-2">
            {menu.icon && (
              <span
                className={`text-lg ${
                  isSelected && !isSub ? "text-purple-600" : "text-gray-400"
                }`}
              >
                {menu.icon}
              </span>
            )}
            {sidebarOpen && <span>{menu.label}</span>}
            {menu.badge && sidebarOpen && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded bg-purple-50 text-purple-500">
                {menu.badge}
              </span>
            )}
          </div>
          {menu.children && menu.key !== "discounts" && sidebarOpen && (
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } ${isSelected && !isSub ? "text-purple-600" : "text-gray-400"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
        {menu.children && isOpen && menu.key === "orders" && (
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-4 flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-200" />
            </div>
            {menu.children.map((child, idx) => (
              <div key={child.key} className="relative flex items-center group">
                {/* Dot */}
                <div className="absolute left-[-22px] flex flex-col items-center h-full">
                  <span className="w-2 h-2 rounded-full bg-gray-200 block" />
                </div>
                <div
                  className={`pl-2 py-2 cursor-pointer rounded-lg w-full
                    ${selected === child.key ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-700"}
                    hover:bg-gray-50`}
                  onClick={() => setSelected(child.key)}
                >
                  {child.label}
                </div>
              </div>
            ))}
          </div>
        )}
        {menu.children && isOpen && menu.key !== "orders" && (
          <div>
            <div className="pl-6 border-l border-gray-200 ml-3">
              {menu.children.map((child) =>
                renderMenu(child, true)
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={`min-h-screen bg-[#F8FAFC] p-4 flex flex-col rounded-2xl transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
      {/* Logo and toggle */}
      <div className="flex items-center gap-2 mb-8">
        {sidebarOpen && (
          <div className="bg-purple-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg">
            S
          </div>
        )}
        {sidebarOpen && <span className="font-bold text-lg tracking-tight">ShopZen</span>}
        <button
          className="ml-auto p-2 rounded hover:bg-gray-200"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <FiChevronLeft className={`transition-transform ${sidebarOpen ? "" : "rotate-180"}`} />
        </button>
      </div>
      {/* Main Menu */}
      <nav className="flex-1">
        <div className="mb-6">
          {menuConfig.map((menu) => renderMenu(menu))}
        </div>
        {/* Sales Channels Heading */}
        {sidebarOpen && (
          <div className="mb-2 px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider">
            Sales Channels
          </div>
        )}
        <div className="mb-6">
          {salesChannels.map((menu) => renderMenu(menu))}
        </div>
        {/* Apps Heading */}
        {sidebarOpen && (
          <div className="mb-2 px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider">
            Apps
          </div>
        )}
        <div className="mb-6">
          {apps.map((menu) => renderMenu(menu))}
        </div>
      </nav>
      {/* Settings */}
      <div className="mt-auto px-4 py-2 flex items-center gap-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
        <Gear size={22} weight="regular" />
        {sidebarOpen && <span>Setting</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
