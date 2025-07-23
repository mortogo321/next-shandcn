"use client";
import { Button } from "@/components/ui/button";
import { IconRefresh } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center gap-3 py-2">
        <span className="text-3xl">💻 </span>
        <span className="text-2xl font-semibold">UI Component</span>
      </div>
      <div className="flex items-center w-full gap-12 mt-6">
        {/* Card 1 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md cursor-pointer transition-shadow hover:shadow-2xl dark-bg text-white p-12" onClick={() => router.push("/uicomponent/step-1")}>
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/toughlok.svg" alt="toughlok Icon" className="w-auto mb-2 max-w-[140px]" />
            <div className="text-center w-full pb-2">
              <h1 className="text-xl font-semibold mb-1">Toughlok Toughbox Service</h1>
              <div className="mx-auto mt-2 mb-1" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <p className="text-gray-300 font-normal text-sm mt-2">The web page is requesting access to ToughKey, give them access?</p>
            </div>
            <div className="flex w-full gap-4 mt-6">
              <Button variant="secondaryCta" className="flex-1">
                No
              </Button>
              <Button variant="cta" className="flex-1">
                Yes
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md dark-bg text-white p-12">
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/usbkey.svg" alt="toughlok Icon" className="w-auto mb-2 max-w-[140px]" />
            <div className="text-center w-full pb-2">
              <h1 className="text-xl font-semibold mb-1">Insert Toughkey</h1>
              <div className="mx-auto mt-2 mb-1" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <p className="text-gray-300 font-normal text-sm mt-2">Please insert the Toughkey device that you want to use</p>
            </div>
            <div className="flex w-full gap-4 mt-6">
              <Button variant="secondaryCta" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full gap-12 mt-6">
        {/* Card 3 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md dark-bg text-white p-12">
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/lockkey.svg" alt="toughlok Icon" className="w-auto mb-2 max-w-[140px]" />
            <div className="w-full pb-2">
              <h1 className="text-xl font-semibold mb-1 text-center ">New Toughkey</h1>
              <div className="mx-auto mt-2 mb-4" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <div className="my-2">
                <label className="text-gray-300 font-normal text-sm mb-2 block">Enter a new password for your Toughkey.</label>
                <input type="password" className="w-full input-dark-bg text-white text-2xl rounded-lg h-12 px-4 outline-none border-none placeholder:text-white/60" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex w-full gap-4 mt-4">
              <Button variant="secondaryCta" className="flex-1">
                Cancel
              </Button>
              <Button variant="cta" className="flex-1">
                Okay
              </Button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md dark-bg text-white p-12">
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/removekey.svg" alt="toughlok Icon" className="w-auto mb-2 max-w-[140px]" />
            <div className="w-full pb-2">
              <h1 className="text-xl font-semibold mb-1 text-center ">Remove Toughkey</h1>
              <div className="mx-auto mt-2 mb-4" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <div className="my-2">
                <label className="text-gray-300 font-normal text-sm mb-2 block">Toughkey initialized, remove it to continue. When prompted, insert next Toughkey.</label>
                <input type="password" className="w-full input-dark-bg text-white text-2xl rounded-lg h-12 px-4 outline-none border-none placeholder:text-white/60" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex w-full gap-4 mt-2">
              <Button variant="secondaryCta" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-12 mt-6">
        {/* Card 5 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md dark-bg text-white p-12">
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/encrypt.svg" alt="toughlok Icon" className="w-auto mb-2 max-w-[140px]" />
            <div className="w-full pb-2">
              <h1 className="text-xl font-semibold mb-1 text-center ">✅ Encryption Successful!</h1>
              <div className="mx-auto mt-2 mb-4" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <p className="text-gray-300 font-normal text-sm mt-2 text-center">Encryption is complete. Your Toughkey is ready to use—keep it secure.</p>
            </div>
            <div className="flex w-full gap-4 mt-4">
              <Button variant="secondaryCta" className="flex-1">
                Cancel
              </Button>
              <Button variant="cta" className="flex-1">
                Okay
              </Button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-2xl shadow-xl flex-1 w-full max-w-md dark-bg text-white p-12">
          <div className="flex flex-col items-center gap-6 w-full">
            <img src="/vectors/usbkey.svg" alt="toughlok Icon" className="w-auto max-w-[140px] mt-2" />
            <div className="w-full p-8 bg-[#23262F] rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold mb-1 text-left ">ToughKey LB I</h1>
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#26BAD9] text-sm font-normal select-none cursor-pointer hover:underline focus:outline-none"
                  style={{ background: "none", border: "none", padding: 0 }}
                  onClick={() => {
                    /* handle refresh here */
                  }}
                >
                  <IconRefresh size={20} />
                  Refresh
                </button>
              </div>
              <div className="mt-2 mb-4" style={{ width: "60px", height: "2px", background: "#26BAD9", borderRadius: "1px" }} />
              <div className="my-2">
                <label className="text-gray-300 font-normal text-sm mb-2 block">Enter a new password for your Toughkey.</label>
                <input type="password" className="w-full bg-[#23262F] text-white text-2xl rounded-lg h-12 px-4 outline-none border-none placeholder:text-white/60" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex w-full gap-4 mt-2">
              <Button variant="secondaryCta" className="flex-1">
                Close
              </Button>
              <Button variant="cta" className="flex-1">
                Unlock
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
