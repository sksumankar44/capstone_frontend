import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tcekkinkvrffxvguugiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZWtraW5rdnJmZnh2Z3V1Z2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODcyMDksImV4cCI6MjA1ODQ2MzIwOX0.fpzZeCL2CDkBmkOcoB7wnuQjD2M5kZcgHyBkB1PL4qk";

export const supabase = createClient(supabaseUrl, supabaseKey);
