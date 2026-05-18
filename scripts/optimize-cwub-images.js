#!/usr/bin/env node

/**
 * Image Optimization Script for CWUB Project
 * 
 * This script helps organize and prepare images for the portfolio
 * 
 * Usage: node scripts/optimize-cwub-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images/cwub');

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`✅ Created directory: ${imagesDir}`);
}

// List of expected images
const expectedImages = [
  '01-homepage.png',
  '02-registration-forms.png',
  '03-registration-form.png',
  '04-admin-dashboard.png',
  '05-worker-management.png',
  '06-reports.png',
  '07-mobile-app.png',
  '08-digital-id-card.png',
];

console.log('\n📸 CWUB Project Images Setup');
console.log('============================\n');

// Check current images
const existingFiles = fs.readdirSync(imagesDir);
const missingFiles = expectedImages.filter(img => !existingFiles.includes(img));

if (existingFiles.length === 0) {
  console.log('⏳ No images found yet. Here\'s what to do:\n');
  console.log('1. Save these 8 screenshots to:');
  console.log(`   ${imagesDir}\n`);
  
  expectedImages.forEach((img, i) => {
    console.log(`   ${i + 1}. ${img}`);
  });
  
  console.log('\n2. Make sure filenames match exactly (case-sensitive)');
  console.log('\n3. Supported formats: PNG, JPG, WebP\n');
} else {
  console.log(`✅ Found ${existingFiles.length} images\n`);
  
  existingFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`   ✓ ${file} (${sizeKB} KB)`);
  });
  
  if (missingFiles.length > 0) {
    console.log(`\n⚠️  Missing ${missingFiles.length} images:`);
    missingFiles.forEach(img => {
      console.log(`   ✗ ${img}`);
    });
  } else {
    console.log('\n✅ All images are present!');
  }
}

console.log('\n');
