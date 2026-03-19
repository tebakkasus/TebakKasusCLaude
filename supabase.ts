import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtxixbsdubmzrkkpcnyn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0eGl4YnNkdWJtenJra3BjbnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTQ4MDgsImV4cCI6MjA4ODU3MDgwOH0.gPD-vGzhf0j2YDZ9vnVyyNk8ypGnsTQmsK-To3-gEnU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
