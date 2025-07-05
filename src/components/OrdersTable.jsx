import React, { useState } from 'react';
import { FiFileText, FiMessageCircle, FiSearch, FiFilter, FiMoreHorizontal } from 'react-icons/fi';
import { MdImportExport, MdOutlineNoteAlt, MdOutlineChatBubbleOutline } from 'react-icons/md';

const orders = [
  {
    order: '#1002',
    date: '11 Feb, 2024',
    customer: 'Wade Warren',
    payment: 'Pending',
    total: '$20.00',
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1004',
    date: '13 Feb, 2024',
    customer: 'Esther Howard',
    payment: 'Success',
    total: '$22.00',
    delivery: 'N/A',
    items: '3 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1007',
    date: '15 Feb, 2024',
    customer: 'Jenny Wilson',
    payment: 'Pending',
    total: '$25.00',
    delivery: 'N/A',
    items: '3 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1009',
    date: '17 Feb, 2024',
    customer: 'Guy Hawkins',
    payment: 'Success',
    total: '$27.00',
    delivery: 'N/A',
    items: '5 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1011',
    date: '19 Feb, 2024',
    customer: 'Jacob Jones',
    payment: 'Pending',
    total: '$32.00',
    delivery: 'N/A',
    items: '4 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1013',
    date: '21 Feb, 2024',
    customer: 'Kristin Watson',
    payment: 'Success',
    total: '$25.00',
    delivery: 'N/A',
    items: '3 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1015',
    date: '23 Feb, 2024',
    customer: 'Albert Flores',
    payment: 'Pending',
    total: '$28.00',
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
  {
    order: '#1018',
    date: '25 Feb, 2024',
    customer: 'Eleanor Pena',
    payment: 'Success',
    total: '$35.00',
    delivery: 'N/A',
    items: '1 items',
    fulfillment: 'Fulfilled',
  },
  {
    order: '#1019',
    date: '27 Feb, 2024',
    customer: 'Theresa Webb',
    payment: 'Pending',
    total: '$20.00',
    delivery: 'N/A',
    items: '2 items',
    fulfillment: 'Unfulfilled',
  },
];

const badgeClass = (type, value) => {
  if (type === 'payment') {
    return value === 'Success'
      ? 'bg-green-50 text-green-600 border-green-200'
      : 'bg-yellow-50 text-yellow-700 border-yellow-200';
  }
  if (type === 'fulfillment') {
    return value === 'Fulfilled'
      ? 'bg-green-50 text-green-600 border-green-200'
      : 'bg-red-50 text-red-500 border-red-200';
  }
  return '';
};

const OrdersTable = () => {
  // State to track which rows are selected
  const [selectedRows, setSelectedRows] = useState([]);

  // Check if all rows are selected
  const allSelected = selectedRows.length === orders.length;

  // Handle header checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(orders.map((order) => order.order));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle row checkbox
  const handleSelectRow = (orderId) => (e) => {
    if (e.target.checked) {
      setSelectedRows((prev) => [...prev, orderId]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => id !== orderId));
    }
  };

  return (
    <div>
      {/* Filter Bar - simple background, no card */}
      <div className="flex items-center justify-between px-0 pt-2 pb-2 mb-2 bg-transparent">
        {/* Left: Filter Buttons */}
        <div className="flex gap-2 bg-gray-50 rounded-xl p-1">
          <button className="px-4 py-1 rounded-lg bg-white text-gray-900 font-semibold shadow border border-gray-200 focus:outline-none">
            All
          </button>
          <button className="px-4 py-1 rounded-lg text-gray-500 hover:bg-white border border-transparent hover:border-gray-200 transition">
            Unfulfilled
          </button>
          <button className="px-4 py-1 rounded-lg text-gray-500 hover:bg-white border border-transparent hover:border-gray-200 transition">
            Unpaid
          </button>
          <button className="px-4 py-1 rounded-lg text-gray-500 hover:bg-white border border-transparent hover:border-gray-200 transition">
            Open
          </button>
          <button className="px-4 py-1 rounded-lg text-gray-500 hover:bg-white border border-transparent hover:border-gray-200 transition">
            Closed
          </button>
          <button className="px-4 py-1 rounded-lg text-gray-500 hover:bg-white border border-transparent hover:border-gray-200 transition flex items-center gap-1">
            <span className="text-lg font-bold">+</span> Add
          </button>
        </div>
        {/* Right: Icon Buttons */}
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-500">
            <FiSearch size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-500">
            <FiFilter size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-500">
            <MdImportExport size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-500">
            <FiMoreHorizontal size={18} />
          </button>
        </div>
      </div>
      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 font-semibold">
              <th className="px-4 py-3 text-left w-8">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-0"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-3 text-left">Order</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Delivery</th>
              <th className="px-4 py-3 text-left">Items</th>
              <th className="px-4 py-3 text-left">Fulfillment</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={order.order}
                className="border-t border-gray-100 bg-white hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 w-8">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-0"
                    checked={selectedRows.includes(order.order)}
                    onChange={handleSelectRow(order.order)}
                  />
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">{order.order}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-semibold ${badgeClass(
                      'payment',
                      order.payment
                    )}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-1 ${
                        order.payment === 'Success'
                          ? 'bg-[#22C55E]'
                          : 'bg-[#F59E42]'
                      }`}
                    ></span>
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">{order.delivery}</td>
                <td className="px-4 py-3">{order.items}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-semibold ${badgeClass(
                      'fulfillment',
                      order.fulfillment
                    )}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-1 ${
                        order.fulfillment === 'Fulfilled'
                          ? 'bg-[#22C55E]'
                          : 'bg-[#F87171]'
                      }`}
                    ></span>
                    {order.fulfillment}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-4 justify-center items-center">
                  <MdOutlineNoteAlt size={20} className="text-gray-400" />
                  <MdOutlineChatBubbleOutline size={20} className="text-gray-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
