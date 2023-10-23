import Image from 'next/image';
import { CarCard, Hero, SearchBar, CustomFilter } from '../components';
import { fetchCars } from '@/utils';
import { Console } from 'console';

const ShowPage = async () => {
  const allCars = await fetchCars();
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  
  return (
    <main className="overflow-hidden">
        <Hero/>

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Book Catalog
            </h1>
            <p>Explore your journey</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="container">
                {allCars?.map((car, index) => (
                  <CarCard key={index}car={car} />
                ))}
              </div>
            </section>
          ): (
            <div>
              <h2>Oops, no result</h2>
              <p>{allCars?.message}</p>
            </div>
          )}

        </div>

    </main>
  )
}

export default ShowPage