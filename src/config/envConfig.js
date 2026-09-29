import { config } from "dotenv";

config();

export const {
    PORT,
    DATABASE_URL,
    EXCHANGE_NAME,
    MESSAGE_BROKER_URL,
    REMAINDER_BINDING_KEY
} = process.env;

