import { readFileSync } from "fs";
import path from "path";

// Membaca baseUrl dari config.json
const configPath = path.resolve("./module/data/config.json");
const { baseUrl } = JSON.parse(readFileSync(configPath, "utf-8"));

export async function getBaseUrl(){
    return baseUrl
}