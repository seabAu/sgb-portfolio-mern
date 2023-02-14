const express = require( "express" );
const app = express();
require( "dotenv" ).config();
const dbConfig = require( "./config/dbConfig" );

// Get portfolio route endpoint for getting data from the database.
const portfolioRoute = require( "./routes/portfolioRoute" );
app.use( express.json() );
app.use( "/api/portfolio", portfolioRoute );

const port = process.env.PORT || 5000;

// Deployment environment variables.
const path = require( "path" );
if ( process.env.NODE_ENV === "production" ) {
    // After building production folder ("build"), tell the server where the production environment files are.
    app.use( express.static( path.join( __dirname, "client/build" ) ) );
    app.get("*", (req, res) => {
        res.sendFile( path.join( __dirname, "client/build/index.html" ) );
    });
}

app.listen( port, () => {
    console.log( `Server running on port ${port}.` );
} );