import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "../../../components/ui/button";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()
  return(
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="rounded-full w-11 h-11 p-0 shadow-lg backdrop-blur-md bg-background/80"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </div>
    </>
  )
}