"use client";
import React from "react";
import { Button } from "./button";
import { useSidebar } from "@/components/ui/sidebar";
import { IconMenu, IconSettings, IconUser } from "@tabler/icons-react";

export default function Header() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  return (
    <header
      className="sticky w-full top-0 z-10 bg-background flex items-center h-16 text-white"
      style={{ background: "#212121" }}
    >
      {/* Sidebar toggle for mobile */}
      <div
        className="flex items-center w-64 h-16 px-4 gap-4"
        style={{ background: "#212121" }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <IconMenu size={24} />
        </Button>
        <span className="text-lg font-medium">Lokblok</span>
      </div>
      <div className="ml-auto flex items-center gap-4 h-16 px-8 gap-4">
        <IconSettings size={22} className="cursor-pointer" />
        <IconUser size={22} className="cursor-pointer" />
      </div>
    </header>
  );
}
