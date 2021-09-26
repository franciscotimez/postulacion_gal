pipeline{
    agent none
    options{
        timeout(time:2, unit:'MINUTES')
    }
    stages{
        stage('Docker image build'){
            agent any
            steps{
                echo 'Dockerfile.prod'
                sh 'docker build -f Dockerfile.prod -t soyfrancisco/galicia-run .'
            }
            post {
                success {
                    slackSend color: "good", message: "Galicia Build image success"
                }
                failure {
                    slackSend color: "bad", message: "Galicia Build image failure"
                }
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