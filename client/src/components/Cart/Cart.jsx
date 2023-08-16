import React from 'react';

export default function Cart() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-4">Your Cart</p>
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    </div>
  );
}
