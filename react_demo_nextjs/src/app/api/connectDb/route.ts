import { connectDB } from "@/app/lib/db";const sql = require('mssql')

export async function GET(res: Request) {
    try {
        const db = await connectDB();
        const result = await db.request()
        .input('userId',sql.Int, 2)
        .query("SELECT * FROM Users where userId = @userId"); // Adjust table name
        console.dir(result);
        return new Response(JSON.stringify(result.recordset),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
    }
    catch (error) {
        return new Response(JSON.stringify({ message: "Database query failed", error }), {
            status: 500
        })
    }
}
