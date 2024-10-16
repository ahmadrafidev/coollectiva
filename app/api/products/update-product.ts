import { NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product';
import { eq } from 'drizzle-orm';

export async function updateProduct(id: number, data: {
  name?: string;
  description?: string;
  category?: string;
  url?: string;
  social?: string;
}) {
  try {
    const result = await db
      .update(products)
      .set(data)
      .where(eq(products.id, id));
    
    return NextResponse.json({ message: 'Product updated successfully', result });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
  }
}
