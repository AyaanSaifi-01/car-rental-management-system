import { Link } from 'react-router-dom';
import { Users, Car, Calendar, IndianRupee, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Total Users', value: '1,250', icon: Users, color: 'bg-blue-500' },
  { label: 'Total Cars', value: '120', icon: Car, color: 'bg-green-500' },
  { label: 'Total Bookings', value: '980', icon: Calendar, color: 'bg-amber-500' },
  { label: 'Total Revenue', value: '₹12,50,000', icon: IndianRupee, color: 'bg-purple-500' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const chartData = [65, 78, 52, 90, 70, 95];

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <div className="card p-4 sticky top-24">
            <nav className="space-y-1">
              <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/admin/cars" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <Car className="w-4 h-4" /> Cars
              </Link>
              <Link to="/admin/bookings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <Calendar className="w-4 h-4" /> Bookings
              </Link>
              <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <Users className="w-4 h-4" /> Users
              </Link>
              <button
                onClick={() => { logout(); navigate('/login'); }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 w-full"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </nav>
          </div>
        </aside>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="card p-5 flex items-center gap-4">
                <div className={`${s.color} p-3 rounded-xl text-white`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{s.label}</p>
                  <p className="text-xl font-bold text-gray-900">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="card p-6">
            <h2 className="font-semibold text-gray-900 mb-6">Bookings Overview</h2>
            <div className="flex items-end gap-3 h-48">
              {chartData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-xs text-gray-500">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
