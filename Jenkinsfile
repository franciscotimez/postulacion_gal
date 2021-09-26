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
                    telegramSend(message: 'Build success!!', chatId: 875738072)
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