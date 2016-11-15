import React  from 'react';
import {Link} from 'react-router';


class LeaderboardPage extends React.Component{
    render(){
        return (
            <div class="jumbotron">
                <h1>Socket Connection</h1>
                <p>Data :1234</p>
                <Link to= "about" className="btn btn-primary btn-lg"> Go Back To Home</Link>
            </div>
        );
    }

}

export default LeaderboardPage;