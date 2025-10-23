export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LatamRust. All Rights Reserved. Not affiliated with Facepunch Studios.
        </p>
      </div>
    </footer>
  );
}
