AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

   createCards: function () {
    const thumbNailsRef = [
      {
        id: "iron-man",
        title: "Iron Man",
        url: "./thumbNails/iron-man.png",
      },
       {
        id: "black-widow",
        title: "Black Widow",
        url: "./thumbNails/black-widow.png",
      },

       {
        id: "spider-man",
        title: "Spider Man",
        url: "./thumbNails/spider-man.png",
      },
       {
        id: "loki",
        title: "Loki",
        url: "./thumbNails/loki.png",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (item) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      height: 20,
      width: 18
    });
    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1});
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
    
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
