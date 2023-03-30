import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

function Yorumlar(props){
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map((yrm) => {
        return (
          <div key={yrm.id}>
            <Yorum yorum={yrm} />
          </div>
        );
      })}
    </div>
  );
};

export default Yorumlar;
