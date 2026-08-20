CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  email TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  doctor_id UUID NOT NULL REFERENCES doctors(id),
  service TEXT NOT NULL,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'booked' CHECK (status IN ('booked','cancelled','completed','no_show')),
  cancelled_by TEXT,
  cancellation_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS appointments_doctor_active_slot
ON appointments (doctor_id, starts_at)
WHERE status = 'booked';

CREATE INDEX IF NOT EXISTS appointments_doctor_date_idx ON appointments (doctor_id, starts_at);
CREATE INDEX IF NOT EXISTS appointments_patient_idx ON appointments (patient_id, starts_at);

INSERT INTO doctors (name, specialty, email)
SELECT 'Dr. Mina Ayman', 'Clinic Admin / Dentist', NULL
WHERE NOT EXISTS (SELECT 1 FROM doctors WHERE lower(name) = lower('Dr. Mina Ayman'));
