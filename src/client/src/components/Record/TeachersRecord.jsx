import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css' 
const dataSource = [
    {
      key: '1',
      name: 'Mike',
      fatherName:"D-Carpio",
      mobile:98987878,
      email:"random@gmail.com",
      age: 32,
      address: '10 Downing Street',
      subTeacher:"Science",
      classTeacher:10
    },
    {
      key: '2',
      name: 'John',
      fatherName:"Albert",
      mobile:98987878,
      email:"random@gmail.com",
      age: 42,
      address: '10 Downing Street',
      subTeacher:"Math",
      classTeacher:12
    },
  ];
  
  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: "Father's Name",
        dataIndex: 'fatherName',
        key: 'fatherName',
      },
      {
        title: "Mobile",
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title: "Email",
        dataIndex: 'email',
        key: 'email',
      },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: "Subject Teacher",
        dataIndex: 'subTeacher',
        key: 'subTeacher',
      },
      {
        title: "Class Teacher",
        dataIndex: 'classTeacher',
        key: 'classTeacher',
      },
  ];
  

export default function TeachersRecord() {
    return (
        <>
            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}
