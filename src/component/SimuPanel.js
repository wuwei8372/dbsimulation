import React, { Component } from 'react';
import "../Assets/css/SimuPanel.css"
import $ from 'jquery';

import data from '../data/data.json'

$('#entry-group').append("<div class='entry'> You are watching 5th object out of 100 </div>");;

class SimuPanel extends Component {
	// createEntry (image) {
	// 	return <Entry source={image} key={image} />;
	// };

	// createEntries (images) {
	// 	return images.map(this.createEntry);
	// };


	images = [
		require('../images/1cell.jpg'),
		require('../images/2cell.jpg'),
		require('../images/4cell.jpg'),
		require('../images/8cell.jpg'),
		require('../images/16cell.jpg'),
		require('../images/blastula.jpg'),
		require('../images/MB.jpg'),
		require('../images/Gastrula.jpg'),
		require('../images/Plu.jpg'),
		require('../images/NoInformation.jpg')
	];
	// test = this.props.first;
	

  render() {
    return (
    <div className='SimuPanel'>
		<h5> The development of sea urchin embryo is simulated below based on your experiment set-up: </h5>
	    <div class="bar"></div>
			<div class="timeline" id="entry-group">
			    <div class="entry">
			        <h1>0h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[0]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>1.5h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[1]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>2.5h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[2]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>3.5h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[3]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>4.5h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[4]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>15h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[5]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>19h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[6]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>35h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[7]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			    <div class="entry">
			        <h1>72h</h1>
			        <img src={this.images[this.props.imageIndexesFromApp[8]]} alt="Please design experiment to test this experiment set-up, there is no available experiment data to do the simulation"/>
			    </div>
			</div>
	</div> 
    );
  }
}

export default SimuPanel;