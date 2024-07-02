import React from 'react';
import { motion } from 'framer-motion';
import apple from '../assets/images/apple.png';
import grapes from '../assets/images/grapes (1).png'
import orange from '../assets/images/orange (1).png'
import strawberry from '../assets/images/strawberry.png'
import lemon from '../assets/images/lemon (2).png'
import pineapple from '../assets/images/pineapple (1).png'
import raspberry from '../assets/images/raspberry (2).png'
import bananas from '../assets/images/bananas.png'
import blueberry from '../assets/images/blueberry (1).png'
import watermelon from '../assets/images/watermelon.png'
import Background from './Background';

const fruits = [apple,blueberry, grapes,watermelon, orange,bananas, strawberry, lemon, pineapple, raspberry];

const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

const getRandomIndices = (arrayLength, numIndices) => {
  const indices = new Set();
  while (indices.size < numIndices) {
    indices.add(Math.floor(Math.random() * arrayLength));
  }
  return Array.from(indices);
};

const FallingFruits = () => {
  const largeFruitIndices = getRandomIndices(fruits.length, 8); // Randomly select 3 fruits to be larger

  return (
    <>
      
      {fruits.map((fruit, index) => {
        const isLarge = largeFruitIndices.includes(index);
        const fruitSize = isLarge ? generateRandomNumber(150, 30) : generateRandomNumber(80, 150);

        return (
          <motion.img
            key={index}
            src={fruit}
            alt="fruit"
            style={{
              position: 'absolute',
              top: '-10%',
              left: `${generateRandomNumber(10, 90)}%`,
              width: `${fruitSize}px`,
              height: 'auto',
              zIndex: -1,
              
            }}
            initial={{ y: '-100vh', opacity: 1 }}
            animate={{ y: '110vh', opacity: 1 }}
            transition={{
              duration: generateRandomNumber(5, 7),
              delay: generateRandomNumber(0, 10),
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          />
        );
      })}
    </>
  );
};

export default FallingFruits;
