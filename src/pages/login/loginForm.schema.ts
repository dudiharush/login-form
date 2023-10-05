import { z } from 'zod';


const loginFormValidationSchema = z.object({
    username: z.string().nonempty().email(),
    password: z.string().min(4),
  });
  
export type LoginFormValues = z.infer<typeof loginFormValidationSchema>;