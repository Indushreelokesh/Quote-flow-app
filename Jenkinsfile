pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/Quote-flow-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t quote-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'sudo docker run -d -p 3000:3000 quote-app'
            }
        }

    }
}
