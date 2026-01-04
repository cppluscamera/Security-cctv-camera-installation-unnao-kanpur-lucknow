
export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: 'Installation' | 'Repair' | 'Maintenance' | 'Other';
  location: string;
  message: string;
  timestamp: number;
  status: 'New' | 'Contacted' | 'Completed';
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon: string;
  features: string[];
  path: string;
}
