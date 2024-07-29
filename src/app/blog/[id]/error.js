"use client";

export default function Loading() {
  return (
    <div className="w-full min-h-full fixed inset-0 flex flex-col items-center justify-center">
      <p className="text-gray-800 text-xl">Terjadi Error</p>
      <button
        className="mt-3 underline"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
}
