-- CreateTable
CREATE TABLE "airplanes" (
    "id" SERIAL NOT NULL,
    "model_number" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "airplanes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "airports" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "address" TEXT,

    CONSTRAINT "airports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "flight_number" TEXT NOT NULL,
    "departure_city_id" INTEGER NOT NULL,
    "destination_city_id" INTEGER NOT NULL,
    "airplane_id" INTEGER NOT NULL,
    "airport_id" INTEGER NOT NULL,
    "departure" TIMESTAMP(3) NOT NULL,
    "arrival" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "airports" ADD CONSTRAINT "airports_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_departure_city_id_fkey" FOREIGN KEY ("departure_city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_destination_city_id_fkey" FOREIGN KEY ("destination_city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_airplane_id_fkey" FOREIGN KEY ("airplane_id") REFERENCES "airplanes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_airport_id_fkey" FOREIGN KEY ("airport_id") REFERENCES "airports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
