import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://loozfdikordwzcdgcugu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvb3pmZGlrb3Jkd3pjZGdjdWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MDI2NTYsImV4cCI6MjAzNjA3ODY1Nn0.94JkQe_zJK6kttQqR4E1aHj87f13VFEoUKfRgnHEvC8";

export const supabase = createClient(supabaseUrl, supabaseKey);
