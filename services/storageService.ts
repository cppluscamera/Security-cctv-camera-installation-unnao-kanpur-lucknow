
import { Inquiry } from '../types';

const STORAGE_KEY = 'vijay_electronics_leads';

export const saveInquiry = (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status'>): Inquiry => {
  const inquiries = getInquiries();
  const newInquiry: Inquiry = {
    ...inquiry,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
    status: 'New'
  };
  inquiries.push(newInquiry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  return newInquiry;
};

export const getInquiries = (): Inquiry[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const updateInquiryStatus = (id: string, status: Inquiry['status']): void => {
  const inquiries = getInquiries();
  const updated = inquiries.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteInquiry = (id: string): void => {
  const inquiries = getInquiries();
  const filtered = inquiries.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
