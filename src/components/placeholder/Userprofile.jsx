import React, { Component } from 'react'

class Userprofile extends Component {
    render() {

        let isLoading = this.props.isLoading; 

        return (
             <div className={isLoading}>

             <div className="row">
                  <div className="col-12">
                  <div class="ph-row">
                  <div class="ph-col-12"></div>
                  <div class="ph-col-12"></div>
                  <div class="ph-col-12"></div>
        
                  </div>

                  </div>

             </div>


             </div>
        )
   }
}

export default Userprofile
