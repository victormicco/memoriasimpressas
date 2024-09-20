export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="">
              Desenvolvido por{" "}
              <a
                href="https://github.com/victormicco"
                className="text-background"
              >
                Victor Micco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
