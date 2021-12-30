class AppUrl{
    static BaseUrl = "http://localhost:8000/api"
    static UserLogin = this.BaseUrl+"/login"
    static UserData = this.BaseUrl+"/user"
    static UserRegister = this.BaseUrl+"/register"
    static Allemployee = this.BaseUrl+"/allemployee"
    static AttendenceSubmit = this.BaseUrl+"/attendencestore"
    static AttendenceOut = this.BaseUrl+"/attendenceupdate"

    static AttendenceDetails(id){
        return this.BaseUrl+"/attendencedetails/"+id;
    }


    // static ContactDetails = this.BaseUrl+"/store-contact"
    // static Categoryall = this.BaseUrl+"/categoryall"
    // static ProductAll = this.BaseUrl+"/productall"
    // static ProductDetails(id){
    //     return this.BaseUrl+"/details/"+id;
    // }
    // static showDetails = this.BaseUrl+"/show-details"
    // static showData = this.BaseUrl+"/show-data"
    // static details(id){
    //     return this.BaseUrl+"/datadetails/"+id;
    // }

}
export default AppUrl