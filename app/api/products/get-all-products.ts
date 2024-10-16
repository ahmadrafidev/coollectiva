import { NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product';

export async function getAllProducts() {
  try {
    const allProducts = await db.select().from(products);
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
