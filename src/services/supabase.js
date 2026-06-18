import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hsmjcatbcclpzsflywgb.supabase.co",
  "sb_publishable_l9ZkQvzXw1MMvcT5804aKg_vEHK2XvX",
);

export default supabase;
