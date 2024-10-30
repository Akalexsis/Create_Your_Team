import { createClient } from '@supabase/supabase-js';

const URL = 'https://pkyernjtbbggqxxnnluj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreWVybmp0YmJnZ3F4eG5ubHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTc4NjMsImV4cCI6MjA0NTc5Mzg2M30.GfoSVzxcS6pjMs-kvft88Y4Xc42YeknX02V6qA2UXZg';

const supabase = createClient(URL, API_KEY);

export default supabase;