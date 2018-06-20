import React from 'react'
import { Link } from 'react-router-dom'
import { bm, be } from 'utils/bem'

interface ICardProps {
  name: string
  createdAt: string
  courtsN: number
  id: number
}

const Card = ({ name, createdAt, courtsN, id}: ICardProps) => (
  <div className={bm('Card')} >
    <div className={be('Card', 'head')} >
      <h2 className={be('Card', 'name')}>{name}</h2>
      <p className={be('Card', 'creation')}>{createdAt}</p>
      <p className={be('Card', 'courtsN')}>{courtsN}</p>
    </div>
    <div className={be('Card', 'footer')} >
      <div className={be('Card', 'action')} >
        <Link className={be('Card', 'button')} to={`/details/${id}`}>Details</Link>
      </div>
    </div>
  </div>
)

export default Card
