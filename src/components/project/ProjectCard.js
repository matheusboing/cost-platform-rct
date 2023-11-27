import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

import { BsPencil, BsTrashFill } from 'react-icons/bs'

function PostCard({ id, name, budget, category, handleRemove })  {
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R${budget}
            </p>
            <p className={styles.category_text}>
                 <span className={`${styles[category.name.toLowerCase()]}`}></span>{category.name}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default PostCard
