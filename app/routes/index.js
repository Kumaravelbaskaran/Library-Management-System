import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
    {id:1 , img : "/images/HP1.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:2 , img : "/images/HP2.jpeg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:3 , img : "/images/HP3.jpeg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:4 , img : "/images/HP1.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:5 , img : "/images/HP2.jpeg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:6 , img : "/images/HP3.jpeg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:7 , img : "/images/HP1.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    {id:8 , img : "/images/HP2.jpeg", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit?"},
    ]
  }
});
