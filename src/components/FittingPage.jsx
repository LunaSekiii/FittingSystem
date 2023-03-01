import React from "react";

import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

import ChooseCarousel from "./ChooseCarousel";

const FittingPage = () => {
  return (
    <section className="fitting-page" id="fitting">
      <div className="choose-span">
        <Card className="card" role="region">
          <ChooseCarousel type="portrait" />
        </Card>

        <Card className="card" role="region">
          <ChooseCarousel type="clothing" />
        </Card>
      </div>
      <div className="generating-span">
        <Card id="img">
          <Image
            src="https://th.bing.com/th/id/OIP.3JDUbD1CG2P9e_TlEDAq2QHaKW?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            imageStyle={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Card>
        <Card>
          <Button label="试穿" />
        </Card>
      </div>
    </section>
  );
};

export default FittingPage;
