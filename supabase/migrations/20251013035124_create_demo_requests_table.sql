/*
  # Create demo_requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each demo request
      - `name` (text, not null) - Name of the person requesting the demo
      - `email` (text, not null) - Email address of the requester
      - `company` (text, optional) - Company name (optional field)
      - `message` (text, optional) - Message or additional details from the requester
      - `created_at` (timestamptz) - Timestamp when the request was created
  
  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy to allow anyone to insert demo requests (public form submission)
    - Add policy to allow authenticated users to read all demo requests (for admin access)

  3. Important Notes
    - The insert policy allows public access since this is a contact form
    - The select policy requires authentication to view requests (admin only)
    - Data validation should be handled in the application layer
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo requests"
  ON demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);
