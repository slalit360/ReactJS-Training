let validateCluster = (loc) =>{
    return new Promise( (resolve, reject) =>
    {
        if(loc=='BDC4' || loc=='BDC6' || loc=='BDC12'){
            resolve("Valid location");
        }
        else{
            reject("Not valid Location");
        }
    } )
}

validateCluster('BDC10')
.then( (status) => console.log('Cluster 1'))
.catch( (error) => console.log('Cluster 2'));
