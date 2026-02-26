
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose }) => {
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-sm flex flex-col items-center"
          onClick={onClose}
        >
          {/* Toolbar */}
          <div className="w-full flex justify-end p-6 z-10 sticky top-0">
            <button 
              className="bg-stone-800/50 hover:bg-stone-700 p-2 rounded-full text-white/70 hover:text-white transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Image Container */}
          <div 
            className="w-full h-full overflow-y-auto px-4 pb-20 flex flex-col items-center gap-8 hide-scrollbar"
            onClick={(e) => e.stopPropagation()} 
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                src={src}
                alt={`Detail view ${index + 1}`}
                referrerPolicy="no-referrer"
                className="max-w-full md:max-w-5xl w-auto h-auto rounded shadow-2xl object-contain"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
