export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    minimumOrderQuantity: number;
    category: string;
    brand: string;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    weight: number;
    warrantyInformation: string;
    returnPolicy: string;
    shippingInformation: string;
    sku: string;
    availabilityStatus: 'Low Stock' | 'In Stock' | 'Out of Stock';
    thumbnail: string;
    images: string[];
    tags: string[];
    reviews: Array<{
      reviewer: string;
      reviewText: string;
      rating: number;
    }>;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
  }