import { prisma } from "../src/config/dbConfig.js";

async function main() {
  // ---------------------------------------------------------
  // CLEAR EXISTING DATA
  // ---------------------------------------------------------
  // Delete child records before parent records because of
  // foreign-key constraints.
  await prisma.flight.deleteMany();
  await prisma.airport.deleteMany();
  await prisma.airplane.deleteMany();
  await prisma.city.deleteMany();

  // ---------------------------------------------------------
  // 1. CREATE CITIES
  // ---------------------------------------------------------

  const cities = await Promise.all([
    prisma.city.create({
      data: { name: "New York" },
    }),

    prisma.city.create({
      data: { name: "London" },
    }),

    prisma.city.create({
      data: { name: "Delhi" },
    }),

    prisma.city.create({
      data: { name: "Dubai" },
    }),

    prisma.city.create({
      data: { name: "Singapore" },
    }),

    prisma.city.create({
      data: { name: "Tokyo" },
    }),

    prisma.city.create({
      data: { name: "Paris" },
    }),

    prisma.city.create({
      data: { name: "Frankfurt" },
    }),

    prisma.city.create({
      data: { name: "Sydney" },
    }),

    prisma.city.create({
      data: { name: "Toronto" },
    }),
  ]);

  // Give the city objects meaningful names instead of accessing
  // cities[0], cities[1], etc.
  const [
    newYork,
    london,
    delhi,
    dubai,
    singapore,
    tokyo,
    paris,
    frankfurt,
    sydney,
    toronto,
  ] = cities;

  // ---------------------------------------------------------
  // 2. CREATE AIRPORTS
  // ---------------------------------------------------------

  const airports = await Promise.all([
    prisma.airport.create({
      data: {
        name: "John F. Kennedy International Airport",
        address: "Queens, NY 11430, USA",
        cityId: newYork.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "London Heathrow Airport",
        address: "Hounslow, London TW6, UK",
        cityId: london.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Indira Gandhi International Airport",
        address: "New Delhi, Delhi 110037, India",
        cityId: delhi.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Dubai International Airport",
        address: "Dubai, United Arab Emirates",
        cityId: dubai.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Singapore Changi Airport",
        address: "Airport Boulevard, Singapore 819643",
        cityId: singapore.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Haneda Airport",
        address: "Ota City, Tokyo 144-0041, Japan",
        cityId: tokyo.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Paris Charles de Gaulle Airport",
        address: "Roissy-en-France, 95700, France",
        cityId: paris.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Frankfurt Airport",
        address: "60547 Frankfurt, Germany",
        cityId: frankfurt.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Sydney Kingsford Smith Airport",
        address: "Mascot, NSW 2020, Australia",
        cityId: sydney.id,
      },
    }),

    prisma.airport.create({
      data: {
        name: "Toronto Pearson International Airport",
        address: "Mississauga, Ontario L5P 1B2, Canada",
        cityId: toronto.id,
      },
    }),
  ]);

  const [
    jfk,
    heathrow,
    delhiAirport,
    dubaiAirport,
    changi,
    haneda,
    charlesDeGaulle,
    frankfurtAirport,
    sydneyAirport,
    torontoPearson,
  ] = airports;

  // ---------------------------------------------------------
  // 3. CREATE AIRPLANES
  // ---------------------------------------------------------

  const airplanes = await Promise.all([
    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 777-300ER",
        capacity: 396,
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
        modelNumber: "Boeing 787-9 Dreamliner",
        capacity: 296,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A380-800",
        capacity: 555,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 777-200LR",
        capacity: 317,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A330-300",
        capacity: 277,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Boeing 787-10 Dreamliner",
        capacity: 336,
      },
    }),

    prisma.airplane.create({
      data: {
        modelNumber: "Airbus A350-1000",
        capacity: 369,
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
        modelNumber: "Airbus A321neo",
        capacity: 244,
      },
    }),
  ]);

  const [
    boeing777,
    airbusA350,
    boeing787,
    airbusA380,
    boeing777LR,
    airbusA330,
    boeing78710,
    airbusA3501000,
    boeing737,
    airbusA321,
  ] = airplanes;

  // ---------------------------------------------------------
  // 4. CREATE FLIGHTS
  // ---------------------------------------------------------
  //
  // The dates/times are deliberately sample schedules for
  // testing your application.
  //
  // airportId represents the airport associated with the flight.
  // ---------------------------------------------------------

  await prisma.flight.create({
    data: {
      flightNumber: "AA100",
      departureCityId: newYork.id,
      destinationCityId: london.id,
      airplaneId: boeing777.id,
      airportId: jfk.id,
      departure: new Date("2026-09-01T18:30:00Z"),
      arrival: new Date("2026-09-02T06:30:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "BA178",
      departureCityId: london.id,
      destinationCityId: newYork.id,
      airplaneId: airbusA350.id,
      airportId: heathrow.id,
      departure: new Date("2026-09-02T14:00:00Z"),
      arrival: new Date("2026-09-02T17:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "AI101",
      departureCityId: delhi.id,
      destinationCityId: newYork.id,
      airplaneId: boeing787.id,
      airportId: delhiAirport.id,
      departure: new Date("2026-09-03T02:00:00Z"),
      arrival: new Date("2026-09-03T14:30:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "EK201",
      departureCityId: dubai.id,
      destinationCityId: newYork.id,
      airplaneId: airbusA380.id,
      airportId: dubaiAirport.id,
      departure: new Date("2026-09-04T08:00:00Z"),
      arrival: new Date("2026-09-04T19:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "SQ12",
      departureCityId: singapore.id,
      destinationCityId: tokyo.id,
      airplaneId: boeing777LR.id,
      airportId: changi.id,
      departure: new Date("2026-09-05T09:30:00Z"),
      arrival: new Date("2026-09-05T17:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "JL5",
      departureCityId: tokyo.id,
      destinationCityId: newYork.id,
      airplaneId: airbusA330.id,
      airportId: haneda.id,
      departure: new Date("2026-09-06T16:00:00Z"),
      arrival: new Date("2026-09-06T19:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "AF66",
      departureCityId: paris.id,
      destinationCityId: newYork.id,
      airplaneId: boeing78710.id,
      airportId: charlesDeGaulle.id,
      departure: new Date("2026-09-07T12:00:00Z"),
      arrival: new Date("2026-09-07T14:30:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "LH400",
      departureCityId: frankfurt.id,
      destinationCityId: newYork.id,
      airplaneId: airbusA3501000.id,
      airportId: frankfurtAirport.id,
      departure: new Date("2026-09-08T10:00:00Z"),
      arrival: new Date("2026-09-08T13:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "QF11",
      departureCityId: sydney.id,
      destinationCityId: london.id,
      airplaneId: boeing737.id,
      airportId: sydneyAirport.id,
      departure: new Date("2026-09-09T20:00:00Z"),
      arrival: new Date("2026-09-10T14:00:00Z"),
    },
  });

  await prisma.flight.create({
    data: {
      flightNumber: "AC1",
      departureCityId: toronto.id,
      destinationCityId: london.id,
      airplaneId: airbusA321.id,
      airportId: torontoPearson.id,
      departure: new Date("2026-09-10T21:00:00Z"),
      arrival: new Date("2026-09-11T09:00:00Z"),
    },
  });

  console.log("Database successfully seeded.");
}

// ---------------------------------------------------------
// RUN SEED
// ---------------------------------------------------------

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });