"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { IconCreditCard} from "@tabler/icons-react";
import { IconUsb} from "@tabler/icons-react";
import { IconWifi} from "@tabler/icons-react";

const cards = [
  { id: 1, label: "Toughkey" },
  { id: 2, label: "Toughkey" },
  { id: 3, label: "Toughkey" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center gap-3 py-2">
        <span className="text-3xl">🏠</span>
        <span className="text-2xl font-semibold">Dashboard</span>
      </div>
      {/* Responsive Cards */}
      <div className="py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="w-full max-w-sm bg-[#171717] border-0 flex flex-col items-center p-7 rounded-xl shadow-lg"
            >
              <div className="flex gap-4 mb-6">
                <div className="rounded-full bg-[#333] p-3 flex items-center justify-center shadow border-[10px] border-[#1c1b1b]">
                  <IconCreditCard size={32} className="text-[#26BAD9]" />
                </div>
                <div className="rounded-full bg-[#333] p-3 flex items-center justify-center shadow border-[10px] border-[#1c1b1b]">
                <IconUsb size={32} className="text-[#26BAD9]" />
                </div>
                <div className="rounded-full bg-[#333] p-3 flex items-center justify-center shadow border-[10px] border-[#1c1b1b]">
                <IconWifi size={32} className="text-[#26BAD9]" />
                </div>
              </div>
              <div className="text-center text-lg text-gray-200 font-medium">{card.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
