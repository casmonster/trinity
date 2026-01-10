import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-secondary mb-4">Admin Dashboard</h1>
          <p className="text-slate-600 mb-6">
            Database integration has been removed. Messages are now sent via WhatsApp.
          </p>
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