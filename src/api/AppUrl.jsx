class AppUrl{
    static BaseUrl = "http://localhost:8000/api"
    static ContactDetails = this.BaseUrl+"/store-contact"
    static Categoryall = this.BaseUrl+"/categoryall"
    static ProductAll = this.BaseUrl+"/productall"
    static ProductDetails(id){
        return this.BaseUrl+"/details/"+id;
    }
    // static showDetails = this.BaseUrl+"/show-details"
    // static showData = this.BaseUrl+"/show-data"
    // static details(id){
    //     return this.BaseUrl+"/datadetails/"+id;
    // }

}
export default AppUrl