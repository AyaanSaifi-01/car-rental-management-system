import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars as initialCars } from '../../data/cars';
import { Plus, Pencil, Trash2, LayoutDashboard, Car, Calendar, Users, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ManageCars() {
  const [carList, setCarList] = useState(initialCars);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Delete this car?')) {
      setCarList(carList.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-6">
        <aside className="hidden md:block w-56 shrink-0">
          <div className="card p-4 sticky top-24">
            <nav className="space-y-1">
              <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/admin/cars" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700">
                <Car className="w-4 h-4" /> Cars
              </Link>
              <Link to="/admin/bookings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Manage Cars</h1>
            <button className="btn-primary flex items-center gap-2 text-sm py-2">
              <Plus className="w-4 h-4" /> Add New Car
            </button>
          </div>

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-500">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Image</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Price/Day</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {carList.map((car, i) => (
                  <tr key={car.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                    <td className="px-4 py-3">
                      <img src={car.image} alt="" className="w-14 h-10 object-cover rounded-lg" />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{car.name}</td>
                    <td className="px-4 py-3 text-gray-600">{car.type}</td>
                    <td className="px-4 py-3 font-semibold">₹{car.price.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <span className="badge bg-green-100 text-green-700">Active</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(car.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
