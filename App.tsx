import { useState } from "react";

const PLACEHOLDER_IDEAS = `Escribe aquí tus ideas sueltas sobre la charla. No importa el orden ni si están incompletas.

Por ejemplo:
- Los padres no saben cuándo es normal y cuándo preocuparse
- El adolescente que se encierra en su pieza
- Diferencia entre tristeza y depresión sin usar diagnósticos
- Cómo hablar con un hijo que no quiere hablar
- El rol del colegio cuando hay una señal de alerta
- ...`;

const steps = [
  {
    id: 1,
    tag: "Paso 1 · Contexto inicial",
    title: "Define el contexto de tu charla",
    description:
      "Este es el primer mensaje del proceso. Le explica a ChatGPT qué tipo de charla vas a diseñar y qué decisiones necesitas tomar antes de empezar. Recibirás una tabla con todo lo que debes definir.",
    prompt: `Actúa como experto en diseño de charlas de salud mental infanto-juvenil para colegios.

Quiero que tengas claro quién soy antes de comenzar, porque esto debe reflejarse en todo el contenido que generemos:

Soy el Dr. Denis Gómez Recabarren, médico psiquiatra especializado en salud mental infanto-juvenil, con más de 20 años de ejercicio clínico. Me formé en la Universidad de Santiago de Chile y ejerzo actualmente en Viña del Mar y Concón, en la Región de Valparaíso.

Esta charla forma parte de una iniciativa educativa y preventiva que estoy desarrollando para colegios de la zona, llamada "Señales que importan". No es una actividad comercial. Es un aporte profesional a comunidades educativas.

El tono de todo lo que generemos debe ser profesional, sobrio y cercano. Nunca alarmista, comercial ni de divulgación popular. Siempre coherente con la ética médica y el rol de un especialista que habla ante colegios, familias y equipos educativos.

Voy a diseñar una charla llamada "Señales que importan", pensada para colegios y comunidades educativas.

Quiero que trabajes conmigo paso a paso. No diseñes toda la charla todavía.

Primero ayúdame a definir el contexto general de la charla.

Hazme una tabla con:

1. Qué decisiones debo tomar antes de diseñar la charla.
2. Por qué es importante cada decisión.
3. Ejemplos de respuesta que podría dar.

Incluye entre esas decisiones:

- Duración de la charla.
- Público objetivo.
- Objetivo principal.
- Nivel de profundidad clínica.
- Temas que quiero abordar.
- Temas que prefiero evitar.
- Tipo de colegio o comunidad educativa.
- Formato de la charla.
- Espacio para preguntas.
- Resultado esperado al finalizar.

No diseñes todavía la charla completa.`,
    instructions: [
      "Copia el prompt completo.",
      "Abre un chat nuevo en ChatGPT.",
      "Pega el prompt y envíalo.",
      "Revisa la tabla que te entregue ChatGPT.",
      "Vuelve aquí y continúa con el Paso 2.",
    ],
    warning: "Inicia siempre un chat nuevo en ChatGPT. Usarás ese mismo chat en todos los pasos siguientes.",
  },
  {
    id: 2,
    tag: "Paso 2 · Decisiones base",
    title: "Responde las preguntas clave de la charla",
    description:
      "ChatGPT te hará 10 preguntas concretas, una a una, para definir las bases de tu charla: duración, público, tono, temas y más. Tú respondes y él avanza. Al final, tendrás todas las decisiones tomadas.",
    prompt: `Ahora ayúdame a definir las decisiones base de la charla.

Quiero que me hagas preguntas concretas para que yo pueda responder con claridad.

Pregúntame sobre:

1. Cuánto quiero que dure la charla.
2. A quién estará dirigida.
3. Qué quiero que los asistentes se lleven al final.
4. Qué tono quiero usar.
5. Qué nivel de profundidad clínica quiero permitir.
6. Qué temas considero imprescindibles.
7. Qué temas prefiero no abordar.
8. Si quiero dejar espacio para preguntas.
9. Si la charla será más preventiva, formativa, práctica o reflexiva.
10. Qué me gustaría que el colegio perciba de esta iniciativa.

Hazme las preguntas una por una y espera mi respuesta antes de avanzar.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "ChatGPT te hará las preguntas una por una.",
      "Responde cada pregunta según tu criterio profesional.",
      "Cuando hayas respondido las 10 preguntas, vuelve aquí.",
    ],
  },
  {
    id: 3,
    tag: "Paso 3 · Ideas del doctor",
    title: "Vuelca tus ideas libremente",
    description:
      "Escribe abajo tus ideas sueltas sobre la charla, sin orden ni filtro. Pueden estar incompletas o repetidas. La app las insertará automáticamente en el prompt antes de que lo copies.",
    prompt: `Voy a escribir ideas sueltas sobre lo que quiero incluir en la charla. Pueden estar desordenadas, repetidas o incompletas.

Tu tarea será:

1. Ordenarlas por categorías.
2. Detectar cuáles son ideas centrales.
3. Detectar cuáles son ideas secundarias.
4. Detectar cuáles podrían quedar fuera.
5. Proponer un enfoque general para la charla.
6. Decirme qué ideas parecen más útiles para el público definido.
7. Decirme qué ideas podrían hacer la charla demasiado densa.

Mis ideas son:

[IDEAS_DEL_DOCTOR]`,
    isEditable: true,
    instructions: [
      "Escribe tus ideas en el campo de texto de arriba.",
      "El prompt se actualizará automáticamente con tus ideas.",
      "Copia el prompt completo con el botón.",
      "Pégalo en el mismo chat de ChatGPT.",
      "Revisa el análisis que te entregue y vuelve aquí.",
    ],
  },
  {
    id: 4,
    tag: "Paso 4 · Selección de temas",
    title: "Elige los temas que realmente caben en tu charla",
    description:
      "Con base en la duración que definiste y las ideas que entregaste, ChatGPT te entregará una tabla con qué temas incluir, cuáles dejar para otra charla y cuánto tiempo requiere cada uno.",
    prompt: `Con base en la duración que definí anteriormente, ayúdame a seleccionar qué temas realmente caben en la charla.

Quiero que me entregues una tabla con:

1. Tema.
2. Importancia.
3. Tiempo estimado.
4. Si debe incluirse o dejarse para otra charla.
5. Razón de la recomendación.
6. Nivel de complejidad.
7. Cómo explicarlo de forma simple.

Recuerda que la charla debe ser clara, útil, preventiva, profesional y no excesivamente densa.

No agregues temas nuevos innecesarios. Prioriza lo que mejor funcione para el público y duración definidos.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Revisa la tabla que te entregue con los temas y tiempos.",
      "Si quieres ajustar algo, díselo a ChatGPT en el mismo chat.",
      "Cuando estés conforme con la selección, vuelve aquí.",
    ],
  },
  {
    id: 5,
    tag: "Paso 5 · Límites profesionales",
    title: "Define los límites éticos y clínicos de la charla",
    description:
      "Este paso establece qué no debe profundizarse, cómo manejar preguntas clínicas y qué frases usar para mantener el marco educativo. Recibirás frases concretas listas para usar.",
    prompt: `Ayúdame a definir los límites profesionales de esta charla.

Quiero que sea una instancia educativa y preventiva, no una consulta clínica individual.

Entrégame:

1. Qué temas no conviene profundizar.
2. Qué tipo de preguntas podrían aparecer desde el público.
3. Cómo responder preguntas clínicas personales sin desviar la charla.
4. Una frase para decir al inicio aclarando el marco de la charla.
5. Una frase para usar si alguien plantea un caso individual.
6. Qué temas requieren especial cuidado al ser mencionados.
7. Cómo mantener un tono responsable, no alarmista y no culpabilizador.
8. Qué límites debe tener el espacio de preguntas.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Guarda las frases que te entregue — las usarás al exponer.",
      "Puedes pedirle ajustes si alguna frase no te representa.",
      "Cuando estés conforme, vuelve aquí.",
    ],
  },
  {
    id: 6,
    tag: "Paso 6 · Estructura final",
    title: "Genera la estructura completa de la charla",
    description:
      "Aquí se arma el esqueleto definitivo. Cada bloque tendrá objetivo, mensaje clave, contenido oral, ejemplo práctico, transición y frase de cierre. Este es el documento base de todo lo demás.",
    prompt: `Con todo lo anterior, diseña la estructura final de la charla "Señales que importan".

Considera:

- La duración definida previamente.
- El público objetivo definido.
- Los temas seleccionados.
- Los límites profesionales definidos.
- El enfoque preventivo y educativo.
- Que no debe ser una charla densa ni excesivamente clínica.
- Que debe ser útil para colegios, familias o equipos educativos.

Entrégame:

1. Título final de la charla.
2. Subtítulo sugerido.
3. Objetivo general.
4. Objetivos específicos.
5. Estructura por bloques con tiempo estimado.
6. Mensaje clave de cada bloque.
7. Qué debería explicar oralmente el expositor en cada bloque.
8. Ejemplo o recurso práctico para cada bloque.
9. Transición recomendada entre bloques.
10. Frase de cierre.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Revisa cada bloque con atención.",
      "Puedes pedirle ajustes o eliminar bloques que no te convenzan.",
      "Cuando la estructura esté lista, vuelve aquí.",
    ],
  },
  {
    id: 7,
    tag: "Paso 7 · Diapositivas",
    title: "Diseña el contenido de las diapositivas",
    description:
      "Transformamos la estructura en una tabla de diapositivas. Cada una tendrá título, texto para proyectar, notas del expositor, recurso visual y tiempo estimado.",
    prompt: `Ahora transforma la estructura final de la charla en una presentación de diapositivas.

Considera la duración definida anteriormente y evita crear demasiadas diapositivas.

Quiero una presentación:

- Clara.
- Profesional.
- Cálida.
- Sobria.
- Preventiva.
- Con poco texto por diapositiva.
- Fácil de presentar.
- Visualmente adecuada para un colegio.

Entrégame una tabla con:

1. Número de diapositiva.
2. Título.
3. Texto sugerido para la diapositiva.
4. Qué debería explicar oralmente el expositor.
5. Recurso visual recomendado.
6. Tiempo aproximado para esa diapositiva.
7. Nivel de importancia de la diapositiva.

No uses lenguaje demasiado técnico. La presentación debe ser fácil de entender para el público definido.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Revisa la tabla de diapositivas que te entregue.",
      "Puedes pedirle reducir o ampliar diapositivas según necesites.",
      "Cuando estés conforme, vuelve aquí.",
    ],
  },
  {
    id: 8,
    tag: "Paso 8 · Propuesta para el colegio",
    title: "Crea la versión formal para presentar al colegio",
    description:
      "Genera el documento institucional para enviar al director, orientador o coordinador. Incluye descripción, temáticas, enfoque, texto de correo listo y una versión verbal de 1 minuto.",
    prompt: `Ahora crea una versión breve para presentar esta charla al colegio antes de realizarla.

Recuerda que el expositor es el Dr. Denis Gómez Recabarren, médico psiquiatra infanto-juvenil con más de 20 años de experiencia, formado en la Universidad de Santiago de Chile. Esto debe quedar visible en todos los documentos que generes en este paso.

Debe incluir:

1. Nombre de la charla.
2. Descripción breve.
3. Duración definida.
4. Público recomendado.
5. Objetivo.
6. Temas principales.
7. Enfoque profesional.
8. Qué temas no se abordarán.
9. Beneficio para el colegio.
10. Modalidad sugerida.
11. Espacio para preguntas.
12. Texto breve para enviar por correo (firmado por el Dr. Gómez Recabarren).
13. Versión de 1 minuto para explicarla en reunión, presentándose como especialista.

El tono debe ser institucional, claro y profesional.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Guarda el texto del correo — lo usarás para contactar colegios.",
      "Guarda también la versión verbal de 1 minuto para reuniones.",
      "Cuando estés listo, vuelve aquí.",
    ],
  },
  {
    id: 9,
    tag: "Paso 9 · Preguntas difíciles",
    title: "Prepárate para las preguntas del colegio",
    description:
      "ChatGPT simulará ser el Coordinador de Convivencia Escolar y te hará las 10 preguntas más probables antes de aceptar la charla. Recibirás respuestas profesionales listas para usar.",
    prompt: `Simula que eres el Coordinador de Formación y Convivencia Educativa de un colegio.

Hazme 10 preguntas que probablemente me harían antes de aceptar la charla "Señales que importan".

Luego redacta respuestas breves, profesionales y responsables para cada pregunta.

Para las respuestas, ten en cuenta que el expositor es el Dr. Denis Gómez Recabarren, médico psiquiatra especializado en salud mental infanto-juvenil, con más de 20 años de experiencia clínica, formado en la Universidad de Santiago de Chile. Ejerce en Viña del Mar y Concón. Cuando las respuestas mencionen la experiencia o calificación del expositor, deben reflejar estos datos reales.

Considera además:

- La duración definida previamente.
- El público objetivo definido.
- El enfoque de la charla.
- Que la charla es educativa y preventiva.
- Que no reemplaza una consulta clínica.
- Que puede adaptarse a las necesidades del colegio.
- Que debe transmitir seguridad profesional.

Incluye preguntas sobre:

1. Público objetivo.
2. Contenido.
3. Duración.
4. Manejo de preguntas sensibles.
5. Experiencia del expositor.
6. Enfoque clínico.
7. Casos individuales.
8. Utilidad para el colegio.
9. Participación de apoderados o docentes.
10. Próximos pasos.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Revisa las preguntas y las respuestas sugeridas.",
      "Ajusta las respuestas que no te representen fielmente.",
      "Guarda este banco — tenlo a mano antes de cada reunión.",
    ],
  },
  {
    id: 10,
    tag: "Paso 10 · Documento final",
    title: "Genera el documento completo de la charla",
    description:
      "El paso final. ChatGPT compilará todo el proceso en un único documento profesional con 19 secciones, listo para copiar en Word o Google Docs y comenzar a presentar.",
    prompt: `Con todo lo trabajado, crea el documento final de diseño de la charla "Señales que importan".

El expositor de esta charla es el Dr. Denis Gómez Recabarren, médico psiquiatra especializado en salud mental infanto-juvenil, con más de 20 años de experiencia clínica, formado en la Universidad de Santiago de Chile. Ejerce en Viña del Mar y Concón, Región de Valparaíso. Su nombre, especialidad y experiencia deben aparecer en la portada, en la versión para el colegio y en el texto de correo.

Debe incluir:

1. Título final.
2. Subtítulo.
3. Descripción breve.
4. Duración.
5. Público objetivo.
6. Objetivo general.
7. Objetivos específicos.
8. Estructura por bloques.
9. Temas incluidos.
10. Temas excluidos.
11. Límites profesionales.
12. Mensajes clave.
13. Estructura de diapositivas.
14. Recomendaciones para el expositor.
15. Frases útiles para abrir y cerrar la charla.
16. Manejo del espacio de preguntas.
17. Versión breve para presentar al colegio.
18. Texto de correo para enviar al colegio.
19. Próximos pasos recomendados.

Ordénalo como un documento profesional, claro y fácil de revisar.`,
    instructions: [
      "Copia el prompt y pégalo en el mismo chat de ChatGPT.",
      "Espera que ChatGPT genere el documento completo.",
      "Copia todo el resultado y pégalo en Word o Google Docs.",
      "¡Tu charla está lista para presentar a los colegios!",
    ],
    isFinal: true,
  },
];

export default function CharlaApp() {
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);
  const [ideas, setIdeas] = useState("");

  const step = steps[current];
  const progress = ((current + 1) / steps.length) * 100;

  const getFinalPrompt = () => {
    if (!step.isEditable) return step.prompt;
    const filled = ideas.trim() || "(sin ideas escritas aún)";
    return step.prompt.replace("[IDEAS_DEL_DOCTOR]", filled);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFinalPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const navigate = (idx) => {
    setCurrent(idx);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ fontFamily: "'Crimson Pro', 'Georgia', serif", minHeight: "100vh", background: "#f7f6f3", color: "#1a1a2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .app-header { background: #1a2744; padding: 28px 40px 24px; border-bottom: 3px solid #c9a96e; }
        .header-label { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a96e; margin-bottom: 8px; }
        .app-title { font-family: 'Crimson Pro', serif; font-size: 26px; font-weight: 600; color: #ffffff; letter-spacing: -0.01em; line-height: 1.2; }
        .app-subtitle { font-family: 'DM Sans', sans-serif; font-size: 13px; color: #9ba8c0; margin-top: 6px; font-weight: 300; }

        .progress-bar-wrap { background: #f7f6f3; padding: 16px 40px 0; border-bottom: 1px solid #e2ddd5; }
        .progress-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .step-counter { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #7a7060; letter-spacing: 0.05em; }
        .progress-pct { font-family: 'DM Sans', sans-serif; font-size: 11px; color: #c9a96e; font-weight: 500; }
        .progress-track { height: 3px; background: #e2ddd5; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #c9a96e, #b8934d); border-radius: 2px; transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
        .step-dots { display: flex; gap: 6px; padding: 14px 0 16px; }
        .step-dot { width: 7px; height: 7px; border-radius: 50%; background: #ddd9d0; cursor: pointer; transition: all 0.2s ease; border: none; padding: 0; }
        .step-dot.active { background: #1a2744; transform: scale(1.2); }
        .step-dot.done { background: #c9a96e; }

        .main-content { max-width: 760px; margin: 0 auto; padding: 40px 24px 120px; }

        .step-tag { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #c9a96e; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
        .step-tag::after { content: ''; display: block; height: 1px; width: 32px; background: #c9a96e; opacity: 0.5; }
        .step-title { font-family: 'Crimson Pro', serif; font-size: 30px; font-weight: 600; color: #1a2744; line-height: 1.2; margin-bottom: 14px; letter-spacing: -0.02em; }
        .step-description { font-family: 'DM Sans', sans-serif; font-size: 14px; color: #6b6557; line-height: 1.7; margin-bottom: 28px; max-width: 600px; }

        .warning-banner { background: #fff8ed; border: 1px solid #f0d9a8; border-left: 3px solid #c9a96e; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; font-family: 'DM Sans', sans-serif; font-size: 12.5px; color: #7a5f30; line-height: 1.5; display: flex; gap: 10px; align-items: flex-start; }

        .ideas-section { margin-bottom: 24px; }
        .ideas-label { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #3d5494; margin-bottom: 10px; }
        .ideas-textarea { width: 100%; min-height: 160px; padding: 16px 18px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.7; color: #2a2a3e; background: #ffffff; border: 1.5px solid #d4dae8; border-radius: 10px; resize: vertical; outline: none; transition: border-color 0.2s; }
        .ideas-textarea:focus { border-color: #1a2744; }
        .ideas-hint { font-family: 'DM Sans', sans-serif; font-size: 11.5px; color: #9b9488; margin-top: 8px; line-height: 1.5; }

        .prompt-card { background: #ffffff; border: 1px solid #e2ddd5; border-radius: 12px; overflow: hidden; margin-bottom: 12px; box-shadow: 0 2px 12px rgba(26,39,68,0.06); }
        .prompt-card-header { background: #1a2744; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; }
        .prompt-card-label { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #9ba8c0; }
        .copy-btn { display: flex; align-items: center; gap: 6px; background: #c9a96e; color: #1a2744; border: none; border-radius: 6px; padding: 7px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.2s ease; letter-spacing: 0.02em; }
        .copy-btn:hover { background: #b8934d; transform: translateY(-1px); }
        .copy-btn.copied { background: #4a7c5e; color: white; }
        .prompt-text { padding: 22px 24px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.75; color: #2a2a3e; white-space: pre-wrap; background: #fafaf8; min-height: 100px; }

        .chatgpt-reminder { text-align: center; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #9b9488; padding: 0 0 20px; display: flex; align-items: center; justify-content: center; gap: 6px; }

        .instructions-card { background: #eef1f8; border: 1px solid #d4dae8; border-radius: 12px; padding: 22px 24px; margin-bottom: 32px; }
        .instructions-title { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #3d5494; margin-bottom: 14px; }
        .instructions-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .instructions-list li { display: flex; gap: 12px; align-items: flex-start; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: #3a4a6b; line-height: 1.5; }
        .step-num { min-width: 22px; height: 22px; background: #1a2744; color: white; border-radius: 50%; font-size: 11px; font-weight: 500; display: flex; align-items: center; justify-content: center; margin-top: 1px; flex-shrink: 0; }

        .nav-bar { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .nav-btn { display: flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 10px; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; transition: all 0.2s ease; }
        .nav-btn-prev { background: #ffffff; color: #1a2744; border: 1.5px solid #ddd9d0; }
        .nav-btn-prev:hover:not(:disabled) { background: #f0eee8; border-color: #bfbab0; }
        .nav-btn-prev:disabled { opacity: 0.3; cursor: not-allowed; }
        .nav-btn-next { background: #1a2744; color: white; flex: 1; justify-content: center; }
        .nav-btn-next:hover { background: #253761; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(26,39,68,0.25); }
        .nav-btn-final { background: linear-gradient(135deg, #c9a96e, #b8934d); color: #1a2744; }
        .nav-btn-final:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(201,169,110,0.4); }

        .final-badge { background: linear-gradient(135deg, #1a2744, #253761); border: 1px solid #c9a96e; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; display: flex; align-items: center; gap: 16px; }
        .final-badge-icon { font-size: 28px; flex-shrink: 0; }
        .final-badge-text { font-family: 'DM Sans', sans-serif; }
        .final-badge-title { font-size: 14px; font-weight: 500; color: #c9a96e; margin-bottom: 4px; }
        .final-badge-desc { font-size: 13px; color: #9ba8c0; line-height: 1.5; }

        @media (max-width: 600px) {
          .app-header { padding: 20px 20px 18px; }
          .app-title { font-size: 21px; }
          .progress-bar-wrap { padding: 14px 20px 0; }
          .main-content { padding: 28px 16px 100px; }
          .step-title { font-size: 24px; }
          .prompt-text { font-size: 13px; padding: 18px 16px; }
        }
      `}</style>

      {/* Header */}
      <header className="app-header">
        <div className="header-label">Iniciativa · Señales que importan</div>
        <div className="app-title">Diseñador de Charlas Escolares</div>
        <div className="app-subtitle">Crea una charla clara, profesional y adaptada a colegios con ayuda de ChatGPT.</div>
      </header>

      {/* Progress */}
      <div className="progress-bar-wrap">
        <div className="progress-meta">
          <span className="step-counter">Paso {current + 1} de {steps.length}</span>
          <span className="progress-pct">{Math.round(progress)}% completado</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="step-dots">
          {steps.map((s, i) => (
            <button
              key={s.id}
              className={`step-dot ${i === current ? "active" : i < current ? "done" : ""}`}
              onClick={() => navigate(i)}
              title={s.title}
            />
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="main-content">
        <div className="step-tag">{step.tag}</div>
        <h2 className="step-title">{step.title}</h2>
        <p className="step-description">{step.description}</p>

        {step.warning && (
          <div className="warning-banner">
            <span>⚠️</span>
            <span>{step.warning}</span>
          </div>
        )}

        {step.isFinal && (
          <div className="final-badge">
            <div className="final-badge-icon">🎓</div>
            <div className="final-badge-text">
              <div className="final-badge-title">Último paso del proceso</div>
              <div className="final-badge-desc">
                Al ejecutar este prompt, tendrás el documento completo con 19 secciones listo para copiar en Word o Google Docs.
              </div>
            </div>
          </div>
        )}

        {/* Step 3: editable ideas field */}
        {step.isEditable && (
          <div className="ideas-section">
            <div className="ideas-label">✍️ Tus ideas para la charla</div>
            <textarea
              className="ideas-textarea"
              placeholder={PLACEHOLDER_IDEAS}
              value={ideas}
              onChange={(e) => setIdeas(e.target.value)}
            />
            <p className="ideas-hint">
              {ideas.trim()
                ? `✓ Tus ideas se insertarán automáticamente en el prompt al copiarlo.`
                : "Escribe al menos una idea para que el prompt se complete correctamente."}
            </p>
          </div>
        )}

        {/* Prompt card */}
        <div className="prompt-card">
          <div className="prompt-card-header">
            <span className="prompt-card-label">Prompt para ChatGPT</span>
            <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
              {copied ? "✓ Copiado" : "⎘ Copiar prompt"}
            </button>
          </div>
          <div className="prompt-text">{getFinalPrompt()}</div>
        </div>

        {/* ChatGPT reminder */}
        <div className="chatgpt-reminder">
          <span>💬</span>
          <span>Usa siempre el <strong>mismo chat de ChatGPT</strong> en todos los pasos para no perder el contexto.</span>
        </div>

        {/* Instructions */}
        <div className="instructions-card">
          <div className="instructions-title">Cómo usar este prompt</div>
          <ul className="instructions-list">
            {step.instructions.map((inst, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <span>{inst}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="nav-bar">
          <button
            className="nav-btn nav-btn-prev"
            onClick={() => navigate(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            ← Anterior
          </button>
          {current < steps.length - 1 ? (
            <button
              className="nav-btn nav-btn-next"
              onClick={() => navigate(Math.min(steps.length - 1, current + 1))}
            >
              Continuar al Paso {current + 2} →
            </button>
          ) : (
            <button className="nav-btn nav-btn-next nav-btn-final" onClick={() => navigate(0)}>
              🎉 ¡Proceso completo! Volver al inicio
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
