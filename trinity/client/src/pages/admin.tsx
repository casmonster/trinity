import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
// Use this URL for all API requests

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const { data: contacts, isLoading, error } = useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
    const res = await fetch(`${apiBaseUrl}/contacts`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600">Loading contact messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading contacts</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-secondary mb-4">Contact Messages</h1>
          <p className="text-slate-600">Messages received through the portfolio contact form</p>
        </motion.div>

        {!contacts || contacts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 mb-4">
              <i className="fas fa-inbox text-6xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No messages yet</h3>
            <p className="text-slate-500">Contact form submissions will appear here</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-1">
                      {contact.subject}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-user"></i>
                        {contact.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-envelope"></i>
                        {contact.email}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <div>{new Date(contact.created_at).toLocaleDateString()}</div>
                    <div>{new Date(contact.created_at).toLocaleTimeString()}</div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 leading-relaxed">{contact.message}</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <a
                    href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                    className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-reply"></i>
                    Reply
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-envelope"></i>
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  );
}