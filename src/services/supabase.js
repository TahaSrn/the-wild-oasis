import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hsmjcatbcclpzsflywgb.supabase.co";

const supabaseKey = "sb_publishable_l9ZkQvzXw1MMvcT5804aKg_vEHK2XvX";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
