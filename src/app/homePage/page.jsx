'use client'
import ReduxProvider from "../provider";
import AuthUpdater from "../../components/AuthUpdate";
import AuthViewer from "../../components/AuthViewer";
export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}

