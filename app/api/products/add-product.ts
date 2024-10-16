import { NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product';

export async function addProduct(data: {
  name: string;
  description: string;
  category: string;
  url: string;
  social: string;
}) {
  try {
    const result = await db.insert(products).values(data);
    return NextResponse.json({ message: 'Product added successfully', result }, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Error adding product' }, { status: 500 });
  }
}
