import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">© {new Date().getFullYear()} RoboTap - Todos los derechos reservados</p>
          </div>

          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Política de Privacidad
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Términos de Uso
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon: Icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="social-icon flex size-10 items-center justify-center rounded-full border border-s3 bg-s1 transition-all duration-300 hover:border-s4 hover:scale-110"
                >
                  <Icon className="size-5 text-p4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

