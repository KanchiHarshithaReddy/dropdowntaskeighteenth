import React, { useEffect, useState } from "react";
import { Images } from "./Images";
import { Mapped } from "./Mapped";
import { Mapping } from "./Mapping";

export const Master = () => {
  const [dummyimage1, setdummyimage1] = useState("../Assests/noimage.jpg");
  const [dummyimage2, setdummyimage2] = useState("../Assests/noimage.jpg");
  const [MappedList, setMappedList] = useState([]);
  const Listdata1 = [
    {
      id: 1,
      src: "../Assets/img1.jpg",
    },
    {
      id: 2,
      src: "../Assets/img2.jpg",
    },
    {
      id: 3,
      src: "../Assets/img3.jpg",
    },
    {
      id: 4,
      src: "../Assets/img4.jpg",
    },
  ];
  const Listdata2 = [
    {
      id: 1,
      src: "../Assets/img7.jpg",
    },

    {
      id: 2,
      src: "../Assets/img8.jpg",
    },
  ];

  const handlecard = (e) => {
    setdummyimage1(e);
  };
  const handlecard1 = (e) => {
    setdummyimage2(e);
  };
  const handleSave = () => {
    let images = {
      image1: dummyimage1,
      image2: dummyimage2,
    };
    let list = MappedList;
    list.push(images);

    const uniqValues = list.filter(

      (ele, ind) =>

        ind ===

        list.findIndex((elem) => elem.image1 === ele.image1 && elem.image2=== ele.image2)

    );
    console.log(uniqValues)
    setMappedList(uniqValues);
    setdummyimage1("../Assets/noimage.jpg");
    setdummyimage2("../Assets/noimage.jpg");
  };
  const handleRemoveImgClick = (id) => {
    console.log("remove");
    let list = MappedList;
    // console.log(list)
    const newList = list.splice(1);
    setMappedList(newList);
  };
  useEffect(() => { }, [MappedList]);

  return (
    <div>
      {/* <div className="row">
        <div className="column"> */}

      {/* <div className="list1"> */}

      <div className="card">
        <Images imagesList={Listdata1} type="left" handleclick={handlecard} />
        {/* </div> */}
      </div>
      {/* <div className="col-6"> */}
      {/* <div className="list2"> */}
      {/* <div className="col-6"> */}
      <div className="card1">
        <Images

          imagesList={Listdata2}
          type="right"
          handleclick={handlecard1}
        />
      </div>
      {/* </div> */}
      <div className="col-6">
        <Mapping
          image1={dummyimage1}
          image2={dummyimage2}
          handleSave={handleSave}
        />
      </div>
      {/* </div> */}
      {/* </div> */}

      {/* <div className="row">
        <div className="col-12"> */}
      <div>
        <div>
          <Mapped list={MappedList} handleremove={handleRemoveImgClick} />
        </div>
      </div>
    </div>
  );
};
