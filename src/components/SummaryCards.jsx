import React, { useState, useRef } from 'react';
import { FiChevronRight, FiChevronLeft, FiChevronUp, FiChevronDown, FiCalendar, FiX } from 'react-icons/fi';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ArrowUp } from 'phosphor-react';

const cards = [
  { title: 'Total Orders', value: '21', trend: '+25.2%', trendUp: true, sub: 'last week', chartColor: '#FACC15' }, // yellow-400
  { title: 'Order items over time', value: '15', trend: '+18.2%', trendUp: true, sub: 'last week', chartColor: '#4ADE80' }, // green-400
  { title: 'Returns Orders', value: '0', trend: '-1.2%', trendUp: false, sub: 'last week', chartColor: '#F87171' }, // red-400
  { title: 'Fulfilled orders over time', value: '12', trend: '+12.2%', trendUp: true, sub: 'last week', chartColor: '#4ADE80' }, // green-400
  { title: 'Cancelled Orders', value: '3', trend: '-2.1%', trendUp: false, sub: 'last week', chartColor: '#F87171' },
  { title: 'New Customers', value: '8', trend: '+5.0%', trendUp: true, sub: 'last week', chartColor: '#60A5FA' }, // blue-400
  { title: 'Repeat Customers', value: '5', trend: '+2.3%', trendUp: true, sub: 'last week', chartColor: '#A78BFA' }, // purple-400
  { title: 'Pending Orders', value: '4', trend: '-0.5%', trendUp: false, sub: 'last week', chartColor: '#FACC15' },
];

const TrendChart = ({ color }) => (
  <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
    {/* Dotted line (black/gray) */}
    <line
      x1="0"
      y1="30"
      x2="100"
      y2="30"
      stroke="#222"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    {/* Trend line, with gap above dotted line */}
    <polyline
      points="0,24 15,14 30,18 45,10 60,16 75,8 100,12"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CARDS_PER_SLIDE = 4;

const SummaryCards = ({ onCreateOrder }) => {
  const [slide, setSlide] = useState(0);
  const maxSlide = Math.ceil(cards.length / CARDS_PER_SLIDE) - 1;
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 0, 30),
      key: 'selection',
    },
  ]);
  const pickerRef = useRef();

  // Close picker when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNext = () => {
    setSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const handlePrev = () => {
    setSlide((prev) => Math.max(prev - 1, 0));
  };

  const visibleCards = cards.slice(slide * CARDS_PER_SLIDE, (slide + 1) * CARDS_PER_SLIDE);

  return (
    <div className="relative w-full">
      {/* Orders Title and Actions */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        <div className="flex gap-2">
          <button className="border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-none flex items-center gap-2">
            <ArrowUp size={18} weight="regular" />
            Export
          </button>
          <button className="border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-gray-50 shadow-none">
            More actions <FiChevronDown size={16} />
          </button>
          <button
            onClick={onCreateOrder}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-none"
          >
            Create order
          </button>
        </div>
      </div>
      {/* Date Range Filter */}
      <div className="flex items-center mb-6 relative">
        <button
          className="flex items-center gap-2 bg-gray-50 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium shadow-none hover:bg-gray-100"
          type="button"
          onClick={() => setShowPicker((prev) => !prev)}
        >
          <FiCalendar className="text-gray-400" size={18} />
          <span>
            {format(range[0].startDate, 'MMM d, yyyy')} - {format(range[0].endDate, 'MMM d, yyyy')}
          </span>
          <FiChevronDown className="text-gray-400" size={18} />
        </button>
        {showPicker && (
          <div ref={pickerRef} className="absolute z-10 mt-2">
            <DateRange
              editableDateInputs={true}
              onChange={item => setRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={range}
              rangeColors={['#6366F1']}
              className="shadow-lg rounded-xl"
            />
          </div>
        )}
      </div>
      {/* Cards Row with Arrows Centered */}
      <div className="relative flex items-center w-full">
        {/* Left Arrow Button */}
        {slide > 0 && (
          <button
            onClick={handlePrev}
            className="bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-50 z-10 mr-2"
            aria-label="Previous"
            type="button"
          >
            <FiChevronLeft size={20} />
          </button>
        )}
        {/* Cards Row */}
        <div className="flex w-full">
          {visibleCards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex flex-col justify-between w-1/4 mx-2"
                style={{ minWidth: 0 }}
              >
                <div className="text-xs text-gray-500 font-medium mb-2">{card.title}</div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {card.value} <span className="font-normal">-</span>
                    </div>
                    <div className="flex items-center text-xs mt-1">
                      {/* Filled caret and percentage, both black */}
                      <span className="mr-1 text-[13px] text-gray-400" style={{lineHeight: 1}}>
                        {card.trendUp ? '▲' : '▼'}
                      </span>
                      <span className="text-gray-400 font-medium">{card.trend}</span>
                      <span className="text-gray-400 ml-1">{card.sub}</span>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-col items-end">
                    <div className="mb-1">
                      <TrendChart color={card.chartColor} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right Arrow Button */}
        {slide < maxSlide && (
          <button
            onClick={handleNext}
            className="bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-50 z-10 ml-2"
            aria-label="Next"
            type="button"
          >
            <FiChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SummaryCards;
