import Link from "next/link";
import styles from "./mobile.module.css";

export default function Mobile() {
  return (
    <div className={styles.mobile_container}>
      <h2>React Native</h2>
      <p>
        React Native é um framework de desenvolvilmento de aplicativos móveis
        que permite a criação de aplicativos nativos usando JavaScript e React.
        Ele permite o desenvolvimento de aplicativos para IOS e Android usando
        uma base de codigo compartilhada, proporcionando uma experiência de
        desenvolvimento eficiente e rápida. Com React Native, os desenvolvedores
        podem criar aplicativos robustos e de alto desempenho de forma
        simplificada.
      </p>
      <Link
        href="https://www.devmedia.com.br/carreira-programador/?slug=mobile"
        target="_blank"
      >
        Guia de Mobile
      </Link>
      <Link className="link_retorno" href="/">
        Voltar
      </Link>
    </div>
  );
}
