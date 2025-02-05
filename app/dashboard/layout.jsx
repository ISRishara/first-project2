import SidePanel from "./components/side-panel";
import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-gray-100">
      {/*Side panel */}
      <aside className="w-64 overflow-y-auto border-r bg-white shadow-lg">
        <SidePanel />
      </aside>
      <div className="bg-gray-500 flex flex-1 flex-col overflow-hidden">
        {/*Dashboard header */}
        <header className="bg-red-900 flex h-16 items-center justify-between gap-4 border-b px-6 shadow-sm">
          <h1 className="text-2xl font-bold text-white ">Netflix Dashboard</h1>
          <UserNav />
        </header>

        {/*dashboard pages*/}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
