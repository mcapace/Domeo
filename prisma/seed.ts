import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create domes
  const domes = [
    {
      name: 'Tech Enthusiasts',
      description: 'For those passionate about technology and innovation',
      color: '#3B82F6',
      iconColor: '#1E40AF',
    },
    {
      name: 'Creative Minds',
      description: 'Artists, designers, and creative professionals',
      color: '#8B5CF6',
      iconColor: '#6D28D9',
    },
    {
      name: 'Fitness & Wellness',
      description: 'Health enthusiasts and fitness professionals',
      color: '#10B981',
      iconColor: '#059669',
    },
    {
      name: 'Business Network',
      description: 'Entrepreneurs and business professionals',
      color: '#F59E0B',
      iconColor: '#D97706',
    },
    {
      name: 'Travel & Adventure',
      description: 'Travelers and adventure seekers',
      color: '#EF4444',
      iconColor: '#DC2626',
    },
    {
      name: 'Food & Culture',
      description: 'Food lovers and cultural enthusiasts',
      color: '#EC4899',
      iconColor: '#DB2777',
    },
    {
      name: 'Music & Entertainment',
      description: 'Musicians and entertainment professionals',
      color: '#06B6D4',
      iconColor: '#0891B2',
    },
    {
      name: 'Science & Research',
      description: 'Scientists, researchers, and academics',
      color: '#84CC16',
      iconColor: '#65A30D',
    },
  ];

  console.log('📦 Creating domes...');
  for (const dome of domes) {
    await prisma.dome.upsert({
      where: { name: dome.name },
      update: {},
      create: dome,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 