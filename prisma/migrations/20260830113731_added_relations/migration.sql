-- DropForeignKey
ALTER TABLE "airports" DROP CONSTRAINT "airports_city_id_fkey";

-- AddForeignKey
ALTER TABLE "airports" ADD CONSTRAINT "airports_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
