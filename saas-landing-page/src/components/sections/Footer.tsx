import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "../ui/button";

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <footer className="bg-background text-foreground shadow mt-12 bottom-0 left-0 w-full backdrop-blur-md">
        <div className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div />
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} SaaS Company. All rights reserved.
          </div>
          <div className="space-x-4">
            <Button variant="outline" size="sm" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}