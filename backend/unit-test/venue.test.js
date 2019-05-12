const venueService=require("../services/venue.service");

(async ()=>{
   const rslt= await venueService.getList();
   console.log(rslt);
})();