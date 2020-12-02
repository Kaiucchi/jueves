import React from 'react';
import ReactDOM from 'react-dom';
import HoyEsJueves from './HoyEsJueves';




class App extends React.Component {
    
  


    componentDidMount(){
        //fetch date api

        

      
        
    }
 
    render() {
    return (
        <HoyEsJueves />
    );
    
};
};

    


ReactDOM.render(
    <App />,
    document.querySelector('#root'));