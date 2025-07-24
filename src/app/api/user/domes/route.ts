import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userDomes = await prisma.userDome.findMany({
      where: {
        userId: session.user.id,
        isActive: true,
      },
      include: {
        dome: true,
      },
    });

    return NextResponse.json({ domes: userDomes });
  } catch (error) {
    console.error('Get user domes error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { domeIds } = body;

    if (!Array.isArray(domeIds)) {
      return NextResponse.json(
        { error: 'Dome IDs must be an array' },
        { status: 400 }
      );
    }

    // First, deactivate all current domes
    await prisma.userDome.updateMany({
      where: {
        userId: session.user.id,
      },
      data: {
        isActive: false,
      },
    });

    // Then, activate the selected domes
    const userDomes = await Promise.all(
      domeIds.map(async (domeId) => {
        return prisma.userDome.upsert({
          where: {
            userId_domeId: {
              userId: session.user.id,
              domeId,
            },
          },
          update: {
            isActive: true,
          },
          create: {
            userId: session.user.id,
            domeId,
            isActive: true,
          },
          include: {
            dome: true,
          },
        });
      })
    );

    return NextResponse.json({ 
      message: 'Domes updated successfully',
      domes: userDomes 
    });
  } catch (error) {
    console.error('Update user domes error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 