import { Button } from "@/components/ui/button"
import { FaSteamSymbol } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url('/dota.png')] bg-cover bg-center">
        <div className="h-[80vh]">
          <div className="flex flex-col items-center gap-12">
            <h1 className="text-5xl font-medium">Dota Lens</h1>
            <Button className="flex gap-2 bg-zinc-50 text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50"><FaSteamSymbol size={18} /> Entrar na Steam</Button>
          </div>
        </div>
      </div>
    </>
  );
}
