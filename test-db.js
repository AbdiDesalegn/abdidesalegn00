// Simple database connection test
const { PrismaClient } = require('@prisma/client');

async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Test a simple query
    const adminCount = await prisma.admin.count();
    console.log(`📊 Admin records: ${adminCount}`);
    
    console.log('🎉 Database setup is working perfectly!');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
