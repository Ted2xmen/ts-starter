import Counter from '../features/counter/Counter';

function Home() {
  return (
    <div className="max-w-lg mx-auto p-20 ">
      <h1 className="text-4xl italic text-red-500">Vite + React</h1>
      <Counter />
    </div>
  );
}

export default Home;
