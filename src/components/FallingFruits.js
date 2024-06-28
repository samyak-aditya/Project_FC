import React from 'react';
import { motion } from 'framer-motion';
import apple from '../assets/images/apple.png'; // Add other fruit images similarly
import Background from './Background';

const fruits = [apple]; // Add other fruit images to the array

const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

const FallingFruits = () => {
  return (
    <>
    <Background />
      {fruits.map((fruit, index) => (
        <motion.img
          key={index}
          src={fruit}
          alt="fruit"
          style={{
            position: 'absolute',
            top: '-10%',
            left: `${generateRandomNumber(0, 100)}%`,
            width: `${generateRandomNumber(30, 100)}px`,
            height: 'auto',
            zIndex: -1,
          }}
          initial={{ y: '-100vh', opacity: 1 }}
          animate={{ y: '100vh', opacity: 1 }}
          transition={{
            duration: generateRandomNumber(5, 10),
            delay: generateRandomNumber(0, 5),
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
};

export default FallingFruits;
