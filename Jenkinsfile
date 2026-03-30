pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies"
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo "Building React application"
                sh 'npm run build'
            }
        }

        stage('Deploy to Testing Server') {
            steps {
                echo "Deploying build to /var/www/html/infra"
                sh '''
                rm -rf /var/www/html/infra/dist/*
                cp -r dist/* /var/www/html/infra/dist/
                '''
            }
        }

    }

    post {
        success {
            echo "✅ Deployment completed successfully"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}