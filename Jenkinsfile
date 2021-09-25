pipeline{
    agent none
    stages{
        stage('Docker image build'){
            agent {
                // Equivalent to "docker build -f Dockerfile.prod .
                dockerfile {
                    filename 'Dockerfile.prod'
                    args  '-t soyfrancisco/galicia-run'
                }
            }
            steps{
                echo 'Dockerfile.prod'
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