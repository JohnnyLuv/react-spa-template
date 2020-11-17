import { List, Avatar } from 'antd'

function Main() {
  const data = [
    {
      title: '马斯克 SpaceX',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'alibaba',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'war of the world',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: '马斯克 SpaceX',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'alibaba',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'war of the world',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: '马斯克 SpaceX',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'alibaba',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'war of the world',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: '马斯克 SpaceX',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'alibaba',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'war of the world',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: '马斯克 SpaceX',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'alibaba',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
    {
      title: 'war of the world',
      description: 'this is project description this is project description this is project description this is project description this is project description',
    },
  ]

  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      pagination={{
        onChange: page => { console.log(page) },
        pageSize: 5,
      }}
      size='small'
      renderItem={el => <List.Item>
        <List.Item.Meta
          avatar={<Avatar >{el.title.slice(0, 1).toUpperCase()}</Avatar>}
          title={<a href="https://ant.design">{el.title}</a>}
          description={el.description}
        />
        <span style={{ color: '#666' }}>2020-12-12 12:12:12</span>
      </List.Item>}
    />
  )
}

export default Main