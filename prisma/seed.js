import { prisma } from "../src/config/dbConfig.js";

async function main() {
  // Clear existing data (respecting foreign key order)
  await prisma.flight.deleteMany();
  await prisma.airport.deleteMany();
  await prisma.airplane.deleteMany();
  await prisma.city.deleteMany();

  // 1. Create Cities
  const newYork = await prisma.city.create({
    data: { name: 'New York' },
  });

  const london = await prisma.city.create({
    data: { name: 'London' },
  });

  // 2. Create Airports
  const jfk = await prisma.airport.create({
    data: {
      name: 'John F. Kennedy International Airport',
      address: 'Queens, NY 11430',
      cityId: newYork.id,
    },
  });

  const heathrow = await prisma.airport.create({
    data: {
      name: 'Heathrow Airport',
      address: 'Hounslow, London TW6',
      cityId: london.id,
    },
  });

  // 3. Create Airplane
  const boeing = await prisma.airplane.create({
    data: {
      modelNumber: 'Boeing 777-300ER',
      capacity: 396,
    },
  });

  // 4. Create Flight
  await prisma.flight.create({
    data: {
      flightNumber: 'AA100',
      departureCityId: newYork.id,
      destinationCityId: london.id,
      airplaneId: boeing.id,
      airportId: jfk.id,
      departure: new Date('2026-09-01T18:30:00Z'),
      arrival: new Date('2026-09-02T06:30:00Z'),
    },
  });

  console.log('Database successfully seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });