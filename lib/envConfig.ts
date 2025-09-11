import { z } from "zod";

const configSchema = z.object({
  API_URL: z.string(),
  TOKEN_KEY: z.string(),
  API_URL_ANDROID_DEV: z.string(),
  VIETMAP_KEY: z.string(),
});

const configProject = configSchema.safeParse({
  API_URL: process.env.EXPO_PUBLIC_API_URL,
  TOKEN_KEY: process.env.EXPO_PUBLIC_TOKEN_KEY,
  API_URL_ANDROID_DEV: process.env.EXPO_PUBLIC_API_URL_ANDROID_DEV,
  VIETMAP_KEY: process.env.EXPO_PUBLIC_VIETMAP_KEY,
});

if (!configProject.success) {
  console.log(configProject.error);
  throw new Error(`Error when get env data`);
}

const envConfig = configProject.data;

export default envConfig;
