#!/usr/bin/env node

/**
 * CWUB Image Cropping & Optimization Script
 * Crops images intelligently for portfolio display
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images/cwub');

// Image crop specifications
const cropSpecs = {
  '01-homepage.png': {
    description: 'Homepage Hero - Crop top 60%',
    // Keep the hero section with action buttons
    crop: '1600x600+0+100',
  },
  '02-registration-forms.png': {
    description: 'Registration Forms - Center content',
    crop: '1600x500+0+200',
  },
  '03-registration-form.png': {
    description: 'Form - Remove excess whitespace',
    crop: '1600x700+0+50',
  },
  '04-admin-dashboard.png': {
    description: 'Dashboard - Focus on main content',
    crop: '1600x700+150+100',
  },
  '05-worker-management.png': {
    description: 'Worker Management - Center',
    crop: '1600x600+150+100',
  },
  '06-reports.png': {
    description: 'Reports - Focus content',
    crop: '1600x500+150+150',
  },
  '07-mobile-app.png': {
    description: 'Mobile App - Phone frame focus',
    // For phone screenshots, crop to show just the device
    crop: '600x900+300+50',
  },
  '08-digital-id-card.png': {
    description: 'Digital ID - Phone frame focus',
    crop: '600x900+300+50',
  },
};

console.log('\n🎨 CWUB Image Cropping & Optimization');
console.log('=====================================\n');

// Check for ffmpeg
try {
  execSync('which ffmpeg', { stdio: 'ignore' });
} catch {
  console.log('⚠️  ffmpeg not found. Please install ImageMagick or use online tools.\n');
  console.log('Suggested crop dimensions:\n');
  Object.entries(cropSpecs).forEach(([file, spec]) => {
    console.log(`📸 ${file}`);
    console.log(`   ${spec.description}`);
    console.log(`   Crop: ${spec.crop}\n`);
  });
  process.exit(0);
}

// Process each image
console.log('Processing images with ffmpeg...\n');

Object.entries(cropSpecs).forEach(([file, spec]) => {
  const inputPath = path.join(imagesDir, file);
  const backupPath = path.join(imagesDir, `backup-${file}`);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`✗ ${file} not found, skipping...`);
    return;
  }

  try {
    // Create backup
    fs.copyFileSync(inputPath, backupPath);
    
    // Crop with ffmpeg
    const cmd = `ffmpeg -i "${inputPath}" -vf "crop=${spec.crop}" -y "${inputPath}" 2>/dev/null`;
    execSync(cmd);
    
    const stats = fs.statSync(inputPath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    
    console.log(`✓ ${file} (${sizeKB} KB)`);
    console.log(`  ${spec.description}\n`);
  } catch (err) {
    // Restore backup if crop failed
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, inputPath);
    }
    console.log(`✗ Failed to crop ${file}`);
  }
});

console.log('✅ Image optimization complete!\n');
