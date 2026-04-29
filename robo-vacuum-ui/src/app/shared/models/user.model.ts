export type UserRole = 'admin' | 'operator' | 'viewer';

export interface User {
  assignedDeviceIds?: string[];
  displayName: string;
  email: string;
  id: string;
  role: UserRole;
  verified: boolean;
}
