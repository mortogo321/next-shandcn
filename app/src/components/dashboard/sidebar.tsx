import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
