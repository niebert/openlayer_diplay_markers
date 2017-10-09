  function el(id) {
      return document.getElementById(id);
  };


  // Load MapCenter and Zoom from Geolocation
  // ----------------------------------------
  if (localStorage.getItem("mapcenter") === null) {
      console.log("Map Center not saved in Local Storage of Browser")
  } else {
      // load Map Center from Local Storage
      vMapCenter = getGeolocArray4String(localStorage.getItem("mapcenter"), vMapCenter);
  };
  if (localStorage.getItem("zoom") === null) {
      console.log("Map Zoom not saved in Local Storage of Browser")
  } else {
      // load Map Center from Local Storage
      vZoom = parseInt(localStorage.getItem("zoom"));
  };


  //---- Evaluate Link Paramaters ----
  var vLinkParam = new LinkParam();
  vLinkParam.init(document);

  // load geoloaction from LinkParameter if available
  if (vLinkParam.exists("mapcenter")) {
      // Callback performed with LinkParameter mapcenter 
      // e.g. index.html?geolocation=-12.213,65.123
      //el("mymapcenter").value = vLinkParam.getValue("mapcenter");
      vMapCenter = getGeolocArray4String(LinkParam.getValue("mapcenter"), vMapCenter);
  };
  if (vLinkParam.exists("zoom")) {
      // Callback performed with LinkParameter zoom
      // e.g. index.html?zoom=12 
      var s = vLinkParam.getValue("zoom");
      var num = parseInt(s) || 4; //default zoom is 4
  };
  if (vLinkParam.exists("jsondata")) {
      // Callback performed with LinkParameter jsondata
      // e.g. index.html?jsondata=[....] 
      // el("myjsondata").value = vLinkParam.getValue("jsondata");
      var vStrJSON = vLinkParam.getValue("jsondata");
      var arr = vIconArray;
      if (response) {
          try {
              arr = JSON.parse(response);
          } catch (e) {
              alert(e); // error in the above string (in this case, yes)!
          };
          if (arr) {
          	vIconArray = arr;
          };
      }
  };