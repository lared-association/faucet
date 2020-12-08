pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        stage('Build') {
            steps {
                sh 'npm build'
            }        
        }
    }
}