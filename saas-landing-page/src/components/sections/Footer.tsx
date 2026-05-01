export default function Footer() {
  return (
    <>
      <footer className="bg-background text-foreground shadow mt-12 bottom-0 left-0 w-full backdrop-blur-md">
        <div className="container mx-auto py-6 px-4 flex items-center justify-center">
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} JG SaaS Company. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}