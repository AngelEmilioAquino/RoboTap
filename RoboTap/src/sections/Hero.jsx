import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container grid grid-cols-2 items-center gap-10 max-lg:grid-cols-1">
          
          {/* ====== TEXTO ====== */}
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Recolección Inteligente
            </div>

            <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              RoboTap te ayuda a salvar vidas
            </h1>

            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Nuestro robot está diseñado para recolectar tapitas de plástico y
              convertir cada una en apoyo para tratamientos de quimioterapia.
              Diseño simple, con impacto real.
            </p>

            <LinkScroll to="Cómo Funciona" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Conocer más</Button>
            </LinkScroll>
          </div>

          <div className="flex justify-end max-lg:justify-center mr-22">
            <img
              src="/images/Robot.png"
              className="h-[500px] w-auto object-contain"
              alt="RoboTap robot"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;

