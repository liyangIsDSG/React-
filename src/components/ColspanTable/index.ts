import React, { useState, useEffect }  from 'react'
import { Table } from 'antd'
export default function () {
  const [tableData, setTableData] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(15)
  const [count, setCount] = useState<number>(0)
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('www.baidu.com').then( function(data) {
        if(data) {
          setTableData(data.result)
          setCount(data.count)
          setLoading(false)
        }
    })
  },[page,pageSize])

  const onChangePage = (pageNumber?: any) => setPage(pageNumber)

  const onChangePageSize = (value: number) => setPageSize(value)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '电话',
      dataIndex: 'tel',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ]

  return (
    <>
      <Table
        bordered={false}
        rowKey={(r, i) => (i + '')}
        columns={columns}
        loading={loading}
        dataSource={tableData.length ? tableData : []}
        pagination={false}
        style={{ marginTop: 10 }}
        size="small"
      />
      <Row>
        <Col span={8}>
          <span>搜索到{props.count}条数据</span>
          <span style={{ margin: '0 20px' }}>共{Math.ceil(count / pageSize)}页</span>
          <Select defaultValue={15} onChange={onChangePageSize}>
            <Option value={10}>10条/页</Option>
            <Option value={15}>15条/页</Option>
            <Option value={20}>20条/页</Option>
            <Option value={30}>30条/页</Option>
          </Select>
        </Col>
        <Col span={14} push={2} style={{display:'flex', justifyContent:'flex-end', marginRight: 10}}>
           <Pagination 
             showQuickJumper={true} 
             current={page} 
             pageSize={pageSize} 
             total={count} 
             onChange={onChangePage}
           />
        </Col>
      </Row>
    </>
  )
}