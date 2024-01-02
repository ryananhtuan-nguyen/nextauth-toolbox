'use server';

import { LoginSchema } from '@/schemas';
import { z } from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validateFields);
  return { success: 'Email sent' };
};
