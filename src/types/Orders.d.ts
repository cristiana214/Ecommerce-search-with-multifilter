export interface Item {
    id: number;
    name: string;
    description: string;
    image: string[];
    quantity: number | null;
    price: string;
    currencyAccepting: string[];
    category: string;
    metadata: any; // Update the type according to the actual structure
    variants: {
      options: {
        name: string;
        values: string[];
      }[];
    };
    keywords: string;
    shippingPrices: Record<string, number>;
    totalViews: number;
    featured: boolean;
    sellerId: number;
    listingId: string;
    listingStatus: string;
    listedAt: string;
    isDeleted: boolean;
    preferredCurrency: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ClaimBy  {
    pxnToken: number;
  }
  
  export interface Order {
    id: number;
    uuid: string;
    price: number;
    currencyPaying: string;
    pendingTimestamp: string;
    Item: Item;
    txHash: string;
    claimBy: ClaimBy;
  }
  
  interface RecentOrders {
    code: number;
    msg: string;
    data: Order[];
  }