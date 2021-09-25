pipeline{
    agent none
    stages{
        stage('Docker image build'){
            agent {
                // Equivalent to "docker build -f Dockerfile.prod .
                dockerfile {
                    filename 'Dockerfile.prod'
                }
            }
            steps{
                echo 'Dockerfile.prod'
            }
        }
    }
}