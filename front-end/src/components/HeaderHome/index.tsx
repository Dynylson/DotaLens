import { Button } from "@/components/ui/button"
import { FaSteamSymbol } from "react-icons/fa";

export function HeaderHome() {
    return (
        <div>
            <h1 className="text-5xl font-medium">DOTA LENS</h1>
            <Button className="flex gap-2 hover:bg-zinc-50 hover:text-zinc-950"><FaSteamSymbol size={18} /> Entrar na Steam</Button>
        </div>
    )
}