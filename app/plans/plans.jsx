"use client";

export default function LoginPage() {
  return (
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="max-w-screen-xl p-8 bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-8 text-center">Designed for business teams like yours</h1>
    <p class="text-lg mb-8 text-center">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <h2 class="text-xl font-semibold mb-4">Starter</h2>
        <p>Best option for personal use & for your next project.</p>
        <div class="text-5xl font-bold mb-4">$29<span class="text-xl">/month</span></div>
        <ul class="list-none">
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Individual configuration</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> No setup, or hidden fees</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Team size: 1 developer</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Premium support: 6 months</li>
          <li><i class="fas fa-check text-green-500"></i> Free updates: 6 months</li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">Get started</button>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <h2 class="text-xl font-semibold mb-4">Company</h2>
        <p>Relevant for multiple users, extended & premium support.</p>
        <div class="text-5xl font-bold mb-4">$99<span class="text-xl">/month</span></div>
        <ul class="list-none">
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Individual configuration</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> No setup, or hidden fees</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Team size: 10 developers</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Premium support: 24 months</li>
          <li><i class="fas fa-check text-green-500"></i> Free updates: 24 months</li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">Get started</button>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <h2 class="text-xl font-semibold mb-4">Enterprise</h2>
        <p>Best for large scale uses and extended redistribution rights.</p>
        <div class="text-5xl font-bold mb-4">$499<span class="text-xl">/month</span></div>
        <ul class="list-none">
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Individual configuration</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> No setup, or hidden fees</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Team size: 100+ developers</li>
          <li class="mb-2"><i class="fas fa-check text-green-500"></i> Premium support: 36 months</li>
          <li><i class="fas fa-check text-green-500"></i> Free updates: 36 months</li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">Get started</button>
      </div>
    </div>
  </div>
</div>
 );
}