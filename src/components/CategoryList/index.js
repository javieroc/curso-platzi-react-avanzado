import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const CategoryList = () => (
  <List>
    {
      [1, 2, 3, 4].map(e => <Item key={e}><Category /></Item>)
    }
  </List>
)
