// Shared types for Swi9a Phone application

export interface Product {
  _id: string;
  name: string;
  nameAr: string;  // Arabic name
  nameFr: string;  // French name
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  model: string;
  series: '15' | '14' | '13' | '12' | '11' | 'SE';
  storage: '64GB' | '128GB' | '256GB' | '512GB' | '1TB';
  color: string;
  condition: 'Excellent' | 'Very Good' | 'Good';
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  specifications: ProductSpecification[];
  warranty: number; // months
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecification {
  key: string;
  keyAr: string;
  keyFr: string;
  value: string;
  valueAr: string;
  valueFr: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}