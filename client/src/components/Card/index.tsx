import React from 'react'
import Button from 'components/Button'
import { bm, be } from 'utils/bem'

interface ICardProps {
  name: string,
  createdAt: string,
  courtsN: number,
  actionButton: () => void
}

const Card = ({ name, createdAt, courtsN, actionButton}: ICardProps) => (
  <div className={bm('Card')} >
    <div className={be('Card', 'head')} >
      <h2 className={be('Card', 'name')}>{name}</h2>
      <p className={be('Card', 'creation')}>{createdAt}</p>
      <p className={be('Card', 'courtsN')}>{courtsN}</p>
    </div>
    <div className={be('Card', 'footer')} >
      <div className={be('Card', 'action')} >
        <Button label='Details' onClick={actionButton} primary />
      </div>
    </div>
  </div>
)

export default Card
