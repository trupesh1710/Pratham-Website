import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.span
            className="font-display font-extrabold text-2xl tracking-tight text-paper"
            initial={{ letterSpacing: '0.4em', opacity: 0 }}
            animate={{ letterSpacing: '0.02em', opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Pratham_In_UK<span className="text-orange">.</span>
          </motion.span>
          <div className="w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-orange"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
