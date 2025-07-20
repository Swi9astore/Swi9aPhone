import mongoose from 'mongoose';
import { ProductSpecification } from '../types';

const ProductSpecificationSchema = new mongoose.Schema<ProductSpecification>({
  key: { type: String, required: true },
  keyAr: { type: String, required: true },
  keyFr: { type: String, required: true },
  value: { type: String, required: true },
  valueAr: { type: String, required: true },
  valueFr: { type: String, required: true }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  nameAr: {
    type: String,
    required: [true, 'Arabic product name is required'],
    trim: true,
    maxlength: [200, 'Arabic product name cannot exceed 200 characters']
  },
  nameFr: {
    type: String,
    required: [true, 'French product name is required'],
    trim: true,
    maxlength: [200, 'French product name cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
    maxlength: [2000, 'Product description cannot exceed 2000 characters']
  },
  descriptionAr: {
    type: String,
    required: [true, 'Arabic product description is required'],
    trim: true,
    maxlength: [2000, 'Arabic product description cannot exceed 2000 characters']
  },
  descriptionFr: {
    type: String,
    required: [true, 'French product description is required'],
    trim: true,
    maxlength: [2000, 'French product description cannot exceed 2000 characters']
  },
  model: {
    type: String,
    required: [true, 'Product model is required'],
    trim: true
  },
  series: {
    type: String,
    required: [true, 'iPhone series is required'],
    enum: {
      values: ['15', '14', '13', '12', '11', 'SE'],
      message: 'Series must be one of: 15, 14, 13, 12, 11, SE'
    }
  },
  storage: {
    type: String,
    required: [true, 'Storage capacity is required'],
    enum: {
      values: ['64GB', '128GB', '256GB', '512GB', '1TB'],
      message: 'Storage must be one of: 64GB, 128GB, 256GB, 512GB, 1TB'
    }
  },
  color: {
    type: String,
    required: [true, 'Product color is required'],
    trim: true
  },
  condition: {
    type: String,
    required: [true, 'Product condition is required'],
    enum: {
      values: ['Excellent', 'Very Good', 'Good'],
      message: 'Condition must be one of: Excellent, Very Good, Good'
    }
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative'],
    set: (val: number) => Math.round(val * 100) / 100 // Round to 2 decimal places
  },
  originalPrice: {
    type: Number,
    required: [true, 'Original price is required'],
    min: [0, 'Original price cannot be negative'],
    set: (val: number) => Math.round(val * 100) / 100
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%']
  },
  images: [{
    type: String,
    required: true,
    validate: {
      validator: function(v: string) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(v) || /^\/uploads\/.+\.(jpg|jpeg|png|webp)$/i.test(v);
      },
      message: 'Invalid image URL format'
    }
  }],
  specifications: [ProductSpecificationSchema],
  warranty: {
    type: Number,
    required: [true, 'Warranty period is required'],
    min: [0, 'Warranty cannot be negative'],
    max: [60, 'Warranty cannot exceed 60 months']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  stockCount: {
    type: Number,
    required: [true, 'Stock count is required'],
    min: [0, 'Stock count cannot be negative']
  },
  featured: {
    type: Boolean,
    default: false
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for formatted price
ProductSchema.virtual('formattedPrice').get(function() {
  return `${this.price.toFixed(2)} MAD`;
});

// Virtual for discount amount
ProductSchema.virtual('discountAmount').get(function() {
  return Math.round((this.originalPrice - this.price) * 100) / 100;
});

// Virtual for savings percentage
ProductSchema.virtual('savingsPercentage').get(function() {
  if (this.originalPrice === 0) return 0;
  return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
});

// Indexes for better query performance
ProductSchema.index({ series: 1, inStock: 1 });
ProductSchema.index({ categoryId: 1 });
ProductSchema.index({ featured: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ 
  name: 'text', 
  nameAr: 'text', 
  nameFr: 'text', 
  description: 'text', 
  descriptionAr: 'text', 
  descriptionFr: 'text' 
});

// Pre-save middleware to update stock status
ProductSchema.pre('save', function(next) {
  if (this.stockCount === 0) {
    this.inStock = false;
  }
  next();
});

// Static method to find featured products
ProductSchema.statics.findFeatured = function() {
  return this.find({ featured: true, inStock: true })
    .populate('categoryId')
    .sort({ createdAt: -1 });
};

// Static method to find by series
ProductSchema.statics.findBySeries = function(series: string) {
  return this.find({ series, inStock: true })
    .populate('categoryId')
    .sort({ price: 1 });
};

export default mongoose.model('Product', ProductSchema);