import { exec } from 'shelljs';

// Allow console output in test classes
/* tslint:disable no-console */
const stopAndRemoveDockerContainer = () => {
	console.log('Stopping and removing the docker container...');
	exec('docker stop salespaltest && docker rm salespaltest', { silent: true });
};

stopAndRemoveDockerContainer();
