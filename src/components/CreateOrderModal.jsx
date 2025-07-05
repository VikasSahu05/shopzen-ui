import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const initialState = {
  customer: '',
  payment: 'Pending',
  total: '',
  items: 1,
  fulfillment: 'Unfulfilled',
};

const CreateOrderModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'items' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customer || !form.total) {
      setError('Please fill all required fields.');
      return;
    }
    setError('');
    setForm(initialState);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
  className="absolute inset-0 bg-opacity-40 backdrop-blur-sm transition-opacity duration-300"
  onClick={onClose}
/>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 z-50">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={24} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Order</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="customer"
                value={form.customer}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Status
                </label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100"
                >
                  <option value="Pending">Pending</option>
                  <option value="Success">Success</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="total"
                  value={form.total}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100"
                  min={0}
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Items
                </label>
                <input
                  type="number"
                  name="items"
                  value={form.items}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100"
                  min={1}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fulfillment Status
                </label>
                <select
                  name="fulfillment"
                  value={form.fulfillment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100"
                >
                  <option value="Unfulfilled">Unfulfilled</option>
                  <option value="Fulfilled">Fulfilled</option>
                </select>
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 shadow-sm"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderModal;