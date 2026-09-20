import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertOrder, InsertProduct, Order, Product, InsertUser, users, products, orders } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try { _db = drizzle(process.env.DATABASE_URL); } catch (error) { console.warn("[Database] Failed to connect:", error); _db = null; }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb(); if (!db) return;
  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};
  (['name', 'email', 'loginMethod'] as const).forEach(field => { if (user[field] !== undefined) { values[field] = user[field] ?? null; updateSet[field] = user[field] ?? null; } });
  values.lastSignedIn = user.lastSignedIn ?? new Date(); updateSet.lastSignedIn = values.lastSignedIn;
  if (user.role !== undefined || user.openId === ENV.ownerOpenId) { values.role = user.role ?? 'admin'; updateSet.role = values.role; }
  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}
export async function getUserByOpenId(openId: string) { const db = await getDb(); if (!db) return undefined; const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1); return result[0]; }

export async function listActiveProducts(): Promise<Product[]> { const db = await getDb(); if (!db) return []; return db.select().from(products).where(eq(products.isActive, 1)).orderBy(desc(products.createdAt)); }
export async function createProduct(input: InsertProduct): Promise<Product | undefined> { const db = await getDb(); if (!db) return undefined; const result = await db.insert(products).values(input); const rows = await db.select().from(products).where(eq(products.id, Number(result[0].insertId))).limit(1); return rows[0]; }
export async function createOrder(input: InsertOrder): Promise<Order | undefined> { const db = await getDb(); if (!db) return undefined; const result = await db.insert(orders).values(input); const rows = await db.select().from(orders).where(eq(orders.id, Number(result[0].insertId))).limit(1); return rows[0]; }
