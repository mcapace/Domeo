#!/usr/bin/env node

/**
 * Apple OAuth Client Secret Generator
 * 
 * This script generates a JWT token for Apple Sign In client secret.
 * 
 * Usage:
 * node scripts/generate-apple-secret.js
 * 
 * You'll need:
 * - Team ID (from Apple Developer account)
 * - Key ID (from the private key you created)
 * - Service ID (the identifier you created)
 * - Private key file (.p8)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// JWT Header
const header = {
  alg: 'ES256',
  kid: process.env.APPLE_KEY_ID || 'YOUR_KEY_ID' // Replace with your Key ID
};

// JWT Payload
const payload = {
  iss: process.env.APPLE_TEAM_ID || 'YOUR_TEAM_ID', // Replace with your Team ID
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (6 * 60 * 60), // 6 hours from now
  aud: 'https://appleid.apple.com',
  sub: process.env.APPLE_SERVICE_ID || 'YOUR_SERVICE_ID' // Replace with your Service ID
};

// Base64URL encode function
function base64URLEncode(str) {
  return str.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Create JWT
function createJWT(privateKeyPath) {
  try {
    // Read private key
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
    
    // Create header and payload
    const headerB64 = base64URLEncode(JSON.stringify(header));
    const payloadB64 = base64URLEncode(JSON.stringify(payload));
    
    // Create signature input
    const signatureInput = `${headerB64}.${payloadB64}`;
    
    // Create signature
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(signatureInput);
    const signature = sign.sign(privateKey, 'base64');
    const signatureB64 = base64URLEncode(signature);
    
    // Create JWT
    const jwt = `${headerB64}.${payloadB64}.${signatureB64}`;
    
    return jwt;
  } catch (error) {
    console.error('Error creating JWT:', error.message);
    return null;
  }
}

// Main function
function main() {
  console.log('🍎 Apple OAuth Client Secret Generator\n');
  
  // Check if environment variables are set
  const teamId = process.env.APPLE_TEAM_ID;
  const keyId = process.env.APPLE_KEY_ID;
  const serviceId = process.env.APPLE_SERVICE_ID;
  
  if (!teamId || !keyId || !serviceId) {
    console.log('❌ Missing environment variables. Please set:');
    console.log('   APPLE_TEAM_ID - Your Apple Developer Team ID');
    console.log('   APPLE_KEY_ID - Your Key ID from the private key');
    console.log('   APPLE_SERVICE_ID - Your Service ID');
    console.log('\nExample:');
    console.log('export APPLE_TEAM_ID="ABC123DEF4"');
    console.log('export APPLE_KEY_ID="KEY123456"');
    console.log('export APPLE_SERVICE_ID="com.yourcompany.domeo.web"');
    console.log('\nThen run this script again.\n');
    return;
  }
  
  // Ask for private key path
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('📁 Path to your private key file (.p8): ', (privateKeyPath) => {
    rl.close();
    
    if (!fs.existsSync(privateKeyPath)) {
      console.log('❌ Private key file not found. Please check the path.');
      return;
    }
    
    console.log('\n🔧 Generating JWT token...\n');
    
    const jwt = createJWT(privateKeyPath);
    
    if (jwt) {
      console.log('✅ JWT Token generated successfully!\n');
      console.log('📋 Add this to your .env.local file:\n');
      console.log(`APPLE_SECRET="${jwt}"\n`);
      console.log('⚠️  Important notes:');
      console.log('   - This token expires in 6 hours');
      console.log('   - You\'ll need to regenerate it regularly');
      console.log('   - Keep your private key secure\n');
    } else {
      console.log('❌ Failed to generate JWT token.');
    }
  });
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { createJWT }; 