import { prisma } from "../src/config/dbConfig.js";

async function main() {
  // =========================================================
  // CLEAR EXISTING DATA
  // =========================================================

  // Delete child tables first because of foreign key constraints.
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
    prisma.city.create({
      data: {
        name: "Delhi",
      },
    }),

    prisma.city.create({
      data: {
        name: "Mumbai",
      },
    }),

    prisma.city.create({
      data: {
        name: "Bengaluru",
      },
    }),

    prisma.city.create({
      data: {
        name: "Kolkata",
      },
    }),

    prisma.city.create({
      data: {
        name: "Hyderabad",
      },
    }),

    prisma.city.create({
      data: {
        name: "Chennai",
      },
    }),

    prisma.city.create({
      data: {
        name: "Ahmedabad",
      },
    }),

    prisma.city.create({
      data: {
        name: "Pune",
      },
    }),

    prisma.city.create({
      data: {
        name: "Kochi",
      },
    }),

    prisma.city.create({
      data: {
        name: "Jaipur",
      },
    }),
  ]);

  console.log("Cities created.");

  // =========================================================
  // 2. CREATE AIRPORTS
  //
  // IMPORTANT:
  // Multiple airports intentionally belong to some cities.
  // This gives you proper one-to-many relationship data.
  // =========================================================

  const [
    indiraGandhiAirport,
    safdarjungAirport,

    chhatrapatiShivajiAirport,
    juhuAirport,

    kempegowdaAirport,

    netajiSubhasAirport,
    behalaAirport,

    rajivGandhiAirport,
    begumpetAirport,

    chennaiAirport,

    sardarVallabhbhaiAirport,

    puneAirport,

    cochinAirport,

    jaipurAirport,
  ] = await Promise.all([
    // -------------------------------------------------------
    // DELHI - 2 airports
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Indira Gandhi International Airport",
        address: "Palam, New Delhi, Delhi 110037",
        cityId: delhi.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Safdarjung Airport",
        address: "New Delhi, Delhi 110003",
        cityId: delhi.id,
      },
    }),

    // -------------------------------------------------------
    // MUMBAI - 2 airports
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Andheri East, Mumbai, Maharashtra 400099",
        cityId: mumbai.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Juhu Airport",
        address: "Vile Parle West, Mumbai, Maharashtra 400056",
        cityId: mumbai.id,
      },
    }),

    // -------------------------------------------------------
    // BENGALURU
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Kempegowda International Airport",
        address: "Devanahalli, Bengaluru, Karnataka 560300",
        cityId: bengaluru.id,
      },
    }),

    // -------------------------------------------------------
    // KOLKATA - 2 airports
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Netaji Subhas Chandra Bose International Airport",
        address: "Jessore Road, Kolkata, West Bengal 700052",
        cityId: kolkata.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Behala Airport",
        address: "Behala, Kolkata, West Bengal",
        cityId: kolkata.id,
      },
    }),

    // -------------------------------------------------------
    // HYDERABAD - 2 airports
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Rajiv Gandhi International Airport",
        address: "Shamshabad, Hyderabad, Telangana 500409",
        cityId: hyderabad.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Begumpet Airport",
        address: "Begumpet, Hyderabad, Telangana 500016",
        cityId: hyderabad.id,
      },
    }),

    // -------------------------------------------------------
    // CHENNAI
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Chennai International Airport",
        address: "Meenambakkam, Chennai, Tamil Nadu 600027",
        cityId: chennai.id,
      },
    }),

    // -------------------------------------------------------
    // AHMEDABAD
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Sardar Vallabhbhai Patel International Airport",
        address: "Hansol, Ahmedabad, Gujarat 382475",
        cityId: ahmedabad.id,
      },
    }),

    // -------------------------------------------------------
    // PUNE
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Pune International Airport",
        address: "Lohegaon, Pune, Maharashtra 411032",
        cityId: pune.id,
      },
    }),

    // -------------------------------------------------------
    // KOCHI
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Cochin International Airport",
        address: "Nedumbassery, Kochi, Kerala 683111",
        cityId: kochi.id,
      },
    }),

    // -------------------------------------------------------
    // JAIPUR
    // -------------------------------------------------------

    prisma.airport.create({
      data: {
        name: "Jaipur International Airport",
        address: "Sanganer, Jaipur, Rajasthan 302029",
        cityId: jaipur.id,
      },
    }),
  ]);

  console.log("Airports created.");

  // =========================================================
  // 3. CREATE AIRPLANES
  //
  // The aircraft models are real.
  // Capacities are representative values for practice.
  // =========================================================

  const [
    airbusA320,
    airbusA320neo,
    airbusA321neo,
    boeing737800,
    boeing737Max8,
    boeing7878,
    boeing7879,
    airbusA330200,
    airbusA350900,
    boeing777300ER,
    atr72,
    bombardierQ400,
  ] = await Promise.all([
    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A320",
        capacity: 180,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A320neo",
        capacity: 180,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A321neo",
        capacity: 232,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 737-800",
        capacity: 189,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 737 MAX 8",
        capacity: 178,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 787-8 Dreamliner",
        capacity: 248,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 787-9 Dreamliner",
        capacity: 296,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A330-200",
        capacity: 250,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A350-900",
        capacity: 325,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 777-300ER",
        capacity: 396,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "ATR 72-600",
        capacity: 78,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Bombardier Dash 8 Q400",
        capacity: 78,
      },
    }),
  ]);

  console.log("Airplanes created.");

  // =========================================================
  // 4. CREATE FLIGHTS
  //
  // This section deliberately creates:
  //
  // - Multiple flights from the same city
  // - Multiple flights to the same city
  // - Different airplanes
  // - Different airports
  // - Repeated routes
  //
  // This is much better for API practice.
  // =========================================================

  const flights = [
    // =======================================================
    // DELHI -> MUMBAI
    // =======================================================

    {
      flightNumber: "IND101",
      departureCityId: delhi.id,
      destinationCityId: mumbai.id,
      airplaneId: airbusA320neo.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-01T03:30:00Z"),
      arrival: new Date("2026-09-01T05:45:00Z"),
    },

    {
      flightNumber: "IND102",
      departureCityId: delhi.id,
      destinationCityId: mumbai.id,
      airplaneId: boeing737800.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-01T10:00:00Z"),
      arrival: new Date("2026-09-01T12:15:00Z"),
    },

    // =======================================================
    // MUMBAI -> DELHI
    // =======================================================

    {
      flightNumber: "IND201",
      departureCityId: mumbai.id,
      destinationCityId: delhi.id,
      airplaneId: airbusA321neo.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-01T05:00:00Z"),
      arrival: new Date("2026-09-01T07:15:00Z"),
    },

    {
      flightNumber: "IND202",
      departureCityId: mumbai.id,
      destinationCityId: delhi.id,
      airplaneId: boeing737Max8.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-02T12:30:00Z"),
      arrival: new Date("2026-09-02T14:45:00Z"),
    },

    // =======================================================
    // DELHI -> BENGALURU
    // =======================================================

    {
      flightNumber: "IND301",
      departureCityId: delhi.id,
      destinationCityId: bengaluru.id,
      airplaneId: airbusA320.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-02T04:30:00Z"),
      arrival: new Date("2026-09-02T07:15:00Z"),
    },

    // =======================================================
    // BENGALURU -> DELHI
    // =======================================================

    {
      flightNumber: "IND302",
      departureCityId: bengaluru.id,
      destinationCityId: delhi.id,
      airplaneId: airbusA320neo.id,
      airportId: kempegowdaAirport.id,
      departure: new Date("2026-09-02T09:00:00Z"),
      arrival: new Date("2026-09-02T11:45:00Z"),
    },

    // =======================================================
    // KOLKATA -> DELHI
    // =======================================================

    {
      flightNumber: "IND401",
      departureCityId: kolkata.id,
      destinationCityId: delhi.id,
      airplaneId: boeing737800.id,
      airportId: netajiSubhasAirport.id,
      departure: new Date("2026-09-03T02:00:00Z"),
      arrival: new Date("2026-09-03T04:30:00Z"),
    },

    // =======================================================
    // DELHI -> KOLKATA
    // =======================================================

    {
      flightNumber: "IND402",
      departureCityId: delhi.id,
      destinationCityId: kolkata.id,
      airplaneId: airbusA321neo.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-03T08:00:00Z"),
      arrival: new Date("2026-09-03T10:30:00Z"),
    },

    // =======================================================
    // MUMBAI -> KOLKATA
    // =======================================================

    {
      flightNumber: "IND501",
      departureCityId: mumbai.id,
      destinationCityId: kolkata.id,
      airplaneId: boeing737Max8.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-04T04:00:00Z"),
      arrival: new Date("2026-09-04T06:45:00Z"),
    },

    // =======================================================
    // KOLKATA -> MUMBAI
    // =======================================================

    {
      flightNumber: "IND502",
      departureCityId: kolkata.id,
      destinationCityId: mumbai.id,
      airplaneId: airbusA320neo.id,
      airportId: netajiSubhasAirport.id,
      departure: new Date("2026-09-04T11:00:00Z"),
      arrival: new Date("2026-09-04T13:45:00Z"),
    },

    // =======================================================
    // HYDERABAD -> MUMBAI
    // =======================================================

    {
      flightNumber: "IND601",
      departureCityId: hyderabad.id,
      destinationCityId: mumbai.id,
      airplaneId: airbusA320.id,
      airportId: rajivGandhiAirport.id,
      departure: new Date("2026-09-05T03:00:00Z"),
      arrival: new Date("2026-09-05T04:30:00Z"),
    },

    // =======================================================
    // MUMBAI -> HYDERABAD
    // =======================================================

    {
      flightNumber: "IND602",
      departureCityId: mumbai.id,
      destinationCityId: hyderabad.id,
      airplaneId: airbusA321neo.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-05T08:00:00Z"),
      arrival: new Date("2026-09-05T09:30:00Z"),
    },

    // =======================================================
    // CHENNAI -> BENGALURU
    // =======================================================

    {
      flightNumber: "IND701",
      departureCityId: chennai.id,
      destinationCityId: bengaluru.id,
      airplaneId: bombardierQ400.id,
      airportId: chennaiAirport.id,
      departure: new Date("2026-09-06T02:30:00Z"),
      arrival: new Date("2026-09-06T03:45:00Z"),
    },

    // =======================================================
    // BENGALURU -> CHENNAI
    // =======================================================

    {
      flightNumber: "IND702",
      departureCityId: bengaluru.id,
      destinationCityId: chennai.id,
      airplaneId: atr72.id,
      airportId: kempegowdaAirport.id,
      departure: new Date("2026-09-06T07:00:00Z"),
      arrival: new Date("2026-09-06T08:15:00Z"),
    },

    // =======================================================
    // CHENNAI -> HYDERABAD
    // =======================================================

    {
      flightNumber: "IND801",
      departureCityId: chennai.id,
      destinationCityId: hyderabad.id,
      airplaneId: airbusA320neo.id,
      airportId: chennaiAirport.id,
      departure: new Date("2026-09-07T04:00:00Z"),
      arrival: new Date("2026-09-07T05:30:00Z"),
    },

    // =======================================================
    // HYDERABAD -> CHENNAI
    // =======================================================

    {
      flightNumber: "IND802",
      departureCityId: hyderabad.id,
      destinationCityId: chennai.id,
      airplaneId: boeing737800.id,
      airportId: rajivGandhiAirport.id,
      departure: new Date("2026-09-07T10:00:00Z"),
      arrival: new Date("2026-09-07T11:30:00Z"),
    },

    // =======================================================
    // AHMEDABAD -> MUMBAI
    // =======================================================

    {
      flightNumber: "IND901",
      departureCityId: ahmedabad.id,
      destinationCityId: mumbai.id,
      airplaneId: airbusA320.id,
      airportId: sardarVallabhbhaiAirport.id,
      departure: new Date("2026-09-08T03:30:00Z"),
      arrival: new Date("2026-09-08T04:45:00Z"),
    },

    // =======================================================
    // MUMBAI -> AHMEDABAD
    // =======================================================

    {
      flightNumber: "IND902",
      departureCityId: mumbai.id,
      destinationCityId: ahmedabad.id,
      airplaneId: boeing737Max8.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-08T08:00:00Z"),
      arrival: new Date("2026-09-08T09:15:00Z"),
    },

    // =======================================================
    // PUNE -> DELHI
    // =======================================================

    {
      flightNumber: "IND1001",
      departureCityId: pune.id,
      destinationCityId: delhi.id,
      airplaneId: airbusA321neo.id,
      airportId: puneAirport.id,
      departure: new Date("2026-09-09T02:00:00Z"),
      arrival: new Date("2026-09-09T04:15:00Z"),
    },

    // =======================================================
    // DELHI -> PUNE
    // =======================================================

    {
      flightNumber: "IND1002",
      departureCityId: delhi.id,
      destinationCityId: pune.id,
      airplaneId: airbusA320neo.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-09T09:00:00Z"),
      arrival: new Date("2026-09-09T11:15:00Z"),
    },

    // =======================================================
    // KOCHI -> MUMBAI
    // =======================================================

    {
      flightNumber: "IND1101",
      departureCityId: kochi.id,
      destinationCityId: mumbai.id,
      airplaneId: boeing737800.id,
      airportId: cochinAirport.id,
      departure: new Date("2026-09-10T03:00:00Z"),
      arrival: new Date("2026-09-10T05:00:00Z"),
    },

    // =======================================================
    // MUMBAI -> KOCHI
    // =======================================================

    {
      flightNumber: "IND1102",
      departureCityId: mumbai.id,
      destinationCityId: kochi.id,
      airplaneId: airbusA320.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-10T09:00:00Z"),
      arrival: new Date("2026-09-10T11:00:00Z"),
    },

    // =======================================================
    // JAIPUR -> DELHI
    // =======================================================

    {
      flightNumber: "IND1201",
      departureCityId: jaipur.id,
      destinationCityId: delhi.id,
      airplaneId: atr72.id,
      airportId: jaipurAirport.id,
      departure: new Date("2026-09-11T04:00:00Z"),
      arrival: new Date("2026-09-11T05:00:00Z"),
    },

    // =======================================================
    // DELHI -> JAIPUR
    // =======================================================

    {
      flightNumber: "IND1202",
      departureCityId: delhi.id,
      destinationCityId: jaipur.id,
      airplaneId: bombardierQ400.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-11T10:00:00Z"),
      arrival: new Date("2026-09-11T11:00:00Z"),
    },

    // =======================================================
    // LONGER DOMESTIC ROUTES
    // =======================================================

    {
      flightNumber: "IND1301",
      departureCityId: delhi.id,
      destinationCityId: kochi.id,
      airplaneId: boeing7878.id,
      airportId: indiraGandhiAirport.id,
      departure: new Date("2026-09-12T01:30:00Z"),
      arrival: new Date("2026-09-12T05:00:00Z"),
    },

    {
      flightNumber: "IND1302",
      departureCityId: kochi.id,
      destinationCityId: delhi.id,
      airplaneId: boeing7879.id,
      airportId: cochinAirport.id,
      departure: new Date("2026-09-12T08:00:00Z"),
      arrival: new Date("2026-09-12T11:30:00Z"),
    },

    {
      flightNumber: "IND1401",
      departureCityId: mumbai.id,
      destinationCityId: bengaluru.id,
      airplaneId: airbusA350900.id,
      airportId: chhatrapatiShivajiAirport.id,
      departure: new Date("2026-09-13T03:00:00Z"),
      arrival: new Date("2026-09-13T04:45:00Z"),
    },

    {
      flightNumber: "IND1402",
      departureCityId: bengaluru.id,
      destinationCityId: mumbai.id,
      airplaneId: boeing777300ER.id,
      airportId: kempegowdaAirport.id,
      departure: new Date("2026-09-13T09:00:00Z"),
      arrival: new Date("2026-09-13T10:45:00Z"),
    },
  ];

  // =========================================================
  // INSERT ALL FLIGHTS
  // =========================================================

  await Promise.all(
    flights.map((flight) =>
      prisma.flight.create({
        data: flight,
      })
    )
  );

  console.log("Flights created.");

  // =========================================================
  // SUCCESS
  // =========================================================

  console.log("======================================");
  console.log("Database successfully seeded!");
  console.log("======================================");
  console.log("Cities: 10");
  console.log("Airports: 14");
  console.log("Airplanes: 12");
  console.log("Flights: 28");
  console.log("======================================");
}

// =========================================================
// RUN SEED
// =========================================================

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });