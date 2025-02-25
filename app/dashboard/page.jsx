// export default function DashboardPage() {
//   return (
//     <div> Dashboard Page</div>
    
//   )
// }

import MoviesPublicPage from "../movies/page";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <MoviesPublicPage />
    </div>
  );
}


