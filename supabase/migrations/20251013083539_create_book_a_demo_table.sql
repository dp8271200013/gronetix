/*
  # Create "book a demo#1" table

  1. New Tables
    - `book a demo#1`
      - `id` (uuid, primary key) - Unique identifier for each demo booking
      - `Name` (text, not null) - Name of the person booking the demo
      - `Email` (text, not null) - Email address of the person
      - `Company` (text, optional) - Company name (optional field)
      - `Message` (text, not null) - Message or additional details
      - `time` (timestamptz) - Timestamp when the booking was created
  
  2. Security
    - Enable RLS on the table
    - Add policy to allow anyone to insert bookings (public form submission)
    - Add policy to allow authenticated users to read all bookings (for admin access)

  3. Important Notes
    - Table name uses special characters as specified by user
    - Insert policy allows public access for the contact form
    - Select policy requires authentication for viewing bookings
*/

CREATE TABLE IF NOT EXISTS "book a demo#1" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "Name" text NOT NULL,
  "Email" text NOT NULL,
  "Company" text,
  "Message" text NOT NULL,
  time timestamptz DEFAULT now()
);

ALTER TABLE "book a demo#1" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo bookings"
  ON "book a demo#1"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view demo bookings"
  ON "book a demo#1"
  FOR SELECT
  TO authenticated
  USING (true);
