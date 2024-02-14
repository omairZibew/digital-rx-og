'use client'
import ReduxProvider from "../provider";

import AuthViewer from "../../components/AuthViewer";
export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}

