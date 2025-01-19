import { CustomLink } from '@/components'
import { TiArrowBackOutline } from "react-icons/ti";
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles["notfound-container"]}>
      <p>Página não encontrada.</p>
      <p>Clique no botão abaixo para voltar para a tela inicial.</p>
      <CustomLink path="/"><TiArrowBackOutline /><span>Retornar para a tela inicial</span></CustomLink>
    </div>
  )
}
