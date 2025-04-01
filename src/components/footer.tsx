export default function Footer() {
  return (
    <footer className="w-full sticky top-full bg-muted p-3 flex justify-center items-center">
      <small className="text-muted-foreground">
        Created by{" "}<a href="#" className="text-emerald-600">@your-handle</a>{" "}
        &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
}
