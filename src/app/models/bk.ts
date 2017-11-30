 /**
 * Provides a `Product` object
 */
 class Product {
 constructor(
 public sku: string,
 public author: string,
 public imageUrl: string,
 public department: string[],
 public price: number) {
 }
 }
