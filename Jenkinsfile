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
                sh 'docker rm -f galicia'
                sh 'docker run -d -p 80:80 --name galicia soyfrancisco/galicia-run'
            }
        }
    }
}