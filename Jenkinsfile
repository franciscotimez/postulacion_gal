pipeline{
    agent none
    stages{
        stage('Docker image build'){
            agent any
            steps{
                echo 'Dockerfile.prod'
                sh 'docker build -f Dockerfile.prod -t soyfrancisco/galicia-run .'
            }
        }

        stage('Docker run'){
            agent any
            steps{
                echo 'Dockerfile.prod'
                sh 'docker run -p 80:80 soyfrancisco/galicia-run'
            }
        }
    }
}