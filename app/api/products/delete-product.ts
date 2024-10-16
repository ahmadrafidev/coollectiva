import { NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product';
import { eq } from 'drizzle-orm';

export async function deleteProduct(id: number) {
  try {
    const result = await db.delete(products).where(eq(products.id, id));
    return NextResponse.json({ message: 'Product deleted successfully', result });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Error deleting product' }, { status: 500 });
  }
}
