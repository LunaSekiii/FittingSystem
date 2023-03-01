import React, { useState, useEffect, useRef } from "react";
// import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./ProductService";

export default function ChooseCarousel(props) {
  const [products, setProducts] = useState([]);
  const [activeBox, setActiveBox] = useState(0);
  const uploadingImg = useRef();
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  useEffect(() => {
    setProducts(ProductService()[props.type === "portrait" ? 0 : 1]);
  }, [props.type]);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={product.src}
            alt="img"
            className={
              "w-6 shadow-2 choose-box" +
              (product.id === activeBox ? " choosed-box" : " ")
            }
            onClick={() => {
              setActiveBox(product.id);
              if (!product.id) {
                uploadingImg.current.click();
              }
            }}
          />
        </div>
      </div>
    );
  };

  const previewImg = (file) => {
    let reader;
    if (file) {
      // 创建流对象
      reader = new FileReader();
      reader.readAsDataURL(file);
    }
    // 捕获 转换完毕
    reader.onload = (e) => {
      // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
      setProducts([{ src: e.target.result, id: 0 }, ...products.slice(1)]);
    };
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
      <input
        type="file"
        name="file"
        accept="image/*"
        ref={uploadingImg}
        onChange={(e) => {
          previewImg(e.target.files[0]);
        }}
        style={{ display: "none" }}
      />
    </div>
  );
}
