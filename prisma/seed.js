import { prisma } from "../src/config/dbConfig.js";

async function main() {
  // =========================================================
  // CLEAR EXISTING DATA
  // =========================================================
  await prisma.flight.deleteMany();
  await prisma.airport.deleteMany();
  await prisma.airplane.deleteMany();
  await prisma.city.deleteMany();

  console.log("Existing data cleared.");

  // =========================================================
  // 1. CREATE INDIAN CITIES
  // =========================================================
  const [
    delhi,
    mumbai,
    bengaluru,
    kolkata,
    hyderabad,
    chennai,
    ahmedabad,
    pune,
    kochi,
    jaipur,
  ] = await Promise.all([
    prisma.city.create({ data: { name: "Delhi" } }),
    prisma.city.create({ data: { name: "Mumbai" } }),
    prisma.city.create({ data: { name: "Bengaluru" } }),
    prisma.city.create({ data: { name: "Kolkata" } }),
    prisma.city.create({ data: { name: "Hyderabad" } }),
    prisma.city.create({ data: { name: "Chennai" } }),
    prisma.city.create({ data: { name: "Ahmedabad" } }),
    prisma.city.create({ data: { name: "Pune" } }),
    prisma.city.create({ data: { name: "Kochi" } }),
    prisma.city.create({ data: { name: "Jaipur" } }),
  ]);

  console.log("Cities created.");

  // =========================================================
  // 2. CREATE AIRPORTS
  // =========================================================
  const [
    delhiAirport,
    mumbaiAirport,
    bengaluruAirport,
    kolkataAirport,
    hyderabadAirport,
    chennaiAirport,
    ahmedabadAirport,
    puneAirport,
    kochiAirport,
    jaipurAirport,
  ] = await Promise.all([
    prisma.airport.create({
      data: {
        name: "Indira Gandhi International Airport (DEL)",
        address: "Palam, New Delhi, Delhi 110037",
        cityId: delhi.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
        address: "Sahar, Andheri East, Mumbai, Maharashtra 400099",
        cityId: mumbai.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Kempegowda International Airport (BLR)",
        address: "Devanahalli, Bengaluru, Karnataka 560300",
        cityId: bengaluru.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Netaji Subhas Chandra Bose International Airport (CCU)",
        address: "Jessore Rd, Dum Dum, Kolkata, West Bengal 700052",
        cityId: kolkata.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Rajiv Gandhi International Airport (HYD)",
        address: "Shamshabad, Hyderabad, Telangana 500409",
        cityId: hyderabad.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Chennai International Airport (MAA)",
        address: "GST Rd, Meenambakkam, Chennai, Tamil Nadu 600027",
        cityId: chennai.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Sardar Vallabhbhai Patel International Airport (AMD)",
        address: "Hansol, Ahmedabad, Gujarat 382475",
        cityId: ahmedabad.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Pune International Airport (PNQ)",
        address: "New Airport Rd, Lohegaon, Pune, Maharashtra 411032",
        cityId: pune.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Cochin International Airport (COK)",
        address: "Nedumbassery, Kochi, Kerala 683111",
        cityId: kochi.id,
      },
    }),
    prisma.airport.create({
      data: {
        name: "Jaipur International Airport (JAI)",
        address: "Airport Rd, Sanganer, Jaipur, Rajasthan 302029",
        cityId: jaipur.id,
      },
    }),
  ]);

  console.log("Airports created.");

  // =========================================================
  // 3. CREATE AIRPLANES
  // =========================================================
  const [
    a320neo,
    a321neo,
    b737max,
    b787dreamliner,
    atr72,
  ] = await Promise.all([
    prisma.airplane.create({
      data: { modelNumber: "Airbus A320neo", capacity: 180 },
    }),
    prisma.airplane.create({
      data: { modelNumber: "Airbus A321neo", capacity: 232 },
    }),
    prisma.airplane.create({
      data: { modelNumber: "Boeing 737 MAX 8", capacity: 189 },
    }),
    prisma.airplane.create({
      data: { modelNumber: "Boeing 787-9 Dreamliner", capacity: 296 },
    }),
    prisma.airplane.create({
      data: { modelNumber: "ATR 72-600", capacity: 72 },
    }),
  ]);

  console.log("Airplanes created.");

  // =========================================================
  // 4. CREATE FLIGHTS
  // Real domestic callsigns: 6E (IndiGo), AI (Air India), SG (SpiceJet), QP (Akasa)
  // =========================================================
  const flights = [
    // --- DEL <-> BOM ---
    {
      flightNumber: "6E-2014",
      airplaneId: a320neo.id,
      departureAirportId: delhiAirport.id,
      arrivalAirportId: mumbaiAirport.id,
      departureTime: new Date("2026-09-10T06:00:00Z"),
      arrivalTime: new Date("2026-09-10T08:15:00Z"),
      price: 5200,
      totalSeats: a320neo.capacity,
    },
    {
      flightNumber: "AI-805",
      airplaneId: b787dreamliner.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-10T09:30:00Z"),
      arrivalTime: new Date("2026-09-10T11:45:00Z"),
      price: 6800,
      totalSeats: b787dreamliner.capacity,
    },
    {
      flightNumber: "QP-1102",
      airplaneId: b737max.id,
      departureAirportId: delhiAirport.id,
      arrivalAirportId: mumbaiAirport.id,
      departureTime: new Date("2026-09-10T17:00:00Z"),
      arrivalTime: new Date("2026-09-10T19:20:00Z"),
      price: 4900,
      totalSeats: b737max.capacity,
    },

    // --- DEL <-> BLR ---
    {
      flightNumber: "6E-5032",
      airplaneId: a321neo.id,
      departureAirportId: delhiAirport.id,
      arrivalAirportId: bengaluruAirport.id,
      departureTime: new Date("2026-09-10T07:15:00Z"),
      arrivalTime: new Date("2026-09-10T10:00:00Z"),
      price: 6100,
      totalSeats: a321neo.capacity,
    },
    {
      flightNumber: "AI-506",
      airplaneId: a320neo.id,
      departureAirportId: bengaluruAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-10T11:00:00Z"),
      arrivalTime: new Date("2026-09-10T13:45:00Z"),
      price: 5900,
      totalSeats: a320neo.capacity,
    },

    // --- CCU <-> DEL ---
    {
      flightNumber: "6E-205",
      airplaneId: a320neo.id,
      departureAirportId: kolkataAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-11T05:45:00Z"),
      arrivalTime: new Date("2026-09-11T08:15:00Z"),
      price: 5400,
      totalSeats: a320neo.capacity,
    },
    {
      flightNumber: "AI-764",
      airplaneId: a321neo.id,
      departureAirportId: delhiAirport.id,
      arrivalAirportId: kolkataAirport.id,
      departureTime: new Date("2026-09-11T16:30:00Z"),
      arrivalTime: new Date("2026-09-11T18:45:00Z"),
      price: 5600,
      totalSeats: a321neo.capacity,
    },

    // --- CCU <-> BOM ---
    {
      flightNumber: "6E-318",
      airplaneId: a320neo.id,
      departureAirportId: kolkataAirport.id,
      arrivalAirportId: mumbaiAirport.id,
      departureTime: new Date("2026-09-11T09:00:00Z"),
      arrivalTime: new Date("2026-09-11T11:50:00Z"),
      price: 6300,
      totalSeats: a320neo.capacity,
    },
    {
      flightNumber: "QP-1381",
      airplaneId: b737max.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: kolkataAirport.id,
      departureTime: new Date("2026-09-11T14:10:00Z"),
      arrivalTime: new Date("2026-09-11T17:00:00Z"),
      price: 5800,
      totalSeats: b737max.capacity,
    },

    // --- CCU <-> BLR ---
    {
      flightNumber: "6E-678",
      airplaneId: a321neo.id,
      departureAirportId: kolkataAirport.id,
      arrivalAirportId: bengaluruAirport.id,
      departureTime: new Date("2026-09-12T06:30:00Z"),
      arrivalTime: new Date("2026-09-12T09:05:00Z"),
      price: 5700,
      totalSeats: a321neo.capacity,
    },
    {
      flightNumber: "AI-772",
      airplaneId: a320neo.id,
      departureAirportId: bengaluruAirport.id,
      arrivalAirportId: kolkataAirport.id,
      departureTime: new Date("2026-09-12T18:00:00Z"),
      arrivalTime: new Date("2026-09-12T20:30:00Z"),
      price: 5900,
      totalSeats: a320neo.capacity,
    },

    // --- BOM <-> BLR ---
    {
      flightNumber: "QP-1124",
      airplaneId: b737max.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: bengaluruAirport.id,
      departureTime: new Date("2026-09-12T08:00:00Z"),
      arrivalTime: new Date("2026-09-12T09:40:00Z"),
      price: 3600,
      totalSeats: b737max.capacity,
    },
    {
      flightNumber: "6E-5182",
      airplaneId: a320neo.id,
      departureAirportId: bengaluruAirport.id,
      arrivalAirportId: mumbaiAirport.id,
      departureTime: new Date("2026-09-12T19:30:00Z"),
      arrivalTime: new Date("2026-09-12T21:10:00Z"),
      price: 3900,
      totalSeats: a320neo.capacity,
    },

    // --- HYD <-> DEL / BOM ---
    {
      flightNumber: "6E-6105",
      airplaneId: a320neo.id,
      departureAirportId: hyderabadAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-13T06:10:00Z"),
      arrivalTime: new Date("2026-09-13T08:25:00Z"),
      price: 4800,
      totalSeats: a320neo.capacity,
    },
    {
      flightNumber: "AI-618",
      airplaneId: a320neo.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: hyderabadAirport.id,
      departureTime: new Date("2026-09-13T13:45:00Z"),
      arrivalTime: new Date("2026-09-13T15:15:00Z"),
      price: 3400,
      totalSeats: a320neo.capacity,
    },

    // --- MAA <-> BLR / HYD ---
    {
      flightNumber: "6E-7215",
      airplaneId: atr72.id,
      departureAirportId: chennaiAirport.id,
      arrivalAirportId: bengaluruAirport.id,
      departureTime: new Date("2026-09-13T07:00:00Z"),
      arrivalTime: new Date("2026-09-13T08:05:00Z"),
      price: 2400,
      totalSeats: atr72.capacity,
    },
    {
      flightNumber: "6E-344",
      airplaneId: a320neo.id,
      departureAirportId: chennaiAirport.id,
      arrivalAirportId: hyderabadAirport.id,
      departureTime: new Date("2026-09-13T11:20:00Z"),
      arrivalTime: new Date("2026-09-13T12:35:00Z"),
      price: 3100,
      totalSeats: a320neo.capacity,
    },

    // --- AMD <-> BOM / DEL ---
    {
      flightNumber: "SG-912",
      airplaneId: b737max.id,
      departureAirportId: ahmedabadAirport.id,
      arrivalAirportId: mumbaiAirport.id,
      departureTime: new Date("2026-09-14T05:30:00Z"),
      arrivalTime: new Date("2026-09-14T06:45:00Z"),
      price: 2900,
      totalSeats: b737max.capacity,
    },
    {
      flightNumber: "AI-482",
      airplaneId: a320neo.id,
      departureAirportId: delhiAirport.id,
      arrivalAirportId: ahmedabadAirport.id,
      departureTime: new Date("2026-09-14T15:00:00Z"),
      arrivalTime: new Date("2026-09-14T16:30:00Z"),
      price: 3800,
      totalSeats: a320neo.capacity,
    },

    // --- PNQ <-> DEL / BLR ---
    {
      flightNumber: "6E-2418",
      airplaneId: a321neo.id,
      departureAirportId: puneAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-14T07:45:00Z"),
      arrivalTime: new Date("2026-09-14T10:00:00Z"),
      price: 5100,
      totalSeats: a321neo.capacity,
    },
    {
      flightNumber: "QP-1512",
      airplaneId: b737max.id,
      departureAirportId: bengaluruAirport.id,
      arrivalAirportId: puneAirport.id,
      departureTime: new Date("2026-09-14T18:15:00Z"),
      arrivalTime: new Date("2026-09-14T19:35:00Z"),
      price: 3300,
      totalSeats: b737max.capacity,
    },

    // --- COK <-> DEL / BOM ---
    {
      flightNumber: "AI-886",
      airplaneId: b787dreamliner.id,
      departureAirportId: kochiAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-15T08:30:00Z"),
      arrivalTime: new Date("2026-09-15T11:45:00Z"),
      price: 7200,
      totalSeats: b787dreamliner.capacity,
    },
    {
      flightNumber: "6E-5311",
      airplaneId: a320neo.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: kochiAirport.id,
      departureTime: new Date("2026-09-15T16:20:00Z"),
      arrivalTime: new Date("2026-09-15T18:20:00Z"),
      price: 4400,
      totalSeats: a320neo.capacity,
    },

    // --- JAI <-> DEL / BOM ---
    {
      flightNumber: "6E-7412",
      airplaneId: atr72.id,
      departureAirportId: jaipurAirport.id,
      arrivalAirportId: delhiAirport.id,
      departureTime: new Date("2026-09-15T06:00:00Z"),
      arrivalTime: new Date("2026-09-15T07:00:00Z"),
      price: 2100,
      totalSeats: atr72.capacity,
    },
    {
      flightNumber: "6E-6218",
      airplaneId: a320neo.id,
      departureAirportId: mumbaiAirport.id,
      arrivalAirportId: jaipurAirport.id,
      departureTime: new Date("2026-09-15T14:30:00Z"),
      arrivalTime: new Date("2026-09-15T16:15:00Z"),
      price: 4100,
      totalSeats: a320neo.capacity,
    },
  ];

  // =========================================================
  // INSERT FLIGHTS
  // =========================================================
  await Promise.all(
    flights.map((flight) =>
      prisma.flight.create({
        data: flight,
      })
    )
  );

  console.log("======================================");
  console.log("Database successfully seeded!");
  console.log("======================================");
  console.log(`Cities: ${10}`);
  console.log(`Airports: ${10}`);
  console.log(`Airplanes: ${5}`);
  console.log(`Flights: ${flights.length}`);
  console.log("======================================");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 