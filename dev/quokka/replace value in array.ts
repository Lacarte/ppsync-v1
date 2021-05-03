export enum STATES {
  active = "Actif",
  inactive = "Inactif",
}

const data = [
  {
    id: 4,
    description: "Changement Renseignements",
    state: "active",
    published_at: "2021-04-28T11:10:22.762Z",
    created_at: "2021-04-28T11:10:22.766Z",
    updated_at: "2021-04-28T11:10:22.766Z",
  },
  {
    id: 3,
    description: "Demande de Passeport",
    state: "active",
    published_at: "2021-04-28T11:09:49.634Z",
    created_at: "2021-04-28T11:09:49.640Z",
    updated_at: "2021-04-28T11:09:49.640Z",
  },
  {
    id: 2,
    description: "Renouvellement",
    state: "active",
    published_at: "2021-04-28T11:07:26.351Z",
    created_at: "2021-04-28T11:07:26.364Z",
    updated_at: "2021-04-28T11:07:26.364Z",
  },
  {
    id: 1,
    description: "Passport Perdu",
    state: "in>?active",
    published_at: "2021-04-28T02:03:12.661Z",
    created_at: "2021-04-28T02:03:12.687Z",
    updated_at: "2021-04-28T02:03:12.687Z",
  },
];

//console.log(Object.keys(STATES)[0]);

const changeData = (data) => {
  let dataTransformed = { ...data };

  for (var i in dataTransformed) {
    console.log(dataTransformed[i].state);
    switch (dataTransformed[i].state) {
      case "active":
        dataTransformed[i].state = STATES.active;
        console.log('>>>>>',dataTransformed[i].state);
        console.log('>>>>>', STATES.active);
        break;
      case "inactive":
        dataTransformed[i].state = STATES.inactive;
        break;
    }
  }

  dataTransformed

};

//console.log();
changeData(data);
