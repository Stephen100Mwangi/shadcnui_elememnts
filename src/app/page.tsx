import General from "@/components/cards/General";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>
      <General />
      
    </main>
  );
}
