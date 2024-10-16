'use client'

import { z } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage, 
  FormField 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';

import { categories } from '../../constants/categories';

const ProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Product description is required'),
  category: z.string().min(1, 'Category is required'),
  url: z.string().url('Must be a valid URL'),
  social: z.string().url('Must be a valid Social URL'),
});

type ProductFormData = z.infer<typeof ProductSchema>;

export function ProductForm({ onSuccess }: { onSuccess: () => void }) {

  const methods = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      url: '',
      social: '',
    }
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        toast.success(`${data.name} submitted successfully!`);
        methods.reset();
        onSuccess();
      } else {
        toast.error('Failed to submit the product');
      }
    } catch (error) {
      toast.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };
  
  return (
    <FormProvider {...methods}>
      <form id="product-form" onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">

        {/* Product Name */}
        <FormField
          control={methods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input id="name" {...field} placeholder="AI Notetaker" />
              </FormControl>
              <FormMessage>{methods.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Product Description */}
        <FormField
          control={methods.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormControl>
                <Input id="description" {...field} placeholder="Automatically captures and organizes meeting notes."/>
              </FormControl>
              <FormMessage>{methods.formState.errors.description?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Product Category */}
        <FormField
          control={methods.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="category">Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{methods.formState.errors.category?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Product URL */}
        <FormField
          control={methods.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="url">URL</FormLabel>
              <FormControl>
                <Input id="url" {...field} placeholder="https://coollectiva.vercel.app/"/>
              </FormControl>
              <FormMessage>{methods.formState.errors.url?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Product Social */}
        <FormField
          control={methods.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="social">Social URL</FormLabel>
              <FormControl>
                <Input id="social" {...field} placeholder="https://coollectiva.vercel.app/"/>
              </FormControl>
              <FormMessage>{methods.formState.errors.social?.message}</FormMessage>
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
}
