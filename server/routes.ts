import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/prayer-times", async (req, res) => {
    try {
      const city = "Farmerville";
      const state = "Louisiana";
      const country = "US";
      const method = 2; // ISNA (Islamic Society of North America)
      
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&state=${state}&country=${country}&method=${method}`
      );
      
      if (!response.ok) {
        throw new Error(`Aladhan API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.code !== 200) {
        throw new Error("Invalid response from prayer times API");
      }
      
      const timings = data.data.timings;
      const meta = data.data.meta;
      
      res.json({
        timings: {
          Fajr: timings.Fajr,
          Sunrise: timings.Sunrise,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        },
        date: data.data.date.readable,
        timezone: meta.timezone,
      });
    } catch (error: any) {
      console.error("Error fetching prayer times:", error);
      res.status(500).json({ 
        error: "Failed to fetch prayer times",
        message: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
