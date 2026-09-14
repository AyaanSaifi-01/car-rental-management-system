import { Link, useNavigate } from 'react-router-dom';
import { adminBookings } from '../../data/cars';
import { LayoutDashboard, Car, Calendar, Users, LogOut, Eye } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const statusColors = {
  Upcoming: 'bg-blue-100 text-blue-700',
  Completed: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function ManageBookings() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-6">
        <aside className="hidden md:block w-56 shrink-0">
          <div className="card p-4 sticky top-24">
            <nav className="space-y-1">
              <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/admin/cars" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <Car className="w-4 h-4" /> Cars
              </Link>
              <Link to="/admin/bookings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700">
                <Calendar className="w-4 h-4" /> Bookings
              </Link>
              <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <Users className="w-4 h-4" /> Users
              </Link>
              <button onClick={() => { logout(); navigate('/login'); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 w-full">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </nav>
          </div>
        </aside>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Bookings</h1>

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-500">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">User</th>
                  <th className="px-4 py-3 font-medium">Car</th>
                  <th className="px-4 py-3 font-medium">Dates</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminBookings.map((b) => (
                  <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-gray-500">{b.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{b.user}</td>
                    <td className="px-4 py-3 text-gray-600">{b.car}</td>
                    <td className="px-4 py-3 text-gray-600">{b.dates}</td>
                    <td className="px-4 py-3">
                      <span className={`badge ${statusColors[b.status]}`}>{b.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
