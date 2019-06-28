var App = class {

  constructor(ListeApp) {
    this.ListeApp = ListeApp;
  }

  Add(PourcenRigidit, app) {

    if (app != undefined) {
      if (PourcenRigidit < 100 && PourcenRigidit >= 0) {
        this.ListeApp.push(app);
        console.log(this.ListeApp);
      }
    }
  }

  coupler(PourcenRigidit) {
    if (this.ListeApp.lengh != 0) {
      if (PourcenRigidit < 100 && PourcenRigidit >= 0) {

      }
    }
  }

  MoyenneRigi() {
    var moy = 0;
    var i = 0;
    this.ListeApp.forEach(function(element) {
      moy += parseInt(element.rigidity);
      i++;
    });
    moy /= i;
    return moy;
  }

  Generation(Addrigidity) {

    this.ListeApp.forEach(function(element) {
      element.rigidity += Addrigidity;
    });
    return this.ListeApp;
  }

  schema() {
    var moy=0;
    this.ListeApp.forEach(function(element) {
      console.log(moy);
      moy += element.rigidity;
    });
    moy = moy / ListeApp.lengh;
  }

};


var messenger = {
  nameapp: 'messenger',
  rigidity: 30,
};

var discord = {
  nameapp: 'discord',
  rigidity: 60,
};

var app = {
  nameapp: 'Snap',
  rigidity: 20,
};

var ListeApp = [messenger, discord];
var App = new App(ListeApp);

//App.Add(app.rigidity, app.nameapp);

App.MoyenneRigi();