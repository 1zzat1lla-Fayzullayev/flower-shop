import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sedvtvmvmdpfihxlsslo.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZHZ0dm12bWRwZmloeGxzc2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MzUwMjgsImV4cCI6MjAzMjAxMTAyOH0.Fn4f319ktNHM2tLjmKRAaDWM4uOL_GPuXqaMN11kKjA'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
