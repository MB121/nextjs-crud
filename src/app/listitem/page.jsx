"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ListItem = () => {
  const router = useRouter();
  const [formDataList, setFormDataList] = useState([]);
  const [EditDataList, setEditDataList] = useState(null);

  useEffect(() => {
    const formData = localStorage?.getItem("formData");
    if (formData) setFormDataList(JSON.parse(formData));
  }, []);

  const handleEditItem = (data) => {
    if(data){
      router.push(`/?isEdit=true&id=${data.id}`)
    }
    setEditDataList(data)
  };

  const handleDeleteItem = (data) => {
    const tempdata = formDataList.filter((item) => item.id !== data?.id)
    localStorage.setItem("formData",JSON.stringify(tempdata))
    setFormDataList(tempdata)
  };

  return (
    <div>
      <h2>ITEM LIST</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Mobile Number</th>
            <th>Country</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {formDataList &&
            formDataList?.map((data, index) => {
              return (
                <tr key={index}>
                  <th>{data?.companyName}</th>
                  <th>{data?.email}</th>
                  <th>{data?.mobileNumber}</th>
                  <th>{data?.country}</th>
                  <th>{data?.state}</th>
                  <th>
                    <button onClick={() => handleEditItem(data)}>EDIT</button>
                  </th>
                  <th>
                    <button onClick={() => handleDeleteItem(data)}>DELETE</button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
