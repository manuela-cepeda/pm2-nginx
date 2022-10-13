import express from 'express'
import os from 'os' //info sistema operativo
import cluster from 'cluster'

const CPUs = os.cpus().length; 
const app = express();

if(cluster.isPrimary) { 
	console.log(`soy un proceso primario con pid ${process.pid}`)
	
	for ( let i=0; i < CPUs; i++){
		cluster.fork();
	}


	cluster.on('exist', worker => {
		console.log(`murio el proceso ${process.pid}`) 

	cluster.fork()
})

} else {
	console.log(`soy un proceso worker con pid ${process.pid}`)
	app.listen(8080, ()=> console.log('listening'));
	
}
