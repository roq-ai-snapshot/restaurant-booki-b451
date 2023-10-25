import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  role: string;
  user_id: string;
  restaurant_id: string;
  salary: number;
  working_hours: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  user_id?: string;
  restaurant_id?: string;
  working_hours?: string;
}
