import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mjdtrbrmppzvcvqxvpib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZHRyYnJtcHB6dmN2cXh2cGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODcxMjksImV4cCI6MjAzNTE2MzEyOX0.hA3I7ZA5xQB3EcEoqiZUCqZa1W9PKXnSC9dLAoMbaWk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
