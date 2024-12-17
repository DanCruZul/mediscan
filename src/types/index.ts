export interface User {
  id: string;
  name: string;
  email: string;
  subscription: 'free' | 'premium';
}

export interface HealthCheck {
  id: string;
  type: 'skin' | 'symptoms' | 'chat';
  date: string;
  status: 'completed' | 'in-progress';
}

export interface Stats {
  scans: number;
  consultations: number;
  subscription: string;
}