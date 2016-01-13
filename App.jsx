App = React.createClass({
 // This mixin makes the getMeteorData method work
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			tasks: Tasks.find({}).fetch()
		}
	},

	renderTasks(){

		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task}/>
		});
	},

	handleSubmit(event){
		event.preventDefault();

		//Find text input via the React "ref"
		var text = React.findDOMNode(this.refs.textInput).value.trim();
		Tasks.insert({
			text: text,
			createdAt: new Date()//this will be the current time. 
		})

		React.findDOMNode(this.refs.textInput).value = "";

	},
	
	render(){
		return(
			<div className="container">
				<header>
					<h1>Todo List: </h1>
					<form className="new-task" onSubmit={this.handleSubmit}>
						<input type="text" ref="textInput" placeholder="Type to add new tasks"/>
						<ul>
							{this.renderTasks()}
						</ul>
					</form>
				</header>
			</div>
			);
	}


});