/**
 * zorg ervoor dat je onderstaande functies werken
 *
 * 1. Zorg dat je een lijst van alle geschenken kan krijgen (enkel de id en de naam).
 * 2. Zorg dat je op basis van een verkregen ID de details van een geschenk kan teruggeven
 * 3. Zorg ervoor dat via postman nieuwe (andere zaken dan onderstaand) kan toevoegen aan de lijst van
 * geschenken.
 * 4. Zorg ervoor dat een geschenk enkel gewist kan worden als het in geen enkel lijstje staat.
 *
 * succes!!
 */

// connecteer de datagegevens aan de controller
const {
  sinterklaasGeschenken: geschenken,
  kindjes,
} = require("../databank/data");

const lijstGeschenken = (req, res) => {
  let FilterGeschenken = [];
  geschenken.forEach((geschenk) => {
    FilterGeschenken.push({
      id: `${geschenk.id}`,
      naam: `${geschenk.naam}`,
    });
  });
  res.json(FilterGeschenken);
};

const geschenkInfo = (req, res) => {
  let oneGeschenk = {};
  oneGeschenk = geschenken.forEach((geschenk) => {
    if ((geschenk.id = req.params.ID)) {
      return geschenk;
    }
  });
  console.log(oneGeschenk);

  res.json(oneGeschenk);
};

const geschenkToevoegen = (req, res) => {
  const newGeschenk = {
    id: req.body.id,
    naam: req.body.naam,
    categorie: req.body.categorie,
    prijs: req.body.prijs,
  };
  res.json({ resultaat: "ok" });
  geschenken.push(newGeschenk);
};

const geschenkWissen = (req, res) => {
  const geschenkToDel = geschenken.find(
    (geschenk) => geschenk.id == req.params.ID
  );

  const indexToDel = geschenken.indexOf(geschenkToDel);
  if (
    kindjes.forEach((kind) => {
      kind.geschenkId.find((id) => {
        id == req.params.ID;
      });
    }) != true
  ) {
    geschenken.splice(indexToDel, 1);
  }
  res.json({ resultaat: "gelukt" });
};

const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};

module.exports = {
  lijstGeschenken,
  geschenkInfo,
  geschenkToevoegen,
  geschenkWissen,
};
