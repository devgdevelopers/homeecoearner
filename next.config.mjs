/** @type {import('next').NextConfig} */
import { config } from 'dotenv';

// Load environment variables from .env file
config();
const nextConfig = {

  images: {
    domains: ['via.placeholder.com'],
  },
env: {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  },
};
export default nextConfig;
