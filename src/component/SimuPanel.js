import React, { Component } from 'react';
import "../Assets/css/SimuPanel.css"
import $ from 'jquery';
import Entry from './entry.js'
import data from '../data/data.json'

$('#entry-group').append("<div class='entry'> You are watching 5th object out of 100 </div>");;

class SimuPanel extends Component {
	createEntry (image) {
		return <Entry source={image} key={image} />;
	};

	createEntries (images) {
		return images.map(this.createEntry);
	};


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
	];
	test = this.props.first;
	

  render() {
    return (
    <div className='SimuPanel'>
			
	    <div class="bar"></div>
			<div class="timeline" id="entry-group">
			    <div class="entry">
			        <h1>0h</h1>
			        <img src={this.images[this.test]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>1.5h</h1>
			        <img src={this.images[1]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>2.5h</h1>
			        <img src={this.images[2]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>3.5h</h1>
			        <img src={this.images[3]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>4.5h</h1>
			        <img src={this.images[4]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>15h</h1>
			        <img src={this.images[5]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>19h</h1>
			        <img src={this.images[6]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>35h</h1>
			        <img src={this.images[7]} alt="fail to load"/>
			    </div>
			    <div class="entry">
			        <h1>72h</h1>
			        <img src={this.images[8]} alt="fail to load"/>
			    </div>
			</div>
	</div> 
    );
  }
}

export default SimuPanel;