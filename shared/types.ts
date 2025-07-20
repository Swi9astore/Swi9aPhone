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

export interface Category {
  _id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  slug: string;
  image: string;
  active: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'customer' | 'admin' | 'manager';
  address: Address;
  preferences: UserPreferences;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserPreferences {
  language: 'en' | 'ar' | 'fr';
  currency: 'MAD' | 'USD' | 'EUR';
  notifications: {
    email: boolean;
    sms: boolean;
    whatsapp: boolean;
  };
}

export interface Order {
  _id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  billingAddress: Address;
  tracking: TrackingInfo;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  subtotal: number;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type PaymentMethod = 'cmi' | 'paypal' | 'cod' | 'bank_transfer';

export type PaymentStatus = 
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'refunded';

export interface TrackingInfo {
  trackingNumber: string;
  carrier: string;
  status: string;
  estimatedDelivery: Date;
  updates: TrackingUpdate[];
}

export interface TrackingUpdate {
  date: Date;
  status: string;
  location: string;
  description: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedStorage?: string;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

export interface Testimonial {
  _id: string;
  customerName: string;
  customerNameAr: string;
  customerNameFr: string;
  customerTitle: string;
  customerTitleAr: string;
  customerTitleFr: string;
  customerLocation: string;
  customerLocationAr: string;
  customerLocationFr: string;
  rating: number;
  comment: string;
  commentAr: string;
  commentFr: string;
  image: string;
  verified: boolean;
  featured: boolean;
  productId?: string;
  createdAt: Date;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    country: string;
  };
  phones: string[];
  emails: string[];
  hours: {
    weekdays: string;
    weekends: string;
  };
  whatsapp: string;
}

export interface NewsletterSubscription {
  email: string;
  language: 'en' | 'ar' | 'fr';
  preferences: string[];
  active: boolean;
  subscribedAt: Date;
}

export interface RepairService {
  _id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  price: number;
  estimatedTime: string; // "1-2 days"
  warranty: number; // months
  models: string[]; // supported iPhone models
  active: boolean;
}

export interface TradeInRequest {
  _id: string;
  userId: string;
  deviceModel: string;
  condition: string;
  storage: string;
  accessories: string[];
  estimatedValue: number;
  finalValue?: number;
  status: 'pending' | 'evaluated' | 'approved' | 'rejected' | 'completed';
  images: string[];
  notes: string;
  createdAt: Date;
  updatedAt: Date;
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

// Filters and Search
export interface ProductFilters {
  series?: string[];
  storage?: string[];
  condition?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
  featured?: boolean;
  sortBy?: 'price' | 'name' | 'createdAt' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchParams {
  query?: string;
  filters?: ProductFilters;
  page?: number;
  limit?: number;
}

// Language and Localization
export type SupportedLanguage = 'en' | 'ar' | 'fr';

export interface LocalizedContent {
  en: string;
  ar: string;
  fr: string;
}

export interface SiteConfig {
  languages: SupportedLanguage[];
  defaultLanguage: SupportedLanguage;
  currencies: string[];
  defaultCurrency: string;
  company: {
    name: string;
    tagline: LocalizedContent;
    description: LocalizedContent;
  };
}

// Admin Panel Types
export interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalCustomers: number;
  totalRevenue: number;
  recentOrders: Order[];
  topProducts: Product[];
  salesByMonth: MonthlyStats[];
}

export interface MonthlyStats {
  month: string;
  sales: number;
  orders: number;
}

export interface AdminUser extends User {
  permissions: Permission[];
  lastLogin: Date;
}

export interface Permission {
  resource: string;
  actions: string[];
}