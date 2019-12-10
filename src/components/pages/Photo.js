import React, { Component } from 'react'
import axios from 'axios'

export default class Photo extends Component {

    
    state={
        photo:[ ],
        loading:true,
        
}
    componentDidMount(){

        let search=window.location.search;
    let params=new URLSearchParams(search)
    let Photo_id=params.get('id')
    // console.log(params.get('id'));

    axios.get('https:api.unsplash.com/photos/'+ Photo_id+'/?client_id=e11f21cb2885a5d47f94ec75b76f9af13320fbf78acc2d066eac9f0bb52b7982').then(
        res=>this.setState({
           photo:res.data,
        }
    
        )
        ) 
    }



    render() {

    //    console.log(this.state.photo);
    var photo=this.state.photo;
        
        return (
            <div>
                

                <div className="photo-single-wrapper">
                        <div className="photo-single-info">
                         {photo.title?<h3>Title:{photo.story.title}</h3>:''} <br/>
                        
                        {photo.description?<p>Description:{photo.description}</p>:''}

                        <ul>
                       <li><label htmlFor="UserName">Uploaded By: </label>{photo.user && photo.user.first_name}    { photo.user&&photo.user.last_name}</li>
                
                        {photo.updated_at?<li><label htmlFor="uploaded_Date">Upload Date : </label>{photo.updated_at}</li>:''} 
                        <li><label htmlFor="Camera_Model">Camera Model :  </label>{photo.exif &&photo.exif.model }</li>
                            
                        </ul>
                        <a href={photo.links&&photo.links.download}>Download</a>
                    </div>
                    
                    <img src={photo.urls && photo.urls.full} alt=""/>
                </div>
            </div>
        )
    }

}