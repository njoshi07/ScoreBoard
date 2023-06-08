export default class FormFieldsValidation {
 
  constructor (totalgames, playerwithmaxwins, maxgamewinner, selectplayeddate) {    
          this.totalgames = totalgames,
          this.playerwithmaxwins = playerwithmaxwins,
          this.maxgamewinner = maxgamewinner,
          this.selectplayeddate = selectplayeddate  
       } 
      
      //  Validation empty field   
      allFieldsShouldBeFilled() {
        if(!this.totalgames || !this.playerwithmaxwins || !this.maxgamewinner || !this.selectplayeddate) {
          return false;
        } else {
          return true;
        }
      }
}



