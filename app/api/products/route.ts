import { NextRequest, NextResponse } from 'next/server';
import { addProduct } from './add-product';
import { getAllProducts } from './get-all-products';
import { getProductById } from './get-product';
import { updateProduct } from './update-product';
import { deleteProduct } from './delete-product';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    return getProductById(Number(id));
  } else {
    return getAllProducts();
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return addProduct(data);
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id, ...updates } = data;

  if (!id) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  return updateProduct(Number(id), updates);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  return deleteProduct(Number(id));
}
