import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);