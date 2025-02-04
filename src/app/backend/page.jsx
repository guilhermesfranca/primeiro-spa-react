import Link from "next/link";
import styles from "./backend.module.css";

export default function Backend() {
  return (
    <div className={styles.container_backend}>
      <h2>Node.Js</h2>
      <p>
        Node.js é uma plataforma de desenvolvimento que permite a execução de
        código JavaScript no lado do servidor. Baseado no motor V8 do Google
        Chrome, o Node.js é conhecido por sua eficiência e escalabilidade. Ele é
        amplamente utilizado para construir aplicativos web, APIs e serviços em
        tempo real. Com uma vasta gama de bibliotecas e um ecossistema robusto,
        o Node.js é uma escolha popular para os desenvolvedores que buscam criar
        aplicações rápidas e escaláveis
      </p>
      <Link
        href="https://www.devmedia.com.br/carreira-programador/?slug=back-end"
        target="_blank"
      >
        Guia de Back-end
      </Link>
      <Link className="link_retorno" href="/">
        Voltar
      </Link>
    </div>
  );
}
