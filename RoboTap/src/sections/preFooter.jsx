import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import clsx from "clsx";

const PreFooter = () => {
  return (
    <section>
      <Element
        name="prefooter"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center max-md:flex-col">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100 max-md:mr-0">
              <div>
                <img
                  src="/images/RoboTap.png"
                  width={255}
                  height={55}
                  alt="RoboTap"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Tu apoyo también cuenta fuera del robot.
                Síguenos, comparte y ayúdanos a seguir cambiando vidas.
              </p>

              <h4 className="mb-4 uppercase tracking-wide text-s3">
                Redes oficiales
              </h4>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500 hover:border-s4"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>

                      <img
                        src="/images/lines.svg"
                        alt="decorative lines"
                        className="absolute size-13/20 object-contain"
                      />

                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 hidden md:block">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/robotreal.jpeg"
                    width={680}
                    height={655}
                    alt="RoboTap físico"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="block md:hidden mt-10">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[450px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/robotreal.jpeg"
                    alt="RoboTap físico"
                    className="rounded-xl mx-auto max-w-xs shadow-500"
                  />
                </div>
                </div>
              </div>
          </div>

          <ul className="mt-24 flex items-center justify-center max-lg:hidden">
            {logos.map(({ id, url, title }) => (
              <li
                key={id}
                className="mx-10 flex h-24 w-48 items-center justify-center"
              >
                <img
                  src={url}
                  alt={title}
                  className={clsx(
                    "w-auto object-contain",
                    id === "1" ? "max-h-80" : "max-h-16"
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default PreFooter;
