class Game extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("game_template");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
    this.map_container;
    this.text_overlay;
    this.current_floor = "Floor 0";
    this.floor_index = Object.keys(Game.map_point_data.floor_data).indexOf(
      this.current_floor
    );
    this.text_width = 160;
  }
  static map_point_data = {
    floor_data: {
      /* "floor name": {
        image_file: "url-to-file"
        display_name: "name"
      } 
      etc...*/
      "Floor 0": {
        image_file: "./img/route/plattegrond0.jpg",
        display_name: "Verdieping 0",
      },
      "Floor 1": {
        image_file: "./img/route/plattegrond1.jpg",
        display_name: "Verdieping 1",
      },
      "Floor 2": {
        image_file: "./img/route/plattegrond2.jpg",
        display_name: "Verdieping 2",
      },
      "Floor 3": {
        image_file: "./img/route/Plattegrond_3.jpg",
        display_name: "Verdieping 3",
      },
    },
    main_path: {
      path_colour: "var(--nav-background-color)",
      path_points: {
        "Floor 0": [
          {
            name: "Zelfportretten",
            size: 4,
            cords: {
              x: 47,
              y: 53,
            },
            short_text: "Zelfportretten",
            point_image: [
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0273V1962-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0022V1962-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0163V1962-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0162V1962-800.jpg",
              "./img/tentoonstelling/verdieping_0/95d00337f301ff9a4dbaf9e7b2094de3.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0060V1962r-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0164V1962-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0071V1962r-800.jpg",
              "./img/tentoonstelling/verdieping_0/vangoghmuseum-s0068V1962r-800.jpg",
            ],
            text_data: [
              "De Australische schilder John Peter Russell leerde Vincent van Gogh kennen in het atelier van Fernand Cormon. In 1886 schilderde hij dit portret van zijn vriend in een conventionele, realistische stijl.",
              "In dit zelfportret presenteerde Van Gogh zichzelf als schilder, met palet en penselen in de hand achter een doek op een schildersezel.",
              "Dit schetsmatige zelfportret is een voorbeeld van de razendsnelle ontwikkeling die Van Gogh in Parijs doormaakte. Het zonnige palet en de losse verftoetsen tonen de invloed van de impressionisten.",
              "Op dit zelfportret draagt Van Gogh een zwarte vilten hoed en een overjas met das. Hij ziet eruit als een keurige heer.",
              "Op deze foto zie je het schilderspalet van Van Gogh.",
              "Er zijn maar weinig mensen die weten dat Van Gogh ook korte tijd lesgaf aan amateurschilders.",
              "In lichte zomerse kleding kijkt de kunstenaar ons onderzoekend aan, met één blauw en één groen oog. Voor dit zelfportret gebruikte Van Gogh een goedkope drager: karton.",
              "Vogelnesten",
              "Minstens 50 verschillende koppen wilde Van Gogh schilderen, om te oefenen met boerentypes. Hij begon ermee in oktober 1884, op aanraden van een bevriende collega.",
            ],
          },
        ],
        "Floor 1": [
          {
            name: "Van Goghs Voorbeelden",
            size: 3,
            cords: {
              x: 25,
              y: 62,
            },
            short_text: "Voorbeelden",
            point_image: [
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0424M1991-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0416N1990-800.jpg",
            ],
            text_data: [
              "In dit enorme schilderij laat de Franse schilder Léon Lhermitte een boerenfamilie zien die uitrust tijdens het hooien.",
              "Zeegezicht bij Scheveningen.",
            ],
          },
          {
            name: "Boerenschilder",
            size: 3,
            cords: {
              x: 30,
              y: 22.5,
            },
            short_text: "Boerenschilder",
            point_image: [
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0129V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0003V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0052V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0136V1973-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0008V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0061V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0010V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0141M1977-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0011V1962-800.jpg",
            ],
            text_data: [
              "Deze boerinnen schilderde Van Gogh in het Drentse dorp Nieuw-Amsterdam. In het najaar van 1883 verbleef hij daar twee maanden.",
              "Het uitgaan van de Hervormde Kerk te Nuenen",
              "Stilleven met koperen ketel en kruik",
              "Dit is een tropische vleermuis: een ongewoon onderwerp. Het is een opgezet exemplaar dat Van Gogh hier naschilderde.",
              "De lijvige bijbel was van Van Goghs vader, die dominee was. Kort voor het ontstaan van dit schilderij was hij overleden.",
              "Van Gogh schilderde deze man in Antwerpen, waar hij van eind november 1885 tot eind februari 1886 woonde.",
              "Het grijze haar van de oude vrouw komt onder de witte muts uit. Van Gogh hield van dit soort mutsen, die mooi contrasteerden met donkere kleding en achtergronden.",
              "Populierenlaan in de herfst",
              "Het was een ongewone keuze om versleten schoenen te schilderen. Een Parijse kennis beschreef hoe Van Gogh eerst oude werkschoenen kocht op een vlooienmarkt.",
            ],
          },
          {
            name: "Bloeiperiode",
            size: 3,
            cords: {
              x: 77,
              y: 56,
            },
            short_text: "Bloeiperiode",
            point_image: [
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0177V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0186V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0016V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0019V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0026V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0024V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0031V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0047V1962-800.jpg",
              "./img/tentoonstelling/verdieping_1/vangoghmuseum-s0115V1962-800.jpg",
            ],
            text_data: [
              "Van Gogh was nooit zuinig met verf geweest. Maar nadat hij in juni 1886 kennismaakte met de bloemstillevens van Adolphe Monticelli (1824-1886) ging hij een stapje verder.",
              "Dit cafétafeltje met uitzicht schilderde Van Gogh met sterk verdunde olieverf en dunne penselen. Die techniek heet peinture à l'essence.",
              "Van Gogh schilderde dit zelfportret in de winter van 1887-1888, toen hij al bijna twee jaar in Parijs woonde.",
              "Dit zonovergoten parkgezicht noemde Van Gogh zelf 'het schilderij van de tuin met geliefden'.",
              "Toen Van Gogh in februari 1888 in Arles aankwam, was het nog volop winter. Na enkele weken brak de lente aan. Vol geestdrift begon hij aan een reeks studies van bomen in bloesem.",
              "Van Gogh koos het perspectief zo dat je omhoogkijkt, tegen de wirwar van takken aan. Als kijker heb je het gevoel midden tussen de bloeiende bomen te staan.",
              "De Zonnebloemen behoren tot de bekendste schilderijen van Van Gogh. Hij maakte ze in Arles, in Zuid-Frankrijk, in 1888 en 1889.",
              "In Arles maakte Van Gogh dit schilderij van zijn slaapkamer in het Gele Huis. Hij had de kamer zelf ingericht met eenvoudige meubels en zijn eigen werk aan de muur.",
              "Van Gogh had een grote bewondering voor Japanse kunst. Hij werd er gelukkig en vrolijk van, schreef hij. Hij maakte drie schilderijen naar Japanse prenten uit zijn eigen verzameling.",
            ],
          },
        ],
        "Floor 2": [
          {
            name: "Van Gogh tekenaar",
            size: 3,
            cords: {
              x: 19,
              y: 85,
            },
            short_text: "Tekenaar",
            point_image: [
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-d0074V1962-800.jpg",
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-d0387V1977-800.jpg",
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-s0073V1962-800.jpg",
            ],
            text_data: [
              "Naaiende vrouw met meisje",
              "Garenspoelende man",
              "Garenspoelende vrouw",
            ],
          },
          {
            name: "Vrienden in Pont-Aven",
            size: 3,
            cords: {
              x: 34,
              y: 33,
            },
            short_text: "Vrienden",
            point_image: [
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-s0039V1962-800.jpg",
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-s0225V1962-800.jpg",
            ],
            text_data: [
              "De knoestige stam en takken van dit kleine perenboompje steken af tegen de lichte ondergrond. Van Gogh was verrukt van de bloeiende fruitbomen in de Provence. Hij maakte dan ook een hele reeks schilderijen van de bomen in bloesem.",
              "Portretteerde Gauguin hier werkelijk zijn vriend Van Gogh terwijl die een vaas zonnebloemen schilderde? Nee, zeker niet: het was december en het bloeiseizoen was allang voorbij.",
            ],
          },
          {
            name: "Familieschatten",
            size: 3,
            cords: {
              x: 66,
              y: 85,
            },
            short_text: "Familieschatten",
            point_image: [
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-s0157V1962-800.jpg",
              "./img/tentoonstelling/verdieping_2/vangoghmuseum-s0071V1962v-800.jpg",
            ],
            text_data: [
              "Lang is gedacht dat dit een zelfportret was, maar een andere opvatting is dat het hier gaat om een portret van Vincents broer Theo. De broers leken namelijk veel op elkaar.",
              "Voor dit zelfportret gebruikte Van Gogh vele tinten blauw. In de achtergrond, maar ook in zijn gezicht: zelfs zijn oogwit maakte hij blauw.",
            ],
          },
        ],
        "Floor 3": [
          {
            name: "Schilderen ondanks alles",
            size: 3,
            cords: {
              x: 54,
              y: 85,
            },
            short_text: "Ondanks alles",
            point_image: [
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0188V1962-800.jpg",
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0050V1962-800.jpg",
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0196V1962-800.jpg",
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0149V1962-800.jpg",
            ],
            text_data: [
              "Het is goed te zien hoe Van Gogh dit doek schilderde: eerst de bloemen en de vlinders, daarna pas de blauwe achtergrond.",
              "Van Gogh schilderde dit stilleven in de inrichting in Saint-Rémy. Het schilderij was voor hem in de eerste plaats een kleurstudie. Hij zocht naar een krachtig kleurcontrast.",
              "Dit schilderij toont de tuin van de inrichting in Saint-Rémy waar Van Gogh een jaar was opgenomen. Hij werkte er regelmatig als hij door zijn ziekte het terrein niet mocht verlaten.",
              "Korenveld met kraaien is één van de beroemdste schilderijen van Van Gogh.",
            ],
          },
          {
            name: "Bezielde natuur",
            size: 3,
            cords: {
              x: 30,
              y: 34,
            },
            short_text: "Bezielde natuur",
            point_image: [
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0195V1962-800.jpg",
            ],
            text_data: [
              "Op het eerste gezicht lijkt dit schilderij een wirwar van bonte kleuren en grillige, abstracte vormen. Pas daarna zie je dat het een helling met boomstammen en -wortels voorstelt.",
            ],
          },
          {
            name: "De Amandelbloesem",
            size: 3,
            cords: {
              x: 19,
              y: 85,
            },
            short_text: "Amandelbloesem",
            point_image: [
              "./img/tentoonstelling/verdieping_3/vangoghmuseum-s0176V1962-800.jpg",
            ],
            text_data: [
              "Hier schilderde Van Gogh een van zijn lievelingsonderwerpen: grote bloeiende takken tegen een blauwe lucht. Omdat de amandelboom al vroeg in het voorjaar bloeit, is het een symbool voor nieuw leven.",
            ],
          },
        ],
      },
    },
    third_path: {
      path_colour: "green",
      path_points: {
        tweede: [
          {
            name: "Path_3_point",
            size: 4,
            cords: {
              x: 75,
              y: 50,
            },
            text_data: "Dit is een punt op het derde pad",
            short_text: "punt op pad drie",
            point_image: "./img/foto1.png",
          },
        ],
      },
    },
  };

  setPoints() {
    let i;
    let point;
    for (i in Game.map_point_data) {
      if (i === "floor_data") continue;
      let index = 0;
      if (Game.map_point_data[i].path_points[this.current_floor]) {
        for (point of Game.map_point_data[i].path_points[this.current_floor]) {
          // create a new element
          let newPoint = document.createElement("small-pop-point");

          // set a class
          newPoint.classList.add("point");

          // set corresponding cords
          newPoint.style.left = `${point.cords.x - point.size / 2}%`;
          newPoint.style.top = `${point.cords.y - point.size / 2}%`;

          // set corresponding size
          newPoint.style.width = `${point.size}%`;

          newPoint.dataset.backgroundColor = Game.map_point_data[i].path_colour;

          // set a slot
          newPoint.slot = "point";

          // set the correct index on the dataset
          newPoint.dataset.index = index;
          newPoint.dataset.path = i;

          // eventhandler when point is clicked.
          newPoint.addEventListener("click", this.showData);
          if (point.cords.y < 50) {
            newPoint.setAttribute("below", "true");
          }

          // create het point itself (neccesary since the parent is a webcomponent itself)
          let dispPoint = document.createElement("div");
          dispPoint.slot = "small-point";
          dispPoint.classList.add("display-point");

          // set the background image of the popup
          let dispBack_img = document.createElement("img");
          dispBack_img.src = point.point_image[0];
          dispBack_img.slot = "back_img";

          // set the text of the popup
          let dispShort = document.createElement("span");
          dispShort.textContent = point.short_text;
          dispShort.slot = "short_text";

          // append everything. ORDER IS IMPORTANT!
          newPoint.appendChild(dispPoint);
          newPoint.appendChild(dispBack_img);
          newPoint.appendChild(dispShort);
          this.appendChild(newPoint);

          index++;
        }
      }
    }
  }

  showData(e) {
    // get het text_overlay element via the parentNode's Shadowroot
    let text_overlay = this.parentNode.shadowRoot.getElementById(
      "text_overlay"
    );

    // functioning "back" and "next" buttons
    text_overlay.querySelector(".back").onclick = () => {
      document
        .querySelectorAll(
          `game-element .point[data-path="${this.dataset.path}"]`
        )
        [Number(this.dataset.index) - 1].click();
    };
    text_overlay.querySelector(".next").onclick = () => {
      document
        .querySelectorAll(
          `game-element .point[data-path="${this.dataset.path}"]`
        )
        [Number(this.dataset.index) + 1].click();
    };

    // check if we are at the beginning or end
    if (this.dataset.index == 0) {
      text_overlay.querySelector(".back").setAttribute("hidden", "true");
      text_overlay.querySelector(".next").removeAttribute("hidden");
    } else if (
      this.dataset.index ==
      Game.map_point_data[this.dataset.path].path_points[
        this.parentElement.current_floor
      ].length -
        1
    ) {
      text_overlay.querySelector(".back").removeAttribute("hidden");
      text_overlay.querySelector(".next").setAttribute("hidden", "true");
    } else {
      text_overlay.querySelector(".back").removeAttribute("hidden");
      text_overlay.querySelector(".next").removeAttribute("hidden");
    }
    if (
      Game.map_point_data[this.dataset.path].path_points[
        this.parentElement.current_floor
      ].length == 1
    ) {
      text_overlay.querySelector(".back").setAttribute("hidden", "true");
      text_overlay.querySelector(".next").setAttribute("hidden", "true");
    }

    // make the overlay appear and disappear when asked
    text_overlay.removeAttribute("hidden");
    text_overlay.querySelector("#name").textContent =
      Game.map_point_data[this.dataset.path].path_points[
        this.parentElement.current_floor
      ][this.dataset.index].name;

    // the cover image
    text_overlay.querySelector(
      ".content aside#cover_img_con img#cover_img"
    ).src =
      Game.map_point_data[this.dataset.path].path_points[
        this.parentElement.current_floor
      ][this.dataset.index].point_image[0];

    text_overlay.querySelector("#main_point_content").innerHTML = "";
    for (
      let i = 0;
      i <
      Game.map_point_data[this.dataset.path].path_points[
        this.parentElement.current_floor
      ][this.dataset.index].text_data.length;
      i++
    ) {
      let partSec = document.createElement("section");
      partSec.classList.add("partion");
      let partSecText = document.createElement("p");
      let partSecImg = document.createElement("img");

      partSecText.textContent =
        Game.map_point_data[this.dataset.path].path_points[
          this.parentElement.current_floor
        ][this.dataset.index].text_data[i];

      partSecImg.src =
        Game.map_point_data[this.dataset.path].path_points[
          this.parentElement.current_floor
        ][this.dataset.index].point_image[i];

      partSec.appendChild(partSecText);
      partSec.appendChild(partSecImg);
      text_overlay.querySelector("#main_point_content").appendChild(partSec);
    }

    // set scroll to 0
    text_overlay.querySelector(".inner > .content").scrollTop = 0;
  }

  changeFloor(nextFloor) {
    if (Game.map_point_data.floor_data[nextFloor]) {
      this.querySelectorAll("span[slot='floor_list']").forEach((pan) => {
        pan.style.left = `-${this.floor_index * this.text_width}px`;
      });
      let oldFloor = this.current_floor;
      this.current_floor = nextFloor;
      this.querySelectorAll("small-pop-point").forEach((point) => {
        point.remove();
      });
      this.querySelector(`img[data-cors="${oldFloor}"]`).slot = "";
      this.querySelector(`img[data-cors="${nextFloor}"]`).slot = "map";
      this.setPoints();
    }
  }

  connectedCallback() {
    this.map_container = this.shadowRoot.getElementById("slots-container");
    this.text_overlay = this.shadowRoot.getElementById("text_overlay");
    // make sure the component has no elements inside it
    this.innerHTML = "";

    // set the images and floor selection according to the floor_data
    let indexCount = 0;
    let floorKeys = Object.keys(Game.map_point_data.floor_data);
    for (let i in Game.map_point_data.floor_data) {
      // set the floor selection
      let floorSel = document.createElement("span");
      floorSel.textContent = Game.map_point_data.floor_data[i].display_name;
      floorSel.setAttribute("slot", "floor_list");
      floorSel.style.left = `-${this.floor_index * this.text_width}px`;
      floorSel.dataset.floor = floorKeys[indexCount];

      this.appendChild(floorSel);

      // set the images
      if (i === this.current_floor) {
        this.innerHTML += `<img src="${Game.map_point_data.floor_data[i].image_file}" data-cors="${i}" slot="map" />`;
      } else {
        this.innerHTML += `<img src="${Game.map_point_data.floor_data[i].image_file}" data-cors="${i}" />`;
      }

      indexCount++;
    }

    // buttons setup to choose floor
    let nextFloor = this.shadowRoot.querySelector("#next_floor");
    let prevFloor = this.shadowRoot.querySelector("#previous_floor");
    prevFloor.onclick = () => {
      if (this.floor_index > 0) {
        if (this.floor_index == 1) {
          prevFloor.setAttribute("hidden", "true");
        }
        nextFloor.removeAttribute("hidden");
        this.floor_index--;
        this.changeFloor(floorKeys[this.floor_index]);
      }
    };
    nextFloor.onclick = () => {
      if (this.floor_index < floorKeys.length - 1) {
        if (this.floor_index == floorKeys.length - 2) {
          nextFloor.setAttribute("hidden", "true");
        }
        prevFloor.removeAttribute("hidden", "true");
        this.floor_index++;
        this.changeFloor(floorKeys[this.floor_index]);
      }
    };

    // this function gets immediately called when the callback is connected, it's like an "int main () {... return 0; }" in C;
    this.setPoints();
  }
}

class Pop extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("pop-template");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
  connectedCallback() {
    if (this.getAttribute("below")) {
      this.shadowRoot.querySelector(".content").setAttribute("below", "true");
    }
    this.querySelector(
      ".display-point"
    ).style.backgroundColor = this.dataset.backgroundColor;
  }
}

window.customElements.define("small-pop-point", Pop);
