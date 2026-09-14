import { useState } from 'react';
import { notifications as initial } from '../data/cars';
import { CheckCircle, AlertCircle, Info, Bell } from 'lucide-react';

const icons = {
  success: CheckCircle,
  warning: AlertCircle,
  info: Info,
};

const colors = {
  success: 'bg-green-100 text-green-600',
  warning: 'bg-amber-100 text-amber-600',
  info: 'bg-blue-100 text-blue-600',
};

export default function Notifications() {
  const [notifs, setNotifs] = useState(initial);

  const markAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Bell className="w-6 h-6" /> Notifications
        </h1>
        <button onClick={markAllRead} className="text-sm text-blue-600 font-medium hover:text-blue-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifs.map((n) => {
          const Icon = icons[n.type] || Info;
          return (
            <div
              key={n.id}
              className={`card p-4 flex gap-4 items-start transition ${!n.read ? 'border-l-4 border-l-blue-600 bg-blue-50/30' : ''}`}
            >
              <div className={`p-2 rounded-full shrink-0 ${colors[n.type]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`text-sm font-semibold ${!n.read ? 'text-gray-900' : 'text-gray-700'}`}>{n.title}</h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{n.time}</span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{n.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
