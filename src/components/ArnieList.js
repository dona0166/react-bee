import React from 'react'

import  {  Table, Tag  } from 'antd'

const columns = [
  {
    title: 'Arnie',
    dataIndex: 'id',
    key: 'id',
    render: text => <h1>{text}</h1>,
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
    render: text => <h1>{text}°</h1>,
  },
  {
    title: 'Umidity',
    dataIndex: 'umidity',
    key: 'umidity',
    render: text => <h1>{text}%</h1>,
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    render: text => <h1>{text}Kg</h1>,
  }
]

const data = [
  { id: 1, temperature: 44, umidity: 50, weight: 50 }, 
  { id: 2, temperature: 3, umidity: 66, weight: 50 },
  { id: 3, temperature: 22, umidity: 20, weight: 50 },
  { id: 4, temperature: -1, umidity: 70, weight: 100 },
  { id: 5, temperature: -100, umidity: 2, weight: 100 },
]

const ArnieList = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default ArnieList;