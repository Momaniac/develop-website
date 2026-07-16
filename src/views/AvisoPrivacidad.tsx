"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const EMAIL_PRIVACIDAD = "privacidad@develop.com.mx";
const TEL_DATOS = "+52 55 7896 4651";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section {...fadeUp} className="mt-12 first:mt-0">
      <h2 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
        {children}
      </div>
    </motion.section>
  );
}

export default function AvisoPrivacidad() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark py-20 lg:py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div {...fadeUp} className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md">
              <ShieldCheck size={20} className="text-accent-glow" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Protección de datos
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Aviso de <span className="gradient-text">Privacidad</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-7 text-white/60"
          >
            En <strong className="text-white/90">Plurione S.A. de C.V.</strong> tratamos tus datos personales con
            estricta confidencialidad y conforme a la Ley Federal de Protección de Datos Personales en Posesión de
            los Particulares.
          </motion.p>
        </div>
      </section>

      {/* ───── CONTENIDO ───── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)] sm:p-10 lg:p-12">

            <Section title="Identidad y domicilio del responsable">
              <p>
                <strong>Plurione S.A. de C.V.</strong> (en lo sucesivo, <strong>“Develop”</strong> o
                <strong> “Develop Talent &amp; Technology”</strong>), por sí y a través de sus marcas, unidades de
                negocio, filiales y empresas relacionadas —entre ellas <em>QUARY, B-Clan, Fraternity Advisor, UTD
                (University Tech Day), Grow, MIA, //TODO Academy, Última Milla y Momani Academy</em>— es responsable
                del tratamiento y protección de tus datos personales.
              </p>
              <p>
                Develop es una persona moral enfocada en consultoría tecnológica, capacitación y desarrollo de
                software a la medida. Nuestra misión es provocar una transformación holística que impacte
                positivamente a la sociedad y a las personas mediante su interacción integradora.
              </p>
              <p>
                Para efectos de este aviso, nuestro domicilio es{" "}
                <strong>Puebla 46, 4.º piso, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México</strong>.
              </p>
              <p>
                El presente aviso se emite en cumplimiento de los artículos 8, 15, 16 y 36 de la Ley Federal de
                Protección de Datos Personales en Posesión de los Particulares (la “Ley”) y del artículo 6.º
                constitucional, bajo los principios de licitud, consentimiento, información, calidad, finalidad,
                lealtad, proporcionalidad y responsabilidad.
              </p>
            </Section>

            <Section title="Datos personales que recabamos">
              <p><strong>De personas físicas:</strong> nombre completo, domicilio, teléfono fijo y/o móvil, correo
                electrónico, fecha y lugar de nacimiento, estado civil, escolaridad, ocupación, sexo, información
                financiera cuando proceda y cualquier otro dato necesario conforme a los fines descritos en este aviso.
              </p>
              <p><strong>De personas morales:</strong> nombre o razón social, Registro Federal de Contribuyentes,
                nombre de los representantes, domicilio, teléfono, correo electrónico y la información adicional que
                requieran las distintas áreas conforme a los fines de la organización.
              </p>
              <p>
                Algunos de estos datos pueden considerarse <strong>datos personales sensibles</strong>. Su tratamiento
                se realiza con el más estricto control, confidencialidad y secrecía, y únicamente en la medida
                necesaria para cumplir las finalidades legítimas y concretas de Develop.
              </p>
            </Section>

            <Section title="Finalidades del tratamiento">
              <p>Tus datos personales se utilizan para las siguientes finalidades:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Comunicación con beneficiarios, colaboradores, donantes, asociados, empleados, proveedores y
                  terceros, nacionales e internacionales, con fines estadísticos y administrativos.</li>
                <li>Registro y cumplimiento de los derechos y obligaciones establecidos por la legislación mexicana,
                  así como fines administrativos, de desarrollo y estadísticos relacionados con nuestro personal.</li>
                <li>Transparentar el origen y destino de los recursos operados por Develop.</li>
                <li>Mantener comunicación contigo mediante el envío de información, invitaciones y felicitaciones, y
                  para llevar a cabo trámites administrativos.</li>
                <li>Prestar, gestionar y dar seguimiento a nuestros servicios de capacitación, certificación,
                  reclutamiento y vinculación laboral.</li>
              </ul>
            </Section>

            <Section title="Transferencia de datos">
              <p>
                Para cumplir las finalidades anteriores, tus datos pueden ser transferidos y tratados dentro y fuera
                del país, con fines estadísticos y administrativos. En particular, tu información podrá compartirse con
                entidades del mismo grupo de interés y con instituciones aliadas, tales como: Secretaría de Economía
                del Gobierno Federal; organismos de la Administración Pública de los Estados (como Secretarías de
                Desarrollo Económico); Instituto Politécnico Nacional; CONALEP; SEP; Tecnológico Nacional de México;
                Oracle; INFOTEC; Aptech Limited; Microsoft; Pearson VUE; ITE Soluciones S.A. de C.V.; Omnius S.A. de
                C.V.; instituciones educativas con las que se tengan convenios; University Tech Day S.A. de C.V.; así
                como nuestras unidades de negocio y marcas: B-Clan, Momani Academy, Fraternity Advisor, UTD, Quary,
                Grow y MIA.
              </p>
              <p>
                Asimismo, para operar este sitio web utilizamos proveedores tecnológicos que actúan como
                encargados del tratamiento y que pueden alojar o procesar información fuera de México:{" "}
                <strong>FormSubmit</strong> (procesamiento del envío de los formularios del sitio) y{" "}
                <strong>OpenAI</strong> (que da servicio a nuestra asistente virtual <em>BellA</em>). Estos
                proveedores tratan los datos únicamente para prestar dichos servicios, conforme a sus propias
                políticas de privacidad y a las instrucciones de Develop.
              </p>
              <p>
                Si no manifiestas tu oposición por los medios señalados en este aviso, se entenderá que otorgas tu
                consentimiento para dichas transferencias. Develop se compromete a que la información transferida sea
                tratada de forma responsable y confidencial, y exclusivamente por quienes requieran conocerla.
              </p>
            </Section>

            <Section title="Medios para limitar el uso o divulgación de tus datos">
              <p>
                En cualquier momento puedes limitar el uso o divulgación de tus datos personales enviando tu solicitud
                al correo{" "}
                <a href={`mailto:${EMAIL_PRIVACIDAD}`} className="font-medium text-develop-blue underline">
                  {EMAIL_PRIVACIDAD}
                </a>
                , dirigida al responsable del manejo de la información.
              </p>
            </Section>

            <Section title="Derechos ARCO y revocación del consentimiento">
              <p>
                Tienes derecho a <strong>acceder</strong> a tus datos personales, <strong>rectificarlos</strong>{" "}
                cuando sean inexactos o incompletos, <strong>cancelarlos</strong> cuando consideres que no se requieren
                para las finalidades de este aviso, y <strong>oponerte</strong> a su tratamiento, así como a{" "}
                <strong>revocar</strong> el consentimiento que nos hayas otorgado, cuando la ley lo permita.
              </p>
              <p>Para ejercer estos derechos, tu solicitud deberá acompañarse de:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Nombre completo del titular y documento de identidad o que acredite la representación legal.</li>
                <li>Descripción clara y precisa de los datos respecto de los que buscas ejercer tus derechos.</li>
                <li>Domicilio, correo electrónico u otro medio para comunicarte la respuesta.</li>
                <li>Cualquier documento que facilite la localización de tus datos personales.</li>
              </ul>
              <p>
                Develop atenderá tu solicitud en un plazo de <strong>20 días</strong> contados a partir de su
                recepción y, de resultar procedente, la hará efectiva dentro de los <strong>15 días</strong>{" "}
                siguientes a la comunicación de la respuesta. Tratándose de solicitudes de acceso, la entrega procederá
                previa acreditación de la identidad del solicitante o su representante legal. Estos plazos podrán
                ampliarse una sola vez por un periodo igual cuando las circunstancias del caso lo justifiquen.
              </p>
              <p>
                Puedes ejercer tus derechos contactando a la Dirección de Gestión de Recursos Humanos y Materiales,
                responsable del manejo de la información, en el correo{" "}
                <a href={`mailto:${EMAIL_PRIVACIDAD}`} className="font-medium text-develop-blue underline">
                  {EMAIL_PRIVACIDAD}
                </a>{" "}
                o al teléfono{" "}
                <a href={`tel:${TEL_DATOS.replace(/\s/g, "")}`} className="font-medium text-develop-blue underline">
                  {TEL_DATOS}
                </a>
                .
              </p>
            </Section>

            <Section title="Cambios al aviso de privacidad">
              <p>
                Develop podrá realizar modificaciones o actualizaciones a este aviso para atender novedades
                legislativas, políticas internas o nuevas finalidades. Cualquier cambio estará disponible en nuestra
                página{" "}
                <a href="https://www.develop.com.mx" className="font-medium text-develop-blue underline" target="_blank" rel="noopener noreferrer">
                  www.develop.com.mx
                </a>{" "}
                o, en su caso, se te comunicará al último correo electrónico que nos hayas proporcionado.
              </p>
            </Section>

            <Section title="Consentimiento y autoridad competente">
              <p>
                Si no aceptas de forma absoluta y completa los términos de este aviso, deberás abstenerte de
                proporcionar cualquier información a Develop por cualquier medio físico, óptico o electrónico.
              </p>
              <p>
                Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, podrás interponer
                la queja o denuncia correspondiente ante la <strong>autoridad competente en materia de protección de
                datos personales</strong> (función que, tras la extinción del INAI en 2025, recae actualmente en la
                Secretaría Anticorrupción y Buen Gobierno).
              </p>
            </Section>

            {/* Datos de contacto destacados */}
            <motion.div {...fadeUp} className="mt-12 grid gap-4 rounded-2xl border border-black/[0.06] bg-surface p-6 sm:grid-cols-3">
              <a href={`mailto:${EMAIL_PRIVACIDAD}`} className="flex items-start gap-3 text-sm text-text-secondary transition hover:text-develop-blue">
                <Mail size={18} className="mt-0.5 text-develop-plum" />
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">Correo</span>{EMAIL_PRIVACIDAD}</span>
              </a>
              <a href={`tel:${TEL_DATOS.replace(/\s/g, "")}`} className="flex items-start gap-3 text-sm text-text-secondary transition hover:text-develop-blue">
                <Phone size={18} className="mt-0.5 text-develop-plum" />
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">Teléfono</span>{TEL_DATOS}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={18} className="mt-0.5 text-develop-plum" />
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">Domicilio</span>Puebla 46, 4.º piso, Roma Norte, CDMX</span>
              </div>
            </motion.div>

            <p className="mt-10 text-center text-xs text-text-muted">
              Última actualización: junio de 2026. ·{" "}
              <Link href="/contacto" className="underline transition hover:text-develop-blue">¿Dudas? Contáctanos</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
