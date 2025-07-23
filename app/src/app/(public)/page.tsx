"use client";

import LogoMain from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/cloud-bg.jpg')" }}>
      <Card className="w-full max-w-3xl rounded-2xl shadow-xl border-none bg-[#181A20] text-white p-12 flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center mb-2">
          <LogoMain />
        </div>
        {/* Title & Description */}
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-2">Welcome New User</h1>
          <p className="text-gray-400 text-sm mb-4">Thank you for choosing Lokblok to secure your digital content, including passwords, keys, and files.</p>
        </div>
        {/* Getting Started Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-3">Getting Started:</h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6 text-sm">
            <li>Log In: Use the username and password you created during registration to access your account.</li>
            <li>Visit Toughkeys: From your dashboard, navigate to the Toughkeys page and follow the provided instructions.</li>
          </ol>
          {/* Screenshot/Image */}
          <div className="flex justify-center mb-6">
            <Image src="/welcome-card.jpg" alt="Welcome Card Screenshot" className="rounded-xl max-w-full max-h-56 object-contain" width={672} height={213} priority />
          </div>
          <ol start={3} className="list-decimal list-inside text-gray-400 text-sm space-y-2">
            <li>Initialize Your Toughkeys: On the Toughkeys page, click the Initialize Toughkeys button to set up your Lokblok keys. This ensures you can recover any lost key or device, giving you uninterrupted access to your data.</li>
          </ol>
        </div>
        {/* Continue Button */}
        <div className="w-full flex justify-end mt-4">
          <Button variant="cta" asChild>
            <Link href="/login">Continue</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
