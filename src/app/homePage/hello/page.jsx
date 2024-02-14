'use client'
import ReduxProvider from '../../provider';
import Counter from '../../../components/Counter';
export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <Counter/>
      </main>
    </ReduxProvider>
  );
}


