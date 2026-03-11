pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t quote-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop quote-container || true'
                sh 'docker rm quote-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name quote-container quote-app'
            }
        }

    }
}
    

    

        
            
                
            
        

        
            
                
           
        
    

    

   

        
            
                 
            
        

        
           
               
            
        

        
           
             
            
  
