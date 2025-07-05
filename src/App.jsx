import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import SummaryCards from './components/SummaryCards';
import OrdersTable from './components/OrdersTable';
import CreateOrderModal from './components/CreateOrderModal';
import { FiChevronDown } from 'react-icons/fi';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-start">
        <div className="w-full bg-white h-full">
          <Navbar />
          <main className="px-8 pt-6 pb-0">
            <SummaryCards onCreateOrder={() => setIsModalOpen(true)} />
            <div className="mt-6">
              <OrdersTable />
            </div>
          </main>
        </div>
      </div>
      <CreateOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
