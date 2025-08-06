import React from 'react'
import { z } from 'zod';

type LoginFormProps = {
  onSuccess: () => void;
};

const loginFormSchema = z.object({
  email: z.string().min(8, 'Email is required').email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().default(false).optional(),
});

export type UserLoginParameters = z.infer<typeof loginFormSchema>;

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return <div>LoginForm</div>;
};
