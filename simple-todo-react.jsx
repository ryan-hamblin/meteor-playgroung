//Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if(Meteor.isClient){
	//this code is executed on the Client only.
	Meteor.startup(function(){
		React.render(<App />, document.getElementById('render-target'));
	});
}