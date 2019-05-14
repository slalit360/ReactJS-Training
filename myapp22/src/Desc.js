import React from 'react';

export default class Desc extends React.Component{

    tutorials ={
        react :'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. A JavaScript library for building user interfaces.',
        angular :'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
        mongodb :'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. ',
        node : 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.'
    }
    render(){
        
        return(
            <div style={{margin:'50px'}}>
                {this.tutorials[this.props.match.params.topic]}
            </div>
        );
    }
}