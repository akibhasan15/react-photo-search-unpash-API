import React, { Component } from 'react'
import axios from 'axios'
export default class Latestphotos extends Component {

    state={
            photos:[ ],
            page:1,
            loading:true,
            search_query:'',
            searching:false,
            totalFound:'',
            totalFoundPages:'',


            

    }
    
    componentDidMount(){
        axios.get('https:api.unsplash.com/photos/?client_id=e11f21cb2885a5d47f94ec75b76f9af13320fbf78acc2d066eac9f0bb52b7982&per_page=4&page='+this.state.page).then(res=>this.setState({
                photos:res.data,
                page:2,
                loading:false

            })   
            
            ) 
    }
   
    loadNextPage=(e)=>{
        // this.setState({page:this.state.page+1})      
        console.log(this.state.page)  
        axios.get('https:api.unsplash.com/photos/?client_id=e11f21cb2885a5d47f94ec75b76f9af13320fbf78acc2d066eac9f0bb52b7982&per_page=4&page='+this.state.page).then(res=>this.setState({
        photos:res.data,
        page:this.state.page + 1,
        loading:false}
        ))  
        // window.scrollTo(0,0)
        // console.log(this.state.page)
    }
    searchTrigger=(e)=>{
        // console.log(this.state.searching);
        // this.setState({
        //     page:1
        // })
        axios.get('https:api.unsplash.com/search/photos/?client_id=e11f21cb2885a5d47f94ec75b76f9af13320fbf78acc2d066eac9f0bb52b7982&query='+this.state.search_query+'&per_page=6&page='+this.state.page).then(res=>this.setState({
            photos:res.data.results,
            page:2,
            loading:false,
            searching:true,
            totalFound:res.data.total,
            totalFoundPages:res.data.total_pages,

        }
            )) 
            e.preventDefault();
            // console.log(this.state.page);
    }
    
   nextSearchLoadPage=(e)=>{
        // this.setState({page:this.state.page+1})      
        axios.get('https:api.unsplash.com/search/photos/?client_id=e11f21cb2885a5d47f94ec75b76f9af13320fbf78acc2d066eac9f0bb52b7982&query=' + this.state.search_query + '&per_page=6&page=' + this.state.page).then(res=>this.setState({
            photos:res.data.results,
            page:this.state.page + 1,
            loading:false,
            searching:true}
            )) 
        // window.scrollTo(0,0)
        // console.log(this.state.page)
        console.log(this.state.photos)
    }

    searchQuery=(e)=>{
        this.setState({search_query:e.target.value})
        console.log(this.state.search_query);
    }
    


    render() {
        var searchHeading='';
        var searchBtn='';
        var searchInfo=''
    if(this.state.searching===true){
          searchHeading=<h2>You searched with <i> {this.state.search_query}</i></h2>
          searchBtn=<button onClick={this.nextSearchLoadPage}>Load Page {this.state.page}</button>
          searchInfo=<span>Total Found Photos:{this.state.totalFound} | Page {this.state.page - 1} of {this.state.totalFoundPages} </span>
    }
    else{
        searchHeading=<h2>Latest Photos</h2>
        searchBtn=<button onClick={this.loadNextPage}>Load Page {this.state.page}</button>
        searchInfo=''

    }
        // console.log(this.state.photos)
        // console.log(this.state.page)
        if(this.state.loading===true){
          return(<div>Loading</div>)
        }

        

        return (

             <React.Fragment>

            <div className="form row ">
            
             <div className="col my-auto">{searchHeading} {searchInfo}</div> 
           
           <div className="col col-auto my-auto">
        
<form action="" onSubmit={this.searchTrigger}>

    <input type="text" value={this.state.search_query}onChange={this.searchQuery} placeholder="Search!"/>
    <input type="submit" value="Search"/>
</form>

           </div>
           </div>
                                 
               
               
                <div className="row ">
            {
             this.state.photos.map((photo)=>(
                <div key={photo.id} className="col-lg-3">
                    <div className="single-item-photo">
                        <a className="d-block" href={'photo?id=' + photo.id}>
                        <div className="photo-wrapper">
                        <img src={photo.urls.small} alt={photo.alt_description}/>
 
                        </div>
                            <h5>{photo.alt_description}</h5>
                            <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                            </a>
                            </div>
                </div>
               
            ) )} </div>


            <div className="row">

                    <div className="col-lg-12">
                        <div className="load-more-btn">{searchBtn}</div>
                    </div> 
                    </div>
                    
             </React.Fragment>
             ) 
             
      
        
    }
}
