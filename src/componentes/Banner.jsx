/* eslint-disable no-unused-vars */

import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          border: '8px solid #EF4444',
          borderRadius: '12px',
          padding: '8px',
          backgroundColor: 'white'
        }}
      >
        <div 
          style={{
            backgroundColor: '#FF8901',
            borderRadius: '8px',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem'
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            INICIO
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            ACERCA DE
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            CURSOS
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;