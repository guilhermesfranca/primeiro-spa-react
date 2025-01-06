import Link from "next/link";
import styles from "@/app/frontend/frontend.module.css";

export default function Frontend() {
  return (
    <div className={styles.container_frontend}>
      <h2>React.JS</h2>
      <p>
        O React.Js é uma biblioteca JavaScript utilizada para construir
        unterfaces de usuario interativas e eficientes. Ele é amplamente adotado
        devido à sua abordagem baseada em componentes a facilidade de criar
        aplicativos escaláveis. O React permite o desenvolvimento de single page
        application (spa) de forma eficiente e flexivel.
      </p>
      <Link
        href="https://www.devmedia.com.br/carreira-programador/?slug=front-end"
        target="_blank"
      >
        {" "}
        Guia de Front-end
      </Link>
      <Link className="link_retorno" href="/">
        Voltar
      </Link>
    </div>
  );
}
