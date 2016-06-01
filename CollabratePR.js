if (typeof(SiebelAppFacade.BeautifulThingPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingPR");
 define("siebel/custom/BeautifulThingPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.BeautifulThingPR = (function () {

    function BeautifulThingPR(pm) {
     SiebelAppFacade.BeautifulThingPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingPR, SiebelAppFacade.JQGridRenderer);

    BeautifulThingPR.prototype.Init = function () {
     SiebelAppFacade.BeautifulThingPR.superclass.Init.apply(this, arguments);
    }

    BeautifulThingPR.prototype.ShowUI = function () {
     SiebelAppFacade.BeautifulThingPR.superclass.ShowUI.apply(this, arguments);
	 console.log("Hello");
    }

    BeautifulThingPR.prototype.BindData = function (bRefresh) {
     SiebelAppFacade.BeautifulThingPR.superclass.BindData.apply(this, arguments);
    }

    BeautifulThingPR.prototype.BindEvents = function () {
     SiebelAppFacade.BeautifulThingPR.superclass.BindEvents.apply(this, arguments);
    }

    BeautifulThingPR.prototype.EndLife = function () {
     SiebelAppFacade.BeautifulThingPR.superclass.EndLife.apply(this, arguments);
    }

    return BeautifulThingPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThingPR";
 })
}
