import { Tipo } from './tipo'
import { Nivel } from './nivel'
import Tecnologia from '../tecnologias/tecnologias'

export default interface Projeto {
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnologias: Tecnologia []
}