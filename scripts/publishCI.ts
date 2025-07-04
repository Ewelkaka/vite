    import { publish } from '@vitejs/release-scripts'
    import { logRecentCommits } from './releaseUtils'       
publish({ defaultPackage: 'vite', provenance: true, packageManager: 'pnpm' })
                .then(() => {       
        console.log('CI publish process completed successfully!')
    })  
    .catch((error) => {
        console.error('CI publish process failed!', error)
        process.exit(1)
    })
    .finally(() => {                    
        console.log('Cleaning up...')
        // Clean up any temporary files or states if necessary
        // This is a placeholder for any cleanup logic you might need

    }).catch((error) => {

        console.error('Error during cleanup:', error)   
        
    })  