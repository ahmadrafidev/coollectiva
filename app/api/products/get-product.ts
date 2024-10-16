import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product';

export async function getProductById(id: number) {
  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, id));

    if (!product.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product[0]);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
  }
}
